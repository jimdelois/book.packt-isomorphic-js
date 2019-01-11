import del from 'del';
import webpack from 'webpack';
import Promise from 'bluebird';
import run from './run';
import webpackConfig from './webpack.config';

async function clean() {
  await del(['build/*', '!build/.git'], { dot: true });
}

async function copy() {
  const ncp = Promise.promisify(require('ncp'));
  await ncp('package.json', 'build/package.json');
}

async function bundle() {
  return new Promise((resolve, reject) => {
    let runCount = 0;
    const bundler = webpack(webpackConfig);
    const cb = (err, stats) => {
      if (err) {
        return reject(err);
      }

      console.log(stats.toString(webpackConfig[0].stats));

      if (++runCount === (watch ? webpackConfig.length : 1)) {
        return resolve();
      }
    };

    if (watch) {
      bundler.watch(200, cb);
    } else {
      // Run Webpack normally, then
      bundler.run(cb);
    }
  });
}

async function build() {
  await run(clean);
  await run(copy);
  await run(bundle);
}

export default build;

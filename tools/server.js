import path from 'path';
import cp from 'child_process';
import Promise from 'bluebird';
import build from './build';
import run from './run';

async function serve() {
  const watch = true;
  const app = path.join(__dirname, '../build/server.js');
  const gaze = Promise.promisify(require('gaze'));

  await run(build, { watch });
  await new Promise((resolve, reject) => {
    function start() {
      const server = cp.
    }
  })
}

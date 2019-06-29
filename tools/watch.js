import build from './build';
import run from './run';

async function watch() {
  await run(build, { watch: true });
}

export default watch;

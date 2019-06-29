// Used to augment (p. 23) build task runs with timestamps and other info.
// Called in via build.js to decorate with this run
function format(time) {
  return time.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');
}

async function run(fn, options) {
  const start = new Date();
  console.log(`[${format(start)}] Starting '${fn.name}'...`);

  await fn(options);
  const end = new Date();
  const duration = end.getTime() - start.getTime();

  console.log(`[${format(end)}] Finished '${fn.name}' after ${duration} ms.`);
}

if (require.main === module && process.argv.length > 2) {
  delete require.cache[__filename];
  const module = require(`./${process.argv[2]}.js`).default;

  run(module).catch(err => console.error(err.stack));
}

export default run;

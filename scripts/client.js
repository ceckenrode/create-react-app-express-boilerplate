const opts = {
  stdio: 'inherit',
  cwd: 'client',
  shell: true
};

let args = [];

if (!process.argv[2]) {
  args = ['start'];
}
else {
  args = process.argv.slice(2, process.argv.length);
}

require('child_process').spawn('yarn', args, opts);

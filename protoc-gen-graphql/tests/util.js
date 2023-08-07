// TODO change to node:fs/promises after node@20.6 released
// https://github.com/nodejs/node/pull/48856
const fs = require('node:fs');
const { join } = require('node:path');
const { spawn } = require('node:child_process');

exports.getTestDirs = () => {
  // get all directories
  const testDirContent = fs.readdirSync(__dirname)
  console.log(testDirContent)
  const testDirs = []

  for (const dirItem of testDirContent) {
    const dirPath = join(__dirname, dirItem)
    const stat = fs.lstatSync(dirPath)
    if (stat.isDirectory()) {
      testDirs.push(dirPath)
    }
  }

  return testDirs
}

exports.spawnProtocProcess = () => {
  const ls = spawn('ls', ['-lh', '/usr']);

  ls.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  ls.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  ls.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
}
// TODO change to node:fs/promises after node@20.6 released
// https://github.com/nodejs/node/pull/48856
const fs = require("node:fs");
const { join } = require("node:path");
const { spawn } = require("node:child_process");
const path = require("node:path");
const mock = require("mock-fs");

exports.getTestDirs = () => {
  // get all directories
  const testDirContent = fs.readdirSync(__dirname);
  console.log(testDirContent);
  const testDirs = [];

  for (const dirItem of testDirContent) {
    const dirPath = join(__dirname, dirItem);
    const stat = fs.lstatSync(dirPath);
    if (stat.isDirectory()) {
      testDirs.push(dirPath);
    }
  }

  return testDirs;
};

exports.runProtoc = (dir) => {
  mock({
    "/tmp": mock.load(dir, { recursive: false, lazy: false }),
    '/tmp/protoc': mock.load(path.resolve(__dirname, '../../vendor/protoc-23.2-osx-aarch_64/bin/protoc')),
  });

  process.env.PATH = `${process.env.PATH}:/tmp`
  const child = spawn("ls", ["-c", "/tmp", "-la"], {
    cwd: process.cwd(),
    env: {
      PATH: process.env.PATH,
    },
  });

  child.stdout.on('data', function(data) {
    console.log('PATH:', data.toString());
  });

  child.stderr.on('data', function(data) {
    console.error('Error:', data.toString());
  });

  child.on('exit', function(code) {
    console.log('Child process exited with code', code);
  });
};

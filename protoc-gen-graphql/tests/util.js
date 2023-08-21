// TODO change to node:fs/promises after node@20.6 released
// https://github.com/nodejs/node/pull/48856
const fs = require("node:fs");
const { join } = require("node:path");
const { spawnSync } = require("node:child_process");

exports.getTestDirs = () => {
  // get all directories
  const testDirContent = fs.readdirSync(__dirname);
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

exports.runProtoc = (cwd, protoFiles) => {
  spawnSync("protoc", ["--graphql_out", ".", ...protoFiles], {
    cwd,
  });
};

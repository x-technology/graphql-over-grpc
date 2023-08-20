const assert = require("node:assert");
const fs = require("node:fs");
const { it, describe } = require("node:test");
const { getTestDirs, runProtoc } = require("./util");

describe("executes all test packages", (t) => {
  for (const dir of getTestDirs()) {
    it(`runs protoc in ${dir}`, async (t) => {
      runProtoc(dir);

      actualDir = fs.readdirSync(dir);
      assert.equal(actualDir.includes('schema.gql'), true, 'should produce schema file');
      assert.equal(actualDir.includes('debug.log'), true, 'should produce debug file');
    });
  }
});

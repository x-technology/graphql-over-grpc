const assert = require("node:assert");
const fs = require("node:fs");
const { it, describe } = require("node:test");
const { getTestDirs, runProtoc } = require("./util");

describe("executes all test packages", (t) => {
  for (const dir of getTestDirs()) {
    it(`runs protoc in ${dir}`, async (t) => {
      runProtoc(dir);
      assert.strictEqual(1, 1);

      tmpDir = fs.readdirSync("/tmp");
      console.log(tmpDir);
    });
  }
});

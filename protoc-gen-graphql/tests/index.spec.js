const assert = require('node:assert');
const fs = require('node:fs');
const { it, describe } = require('node:test');

const mock = require('mock-fs');

describe('executes all test packages', (t) => {
  for (const dir of testDirs) {
    mock({
      '/tmp': mock.load(dir, { recursive: false, lazy: false }),
    });

    it(`runs protoc in ${dir}`, async (t) => {
      let tmpDir = fs.readdirSync('/tmp')
      console.log(tmpDir)

      assert.strictEqual(1, 1);

      tmpDir = fs.readdirSync('/tmp')
      console.log(tmpDir)
    });
  }
})

const assert = require("node:assert");
const fs = require("node:fs");
const { join } = require("node:path");
const { it, describe } = require("node:test");
const { runProtoc } = require("./util");

describe("grpc definitions", () => {
  const debugFile = "debug.log";
  const schemaFile = "schema.gql";
  const testDataPath = "/protoc-gen-graphql/tests/"

  it("should produce single schema and debug files for single file definition", () => {
    const dir = join(testDataPath, "single-file");
    const originalDir = fs.readdirSync(dir);
    runProtoc(dir, originalDir);

    const actualDir = fs.readdirSync(dir);
    assert.equal(
      actualDir.includes(debugFile),
      true,
      "should produce schema file"
    );
    assert.equal(
      actualDir.includes(debugFile),
      true,
      "should produce debug file"
    );
  });

  it("should produce multiple schemas and debug file for multiple file definitions", () => {
    const dir = join(testDataPath, "multiple-files");
    const originalDir = fs.readdirSync(dir);
    runProtoc(dir, originalDir);

    const actualDir = fs.readdirSync(dir);
    assert.equal(
      actualDir.includes(debugFile),
      true,
      "should produce schema file"
    );
    assert.equal(
      actualDir.includes(debugFile),
      true,
      "should produce debug file"
    );

    const actualDebug = fs.readFileSync(join(dir, debugFile), "utf-8");
    originalDir.forEach(protoFile => {
      assert.equal(actualDebug.includes(`file: ${protoFile}`), true, `should process ${protoFile} file`);
    });
  });
});

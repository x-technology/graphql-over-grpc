const assert = require("node:assert");
const fs = require("node:fs");
const { join, parse } = require("node:path");
const { it, describe } = require("node:test");
const { runProtoc } = require("./util");

describe("grpc definitions", () => {
  const debugFile = "debug.log";
  const testDataPath = "/protoc-gen-graphql/tests/";

  it("should produce single schema and debug files for single file definition", () => {
    const dir = join(testDataPath, "single-file");
    const originalDir = fs.readdirSync(dir);
    const schemaFile = `${parse(originalDir[0]).name}.gql`;
    runProtoc(dir, originalDir);

    const actualDir = fs.readdirSync(dir);
    assert.equal(
      actualDir.includes(schemaFile),
      true,
      `should produce schema file ${schemaFile}`
    );
    assert.equal(
      actualDir.includes(debugFile),
      true,
      `should produce debug file ${debugFile}`
    );
  });

  it("should produce multiple schemas and debug file for multiple file definitions", () => {
    const dir = join(testDataPath, "multiple-files");
    const originalDir = fs.readdirSync(dir);
    runProtoc(dir, originalDir);

    const actualDir = fs.readdirSync(dir);
    originalDir
      .map(parse)
      .map(({ name }) => `${name}.gql`)
      .forEach((schemaFile) => {
        assert.equal(
          actualDir.includes(schemaFile),
          true,
          `should produce schema file ${schemaFile}`
        );
      });

    assert.equal(
      actualDir.includes(debugFile),
      true,
      `should produce debug file ${debugFile}`
    );

    const actualDebug = fs.readFileSync(join(dir, debugFile), "utf-8");
    originalDir.forEach((protoFile) => {
      assert.equal(
        actualDebug.includes(`file: ${protoFile}`),
        true,
        `should process ${protoFile} file`
      );
    });
  });
});

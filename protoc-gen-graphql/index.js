#!/usr/bin/env node
const fs = require('fs');
const { CodeGeneratorRequest, CodeGeneratorResponse } = require('google-protobuf/google/protobuf/compiler/plugin_pb');

function generateFile() {
  // console.log('inside')
  // const request = CodeGeneratorRequest.deserializeBinary(fs.readFileSync(0));
  const response = new CodeGeneratorResponse();
  // generateCode(request, generator, response);

  const file = new CodeGeneratorResponse.File();
  file.setName('output.txt');
  file.setContent('This is the content of the file.');

  response.addFile(file);

  // console.log(1, response.serializeBinary());
  fs.writeFileSync(1, response.serializeBinary());
};

generateFile()
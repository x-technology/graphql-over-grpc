const protoLoader = require('@grpc/proto-loader')
const grpc = require('@grpc/grpc-js')
const protoFileName = "./books.proto"

const packageDefinition = protoLoader.loadSync(protoFileName, {
  includeDirs: [__dirname]
})
const proto = grpc.loadPackageDefinition(packageDefinition)
const client = new proto.books.BooksService('0.0.0.0:8001', grpc.credentials.createInsecure());

client.list(null, (error, response) => {
  if (error) {
    console.error(error)
    return;
  }

  console.log("read books from server " + JSON.stringify(response))
})
const protoLoader = require('@grpc/proto-loader')
const grpc = require('@grpc/grpc-js')
const protoFileName = "./books.proto"
const books = require('./books.json')

const packageDefinition = protoLoader.loadSync(protoFileName, {
  includeDirs: [__dirname]
})
const proto = grpc.loadPackageDefinition(packageDefinition)

const list = (call, callback) => {
  console.log(call)
  callback(null, { books })
}

const server = new grpc.Server()
server.addService(proto.books.BooksService.service, {
  list,
})

server.bindAsync('0.0.0.0:8001', grpc.ServerCredentials.createInsecure(), (error, port) => {
  if (error) {
    throw error
  }

  server.start()
  console.log(`listenting on ${port}`)
})
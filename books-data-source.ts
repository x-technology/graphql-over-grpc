const protoLoader = require('@grpc/proto-loader')
const grpc = require('@grpc/grpc-js')
const protoFileName = "./books.proto"

export class BooksDataSource {
  private client;

  constructor() {
    this.client = this.initializeGRPCClient();
  }

  initializeGRPCClient() {
    const packageDefinition = protoLoader.loadSync(protoFileName, {
      includeDirs: [__dirname]
    })
    const proto = grpc.loadPackageDefinition(packageDefinition)
    return new proto.books.BooksService('0.0.0.0:8001', grpc.credentials.createInsecure());
  }

  async getBooks() {
    return await new Promise(resolve => {
      this.client.list(null, (error, response) => {
        if (error) {
          console.error(error)
          return;
        }

        console.log("read books from server " + JSON.stringify(response))
        resolve(response.books)
      })
    })
  }
}
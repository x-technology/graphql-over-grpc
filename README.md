# graphql-over-grpc-experiment

Use grpc as a data source for graphql apollo server

## Start

1. [Install protoc](https://github.com/protocolbuffers/protobuf/releases) into `./vendor` folder, check `package.json` "compile:proto" script has correct path "vendor/protoc-23.2-osx-x86_64/bin/protoc",
2. Run

```bash
npm run compile:graphql
npm run start:grpc:server
npm run start:graphql:server
```

3. Go to [localhost:4000](http://localhost:4000/) and run query

```graphql
query ExampleQuery {
  grpcBooks {
    title
    author
  }
}
```


## Links

- [Apollo Server - Fetching data](https://www.apollographql.com/docs/apollo-server/data/fetching-data)
- [grpc node.js simple start](https://github.com/x-technology/mono-repo-nodejs-svc-sample/tree/main/docs/demo-protobuf)
- [protoc plugins](https://github.com/protocolbuffers/protobuf/blob/main/docs/third_party.md)

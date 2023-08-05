# [Introduction to GraphQL](https://graphql.org/learn/)

> GraphQL is a query language for your API, and a server-side runtime for executing queries using a type system you define for your data.

- Query Language
- API
- Type System

## [Schema & Type System](https://graphql.org/learn/schema/)

> Schema (Root type) defines all of the possible entry points into the GraphQL API

```gql
type Character {
  name: String!
  appearsIn: [Episode!]!
}

scalar Date
```

Features:
- Query (required)
- Mutation
- Scalar (Int, Float, String, Boolean, ID)
- Enum
- Lists and Required - `[], !`
- Interfaces & Type Definitions
- Unions
- Inputs

```gql
type Human implements Character {
  id: ID!
  name: String!
  friends: [Character]
  appearsIn: [Episode]!
  starships: [Starship]
  totalCredits: Int
}

type Droid implements Character {
  id: ID!
  name: String!
  friends: [Character]
  appearsIn: [Episode]!
  primaryFunction: String
}
```

## [Server Implementation](https://graphql.org/learn/execution/)

- Resolvers
- context

## Additional Features

- [Introspection](https://graphql.org/learn/introspection/) (`__schema, __type, ...`)

## [Tools](https://graphql.org/code/#javascript)

Potential tools to use in the project:
- [GraphQL Scalars - Data Integrity and Strict Validations on GraphQL](https://the-guild.dev/graphql/scalars) to reuse with cross-environment types

## Comparison

| Compare  | REST       | gRPC         | GraphQL     |
|----------|------------|-------------|-------------|
| Focus    | Resource   | Action      | Action    |
| Semantics| HTTP       | Programming | Programming |
| Format   | Text       | Binary      | Text        |
| Validation | ∅       | Types      | Types        |
| Languages | Agnostic       | [Implementations](https://grpc.io/docs/languages/)      | [Implementations](https://graphql.org/code/)        |
| Environments | Agnostic       | [Implementations](https://grpc.io/docs/platforms/)      | Implementations |
| Endpoints | Multiple       | Single      | [Single](https://graphql.org/learn/best-practices/#http) |
| Versioning | ∅       | ∅      | ∅ |

...More on [REST, GraphQL, gRPC](https://www.karanpratapsingh.com/courses/system-design/rest-graphql-grpc) comparison

# Links

- [Introduction to GraphQL](https://graphql.org/learn/)
- [GraphQL Tools](https://graphql.org/code/)
- [GraphQL Current Working Specification Draft](http://spec.graphql.org/draft/)
- [GraphQL explained, 2016](https://www.apollographql.com/blog/graphql/basics/graphql-explained/)
- [GraphQL vs REST comparison](https://www.apollographql.com/blog/graphql/basics/graphql-vs-rest/)
- [GraphQL Mesh A fully-featured GraphQL gateway framework, incl GRPC](https://the-guild.dev/graphql/mesh/docs/handlers/grpc)
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    email: String!
    username: String!
    password: String!
    favorites: [Asset]
  }

  type Asset {
    _id: ID!
    name: String!
    permalink: String!
    image_url: String!
  }

  type Query {
    user: User
    assets: [Asset]!
  }

  type Mutation {
    login(email: String): User
    createAssets: [Asset]!
  }
`;

module.exports = typeDefs;

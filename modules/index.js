const { gql } = require('apollo-server-express');
const users = require('./users');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const typeDefs = gql`
  type Query {
    getVersion: String!
  }

  type Mutation {
    version: String!
  }
`;

const resolvers = {
  Query: {
    getVersion: () => `v1`,
  },
};

const schema = makeExecutableSchema({
  typeDefs: [typeDefs, users.typeDefs],
  resolvers: [resolvers, users.resolvers],
});

module.exports = schema;
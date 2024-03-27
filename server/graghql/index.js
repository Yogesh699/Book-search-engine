const bookResolvers = require("./books/resolvers.js");
const authResolvers = require("./auth/resolvers.js");
const bookTypes = require("./books/typeDefs.js");

// Combining all the types
const typeDefs = bookTypes;

// Combining all the resolvers
const resolvers = {
  Mutation: {
    ...bookResolvers.Mutation,
    ...authResolvers.Mutation,
  },
  Query: {
    ...authResolvers.Query,
  },
};

module.exports = { typeDefs, resolvers };

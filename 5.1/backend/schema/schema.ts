import graphql = require("graphql");
const { GraphQLString, GraphQLInt, GraphQLObjectType, GraphQLSchema } = graphql;

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {},
});

const schema = new GraphQLSchema({
  query: RootQuery,
});

export default schema;

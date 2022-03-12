const graphql = require("graphql");
const {
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
} = graphql;

const { getCustomers } = require("../service/characterService");

// each object that we want to display, needs a type declaration
const CustomerType = new GraphQLObjectType({
  name: "Customer",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    address: { type: GraphQLString },
    createdDate: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getCustomers: {
      type: new GraphQLList(CustomerType),
      args: { name: { type: GraphQLString } },
      resolve(parent, args) {
        return getCustomers();
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});

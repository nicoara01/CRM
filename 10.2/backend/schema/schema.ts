import graphql = require("graphql");
const {
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
} = graphql;

import { getCustomers } from "../service/customerService";

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

const schema = new GraphQLSchema({
  query: RootQuery,
});

export default schema;

import graphql = require("graphql");
const {
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLBoolean,
} = graphql;

import {
  getCustomers,
  createCustomer,
  deleteCustomer,
} from "../service/customerService";

// each object that we want to display, needs a type declaration
const CustomerType = new GraphQLObjectType({
  name: "Customer",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    address: { type: GraphQLString },
    dateCreated: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getCustomers: {
      type: new GraphQLList(CustomerType),
      args: {},
      resolve(parent, args) {
        return getCustomers();
      },
    },
  },
});

const RootMutation = new GraphQLObjectType({
  name: "RootMutationType",
  fields: {
    createCustomer: {
      type: CustomerType, // return the newly created customer
      args: { name: { type: GraphQLString }, address: { type: GraphQLString } }, // we take the name and address as inputs
      resolve(parent, args) {
        return createCustomer(args.name, args.address);
      },
    },
    deleteCustomer: {
      type: GraphQLBoolean,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        deleteCustomer(args.id);
        return true;
      },
    },
  },
});

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});

export default schema;

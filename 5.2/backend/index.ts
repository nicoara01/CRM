import express = require("express");
const app = express();
import schema from "./schema/schema";
import { graphqlHTTP } from "express-graphql";

app.use(
  "/graphql", // the URL that we will access
  graphqlHTTP({
    schema, // the place where we will define our queries and mutations
    graphiql: true, // automatically provide us with a UI
  })
);

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});

import express = require("express");
import schema from "./schema/schema";
import { graphqlHTTP } from "express-graphql";
const app = express();
const cors = require("cors");

app.use(cors());
app.use(
  "/graphql", // the URL that we will access
  graphqlHTTP({
    schema, // the place where we will define our queries and mutations
    graphiql: true, // automatically provide us with a UI
  })
);

app.listen(3100, () => {
  console.log("Server is running at port 3100");
});

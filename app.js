const express = require("express");
const graphqlHTTP = require("express-graphql");
const mongoose = require("mongoose");

const schema = require("./gql/schema");

const app = express();

mongoose.connect("mongodb://Thomas:interpol01@ds243059.mlab.com:43059/gql-playlisty");
mongoose.connection.once("open", () => {
  console.log("connect to database");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("now listening for requests on port 4000");
});

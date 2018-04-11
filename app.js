const express = require("express");
const graphqlHTTP = require("express-graphql");

const schema = require("./gql/schema");

const app = express();

let books = [
  { name: "Name of the Wind", genre: "Fantasy", id: "1" },
  { name: "The Final Empire", genre: "Fantasy", id: "2" },
  { name: "The Long Earth", genre: "Sci-Fi", id: "3" }
];

app.use(
  "/graphql",
  graphqlHTTP({
    schema
  })
);

app.listen(4000, () => {
  console.log("now listening for requests on port 4000");
});

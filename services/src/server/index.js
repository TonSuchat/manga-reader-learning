import { ApolloServer } from "apollo-server-express";
import bodyParser from "body-parser";
import express from "express";

// import resolvers from "../graphql/resolvers";
import typeDefs from "../graphql/typeDefs";

const port = process.env.PORT || 3000;

const server = new ApolloServer({
  resolvers: {},
  typeDefs,
});

const app = express();

server.applyMiddleware({ app, path: "/graphql" });

app.all("*", (req, res) => {
  res.status(404).json({ status: "Missing endpoint" });
});

app.listen(port, "0.0.0.0", () =>
  console.log(`Service listening on port ${port}`)
);

import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    testing: Int!
  }
`;

export default typeDefs;

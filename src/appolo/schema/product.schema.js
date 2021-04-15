import { gql } from "apollo-server-express";

module.exports = gql`
    
    type Product {
        id: ID!
        name: String
        price: Float
        maxTarget: Float
        image: String
        description: String
    }
    
   
     extend type Query {
        products: [Product]
        product(id: ID!): Product
     }




`
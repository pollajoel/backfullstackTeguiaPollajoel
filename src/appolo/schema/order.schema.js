import {gql} from "apollo-server-express"
module.exports = gql`
    type Order {
        id:ID!,
        totalAmount: Float,
        products:[ID]
        user: User
    }
    input OderInput {
        id:ID!,
        totalAmount: Float
        products:[ID]
        user:ID!
    } 
    
     extend type Query {
        orders: [Order]
        order(id: ID!): Order
     }

`
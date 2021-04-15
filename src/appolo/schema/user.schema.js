const {gql} = require('apollo-server-express');
module.exports = gql`
  type User {
    id: ID!
    isAdmin:Boolean
    email:String
    passWord:String
    name:String
    firstName:String
    adresse:String
  }
  
  input userInput {
    isAdmin:Boolean
    email:String
    passWord:String
    name:String
    firstName:String
    adresse:String
  }
 
  extend type Query {
    users: [User]
    user(id: ID!): User
  }
  extend type Mutation{
  createuser(email:String,passWord:String):User
  updateUser(id:ID!,input:userInput):User
  deleteUser(id:ID!):User
  }
  
`;
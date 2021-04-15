const { gql } = require('apollo-server-express');

const userSchema = require('./user.schema');
const productSchema = require('./product.schema')
const orderSchema = require('./order.schema')

const linkSchema = gql`
    type Query {
        _:Boolean
    }
    type Mutation {
        _: Boolean
    }
`;
module.exports = [linkSchema,userSchema,productSchema,orderSchema]
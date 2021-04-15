const config = require("../configs")
const PORT = process.env.PORT
const express = require("express")
const app = express();
const bodyParser = require('body-parser')
const apiRouter = require("../routes")
//import apiRouter from "../routes"
var cors = require('cors');
var path = require('path');

const schema = require("../appolo/schema");
const resolvers = require("../appolo/resolvers");
const { ApolloServer, gql } = require('apollo-server-express');

const graphQlServer = new ApolloServer({
    introspection: true,
    playground: true,
    typeDefs : schema,
    resolvers
})

graphQlServer.applyMiddleware({ app, path: "/graphql" });

//app.get('/',(req,res)=>{
  //  res.send("Hello")
//})


//app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(cors());
app.use('/uploads', express.static('./uploads'));
app.use(bodyParser.json());
app.use('/api/v1', apiRouter);



module.exports.start =()=>{
    app.listen(PORT,(err)=>{
        //console.warn(`Serveur Listen on port ${PORT}`)
    })

}
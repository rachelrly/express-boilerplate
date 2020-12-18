require('dotenv').config()
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const app = express()

const schema = buildSchema(`
type Query {
    hello: String
}`);

const root = {
    hello: () => {
        return 'Hello world!'
    }
}

app.get('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));


module.exports = app;
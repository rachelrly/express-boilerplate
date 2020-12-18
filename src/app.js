require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const app = express();
app.use(helmet());


const schema = buildSchema(`
type Query {
    hello: String
}`);

const root = {
    hello: () => {
        return 'Hello world!'
    }
};

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));


module.exports = app;
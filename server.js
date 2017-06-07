import express from 'express';
import {apolloServer} from 'apollo-server';
import Schema from './data/schema';
import Resolvers from './data/resolvers';
// import Mocks from './data/mocks';

const GRAPHQL_PORT = 8080;

const graphQLServer = express();
graphQLServer.use('/graphql', apolloServer({
    graphiql: true,
    pretty: true,
    schema: Schema,
    resolvers: Resolvers
    // mocks: Mocks,
}));
graphQLServer.listen(GRAPHQL_PORT, () => console.log(
    `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}/graphql`
));

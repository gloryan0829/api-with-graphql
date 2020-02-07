process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

import {GraphQLServer} from 'graphql-yoga';
import resolvers from "./graphql/resolver";
import path from 'path';

const schema = path.join(__dirname, 'graphql/schema.graphql');
const app = new GraphQLServer({
    typeDefs : schema,
    resolvers
});


app.start(() => console.log(`graphql server started..`));

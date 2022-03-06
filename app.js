const {ApolloServer, gql} = require('apollo-server');
const sessionData = require('./data/sessions.json');
const SessionApi = require('./dataSource/session')
const schema =  require('./schema');
const resolversModule = require('./resolvers')

const typeDefs = schema

const resolvers = resolversModule;

const dataSources = () => ({
  sessionApi: new SessionApi(),
});


const server = new ApolloServer({typeDefs, resolvers, dataSources});
server.listen({port: process.env.PORT || 4000}).then(({url}) => console.log(`server is running on ${url}`))
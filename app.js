const {ApolloServer, gql, ApolloError} = require('apollo-server');
const sessionData = require('./data/sessions.json');
const SessionApi = require('./dataSource/session')
const SpeakerApi = require('./datasource/speaker');

const schema =  require('./schema');
const resolversModule = require('./resolvers')

const typeDefs = schema
const resolvers = resolversModule;

const dataSources = () => ({
  sessionApi: new SessionApi(),
  speakerApi: new SpeakerApi()
});


const server = new ApolloServer({
  typeDefs, 
  resolvers, 
  dataSources, 
  debug: false,
  formatError: (error) => {
    if(error.extensions.code === "INTERNAL_SERVER_ERROR"){
      return new ApolloError("We are having some trouble", "ERROR", {token: "uniquetoken"})
    }
  }
});
server.listen({port: process.env.PORT || 4000}).then(({url}) => console.log(`server is running on ${url}`))
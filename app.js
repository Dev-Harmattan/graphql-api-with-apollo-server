const {ApolloServer, gql} = require('apollo-server');
const sessionData = require('./data/sessions.json');
const SessionApi = require('./dataSource/session')

const typeDefs = gql`
  type Query {
    sessions: [Session]
  }
  type Session {
    id: ID!
    title: String
    description: String
    startsAt: String
    endsAT: String
    room: String
    day: String
    format: String
    track: String
    level: String
  }
`;

const resolvers = {
  Query: {
    sessions: (parent, args, {dataSources}, info) => {
      return dataSources.sessionApi.getSessions()
    }
  }
}

const dataSources = () => ({
  sessionApi: new SessionApi(),
});


const server = new ApolloServer({typeDefs, resolvers, dataSources});
server.listen({port: process.env.PORT || 4000}).then(({url}) => console.log(`server is running on ${url}`))
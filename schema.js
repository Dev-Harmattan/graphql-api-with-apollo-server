const {gql} = require('apollo-server');

module.exports = gql`
  type Query {
    sessions: [Session]
    sessionById(id: ID): Session
    speakers: [Speaker]
    speakerById(id:ID): Speaker
  },
  type Mutation {
    togleFavouriteSession(id: ID): Session
    addNewSession(session: SessionInput): Session
  }
  input SessionInput {
    title: String
    description: String
    startsAt: String
    endsAT: String
    room: String
    day: String
    format: String
    track: String
    level: String
    favourite: Boolean
  }
  type Speaker {
    id: ID!
    bio: String
    name: String
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
    favourite: Boolean
    speakers: [Speaker]
  }
`;

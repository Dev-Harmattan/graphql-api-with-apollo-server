const _ = require('lodash')
module.exports = {
  Query: {
    sessions: (parent, args, { dataSources }, info) => {
      return dataSources.sessionApi.getSessions();
    },
    sessionById: (parent, { id }, { dataSources }, info) => {
      return dataSources.sessionApi.getSessionById(id);
    },
    speakers: (parent, args, {dataSources}, info) => {
      return dataSources.speakerApi.getSpeakers();
    },
    speakerById: (parent, args, {dataSources}, info) => {
      return dataSources.speakerApi.getSpeakerById(id);
    },
  },
  Session : {
    async speakers(session, args, {dataSources}, info) {
      const speakers = await dataSources.speakerApi.getSpeakers();
      const returns = speakers.filter(speaker => {
        return _.filter(session.speakers, {id: speaker.id}).length > 0
      })
      return returns;
    },
  }
};
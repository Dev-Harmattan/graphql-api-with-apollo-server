const _ = require('lodash')
const {ApolloError} = require('apollo-server')
module.exports = {
    async speakers(session, args, {dataSources}, info) {
      try {
        const speakers = await dataSources.speakerApi.getSpeakers();
        const returns = speakers.filter(speaker => {
          return _.filter(session.speakers, {id: speaker.id}).length > 0
        })
        return returns;
      } catch (error) {
        throw new ApolloError('Unable to get speakers', 'SPEAKERAPIERROR', {token: 'UNIQUETOKEN'})
      }
      
    },
}
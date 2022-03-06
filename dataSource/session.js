const sessionData = require('../data/sessions.json');
const { DataSource } = require('apollo-datasource');
const _ = require('lodash')

class SessionApi extends DataSource {
  constructor() {
    super();
  }

  initialize(config) {}

  getSessions() {
    return sessionData;
  }

  getSessionById(id){
    const session =  _.find(sessionData, {id: parseInt(id)});
    return session;
  }

  togleFavouriteSession(id){
    const session =  _.find(sessionData, {id: parseInt(id)});
    session.favourite = !session.favourite;
    return session;
  }
}
module.exports = SessionApi;

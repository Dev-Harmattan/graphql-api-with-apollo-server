const sessionData = require('../data/sessions.json');
const { DataSource } = require('apollo-datasource');

class SessionApi extends DataSource {
  constructor() {
    super();
  }

  initialize(config) {}

  getSessions() {
    return sessionData;
  }
}
module.exports = SessionApi;

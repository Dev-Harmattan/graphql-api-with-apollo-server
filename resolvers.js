const _ = require('lodash')
const query = require('./resolvers/query');
const session = require('./resolvers/session')
module.exports = {
  Query: query,
  Session : session
};
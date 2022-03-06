const _ = require('lodash')
const query = require('./resolvers/query');
const session = require('./resolvers/session');
const mutation = require('./resolvers/mutation')
module.exports = {
  Query: query,
  Session : session,
  Mutation: mutation
};
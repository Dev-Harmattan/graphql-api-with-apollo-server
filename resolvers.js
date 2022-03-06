module.exports = {
  Query: {
    sessions: (parent, args, { dataSources }, info) => {
      return dataSources.sessionApi.getSessions();
    },
    sessionById: (parent, { id }, { dataSources }, info) => {
      return dataSources.sessionApi.getSessionById(id);
    },
  },
};
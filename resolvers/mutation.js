module.exports = {
  togleFavouriteSession: (parent, {id}, {dataSources}, info) => {
    return dataSources.sessionApi.togleFavouriteSession(id)
  },
  addNewSession: (parent, {session}, {dataSources}, info) => {
    return dataSources.sessionApi.addNewSession(session);
  }
}
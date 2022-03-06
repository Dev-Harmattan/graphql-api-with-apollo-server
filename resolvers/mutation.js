module.exports = {
  togleFavouriteSession: (parent, {id}, {dataSources}, info) => {
    return dataSources.sessionApi.togleFavouriteSession(id)
  }
}
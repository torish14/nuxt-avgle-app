import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  if (process.client) {
    window.onNuxtReady(() => {
      createPersistedState({
        // key: 'my-key'
        paths: [
          'search.message',
          'search.messages',
          'soaringMessages',
          'FamousMessages',
          'ActressMessages',
          'GenreMessages',
          'searchVid'
        ]
      })(store)
    })
  }
}

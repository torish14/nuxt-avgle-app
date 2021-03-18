import createPersistedState from 'vuex-persistedstate'

export default ({ store, isHMR }) => {
  if (isHMR) {
    return
  }

  if (process.client) {
    window.onNuxtReady(() => {
      createPersistedState({
        // key: 'my-key'
        paths: [
          'search.message',
          'search.translateMessages',
          'search.messages',
          'search.suggestMessages',
          'search.searchMessages'
        ]
      })(store)
    })
  }
}

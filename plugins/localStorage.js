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
          // 'search.message',
          // 'search.messages',
          // 'search.translateMessages',
          // 'search.suggestMessages',
          // 'search.searchMessages',
          'search.recommendMessages',
          'search.recommendTitles',
          'search.recommendKeywords',
        ],
      })(store)
    })
  }
}

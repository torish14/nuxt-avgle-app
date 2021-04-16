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
          'search.messages',
          'search.suggestMessages',
          'search.searchMessagesFirst',
          'search.searchMessagesSecond',
          'search.searchMessagesThird',
          'search.recommendMessages',
          'search.recommendTitles',
          'search.recommendKeywords',
          'search.concatRecommend',
          'search.dupConcatRecommend',
        ],
      })(store)
    })
  }
}

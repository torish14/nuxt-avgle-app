const searchUrl = 'https://api.avgle.com/v1/search/'

export const state = () => ({
  message: '',
  messages: []
})

export const getters = {
  message: state => state.message,
  messages: state => state.messages
}

export const mutations = {
  mutateMessage (state, payload) {
    state.message = payload
  },
  // ? 検索結果
  setSearchItems (state, messages) {
    state.messages = messages
  }
}

export const actions = {
  commitMessage ({ commit }, payload) {
    return commit('mutateMessage', payload)
  },
  async getSearchItems ({ commit }) {
    const obj = JSON.parse(localStorage.getItem('vuex'))
    if (!obj.search.message) { obj.search.message = '日本人' }
    const getSearchItemsResponse = await this.$axios
      .$get(encodeURI(searchUrl + obj.search.message + '/0' + '?limit=150'))
      .catch((err) => {
        // eslint-disable-next-line
        console.log(err);
        this.$router.push('/error')
      })
    commit('setSearchItems', getSearchItemsResponse.response.videos)

    // eslint-disable-next-line
    console.log(getSearchItemsResponse)
  }
}

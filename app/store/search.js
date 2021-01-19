const searchUrl = 'https://api.avgle.com/v1/search/'

export const state = () => ({
  message: '日本人',
  messages: [],
  // isLoading: false
})

export const getters = {
  message: state => state.message,
  messages: state => state.messages
}

export const mutations = {
  mutateMessage(state, payload) {
    state.message = payload
  },
  // ? 検索結果
  setSearchItems(state, messages) {
    state.messages = messages
  },
  clearMessage(state) {
    state.message = '日本人'
  },
  // hideLoading(state) {
  //   state.isLoading = false
  // },
  // showLoading(state) {
  //   state.isLoading = true
  // },
}

export const actions = {
  commitMessage ({ commit }, payload) {
    return commit('mutateMessage', payload)
  },
  async getSearchItems ({ commit, state }) {
    // const obj = JSON.parse(localStorage.getItem('vuex'))
    // if (!obj.search.message) { obj.search.message = '日本人' }

    // commit('showLoading')
    const config = {
      headers: { 'content-type': 'application/json' }
    }
    const getSearchItemsResponse = await this.$axios
      .$get(encodeURI(searchUrl + state.message + '/0' + '?limit=150' + '?type=public'), config)
      .catch((err) => {
        if (err.response.status !== 403) {
          // console.log(err)
          // commit('hideLoading')
          this.$router.push('/error')
        }
      })
    // console.log(getSearchItemsResponse)
    commit('setSearchItems', getSearchItemsResponse.response.videos)
    // commit('hideLoading')

    // try {
    //   commit('showLoading')
    //   const config = {
    //     headers: { 'content-type': 'application/json' }
    //   }
    //   const getSearchItemsResponse = await this.$axios.$get(
    //     encodeURI(
    //       searchUrl + state.message + '/0' + '?limit=150' + '?type=public'
    //     ),
    //     config
    //   )
    //   console.log(getSearchItemsResponse)
    //   commit('setSearchItems', getSearchItemsResponse.response.videos)
    //   commit('hideLoading')
    // } catch (err) {
    //   console.log(err)
    //   commit('hideLoading')
    //   this.$router.push('/error')
    // }
  }
}

import { getterTree, mutationTree, actionTree } from 'typed-vuex'

const searchUrl = 'https://api.avgle.com/v1/search/'

export const state = () => ({
  message: '' as string ,
  messages: [] as any,
  suggestMessages: [] as any,
  searchMessages: [] as any,
  keywords: [] as any,
  isLoading: false as Boolean
})

export type RootState = ReturnType<typeof state>

export const getters = getterTree(state, {
  message: state => state.message,
  messages: state => state.messages,
  suggestMessages: state => state.suggestMessages,
  searchMessages: state => state.searchMessages,
  keywords: state => state.keywords,
  isLoading: state => state.isLoading
})

export const mutations = mutationTree(state, {
  mutateMessage (state, payload: string): void {
    state.message = payload
  },
  setJapaneseItems (state, messages: any): void {
    state.messages = messages
  },
  setSuggestItems (state, suggestMessages: any): void {
    state.suggestMessages = suggestMessages
  },
  setSearchItems (state, searchMessages: any): void {
    state.searchMessages = searchMessages
  },
  setJapaneseMessage (state) {
    state.message = '日本人'
  },
  setSuggestMessage (state) {
    state.message = [
      '小倉由菜',
      '希崎ジェシカ',
      '君島みお',
      '霧島レオナ',
      '白石茉莉奈',
      '篠田ゆう',
      '高井ルナ',
      '冬月かえで',
      '松岡ちな',
      '美乃すずめ',
      '吉高寧々',
      'RIO',
    ][
      Math.floor(
        Math.random() *
          [
            '小倉由菜',
            '希崎ジェシカ',
            '君島みお',
            '霧島レオナ',
            '白石茉莉奈',
            '篠田ゆう',
            '高井ルナ',
            '冬月かえで',
            '松岡ちな',
            '美乃すずめ',
            '吉高寧々',
            'RIO',
          ].length
      )
    ]
  },
  changeKeyword (state, keywords) {
    state.message = keywords
  },
  clearMessage (state) {
    state.message = ''
  },
  hideLoading(state) {
    state.isLoading = false
  },
  showLoading(state) {
    state.isLoading = true
  }
})

export const actions = actionTree({ state, getters, mutations }, {
  commitMessage ({ commit }, payload) {
    return commit('mutateMessage', payload)
  },
  async getJapaneseItems ({ state, commit }) {
    // commit('showLoading')
    const config = {
      headers: { 'content-type': 'application/json' },
    }
    // @ts-ignore
    const getSearchItemsResponse = await this.$axios
      .$get(
        encodeURI(
          searchUrl + state.message + '/0' + '?limit=250' + '?type=public'
        ),
        config
      )
      // @ts-ignore
      .catch((err) => {
        if (err.response.status !== 403) {
          commit('hideLoading')
          this.$router.push('/error')
        }
      })
    commit(
      'setJapaneseItems',
      // @ts-ignore
      getSearchItemsResponse.response.videos.filter((value) =>
        !(value.title).match('無修正') &&
        !(value.title).match('無') &&
        !(value.title).match('完全素人') &&
        !(value.title).match('個人撮影') &&
        !(value.title).match('FC2') &&
        !(value.title).match('Fc2') &&
        !(value.title).match('fc2') &&
        !(value.title).match('DEEPFAKE') &&
        !(value.title).match('DeepFake') &&
        !(value.title).match('Deepfake') &&
        !(value.title).match('deepfake') &&
        !(value.title).match(/^[a-zA-Z]+$/) &&
        !(value.keyword).match('無修正') &&
        !(value.keyword).match('FC2')
      )
    )
    commit('hideLoading')
  },
  async getSuggestItems ({ state, commit }) {
    // commit('showLoading')
    const config = {
      headers: { 'content-type': 'application/json' },
    }
    // @ts-ignore
    const getSearchItemsResponse = await this.$axios
      .$get(
        encodeURI(
          searchUrl + state.message + '/0' + '?limit=250' + '?type=public'
        ),
        config
      )
      // @ts-ignore
      .catch((err) => {
        if (err.response.status !== 403) {
          commit('hideLoading')
          this.$router.push('/error')
        }
      })
    commit(
      'setSuggestItems',
      // @ts-ignore
      getSearchItemsResponse.response.videos.filter((value) =>
        !(value.title).match('無修正') &&
        !(value.title).match('無') &&
        !(value.title).match('完全素人') &&
        !(value.title).match('個人撮影') &&
        !(value.title).match('FC2') &&
        !(value.title).match('Fc2') &&
        !(value.title).match('fc2') &&
        !(value.title).match('DEEPFAKE') &&
        !(value.title).match('DeepFake') &&
        !(value.title).match('Deepfake') &&
        !(value.title).match('deepfake') &&
        !(value.title).match(/^[a-zA-Z]+$/) &&
        !(value.keyword).match('無修正') &&
        !(value.keyword).match('FC2')
      )
    )
    commit('hideLoading')
  },
  async getSearchItems ({ state, commit }) {
    // commit('showLoading')
    const config = {
      headers: { 'content-type': 'application/json' },
    }
    // @ts-ignore
    const getSearchItemsResponse = await this.$axios
      .$get(
        encodeURI(
          searchUrl + state.message + '/0' + '?limit=250' + '?type=public'
        ),
        config
      )
      // @ts-ignore
      .catch((err) => {
        if (err.response.status !== 403) {
          commit('hideLoading')
          this.$router.push('/error')
        }
      })
    commit(
      'setSearchItems',
      // @ts-ignore
      getSearchItemsResponse.response.videos.filter((value) =>
        !(value.title).match('無修正') &&
        !(value.title).match('無') &&
        !(value.title).match('完全素人') &&
        !(value.title).match('個人撮影') &&
        !(value.title).match('FC2') &&
        !(value.title).match('Fc2') &&
        !(value.title).match('fc2') &&
        !(value.title).match('DEEPFAKE') &&
        !(value.title).match('DeepFake') &&
        !(value.title).match('Deepfake') &&
        !(value.title).match('deepfake') &&
        !(value.title).match(/^[a-zA-Z]+$/) &&
        !(value.keyword).match('無修正') &&
        !(value.keyword).match('FC2')
      )
    )
    commit('hideLoading')
  }
})

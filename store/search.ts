import { getterTree, mutationTree, actionTree } from 'typed-vuex'

const searchUrl = 'https://api.avgle.com/v1/search/'

export const state = () => ({
  message: '' as string ,
  messages: [] as any,
  suggestMessages: [] as any,
  searchMessages: [] as any,
  errorMessage: false as boolean,
  firstSkeleton: false as boolean,
  keywords: [] as any
})

export type RootState = ReturnType<typeof state>

export const getters = getterTree(state, {
  message: state => state.message,
  messages: state => state.messages,
  suggestMessages: state => state.suggestMessages,
  searchMessages: state => state.searchMessages,
  errorMessage: state => state.errorMessage,
  firstSkeleton: state => state.firstSkeleton,
  keywords: state => state.keywords,
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
    state.message = 'AV女優'
    // state.message = [
    //   '小倉由菜',
    //   '希崎ジェシカ',
    //   '君島みお',
    //   '霧島レオナ',
    //   '白石茉莉奈',
    //   '篠田ゆう',
    //   '高井ルナ',
    //   '冬月かえで',
    //   '松岡ちな',
    //   '美乃すずめ',
    //   '吉高寧々',
    //   'RIO',
    // ][
    //   Math.floor(
    //     Math.random() *
    //       [
    //         '小倉由菜',
    //         '希崎ジェシカ',
    //         '君島みお',
    //         '霧島レオナ',
    //         '白石茉莉奈',
    //         '篠田ゆう',
    //         '高井ルナ',
    //         '冬月かえで',
    //         '松岡ちな',
    //         '美乃すずめ',
    //         '吉高寧々',
    //         'RIO',
    //       ].length
    //   )
    // ]
  },
  setSearchMessage (state) {
    state.message = '美少女'
  },
  clearMessage (state) {
    state.message = ''
  },
  hideErrorMessage (state) {
    state.errorMessage = false
  },
  showErrorMessage (state) {
    state.errorMessage = true
  },
  hideSkeleton (state) {
    state.firstSkeleton = false
  },
  showSkeleton (state) {
    state.firstSkeleton = true
  },
  changeKeyword (state, keywords) {
    state.message = keywords
  }
})

export const actions = actionTree({ state, getters, mutations }, {
  commitMessage ({ commit }, payload) {
    return commit('mutateMessage', payload)
  },
  async getJapaneseItems ({ state, commit }) {
    commit('hideErrorMessage')
    commit('showSkeleton')
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
          commit('hideSkeleton')
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
        !(value.title).match(/^[a-zA-Z0-9-_.~+\s]+$/) &&
        !(value.keyword).match('無修正') &&
        !(value.keyword).match('FC2')
      )
    )
    commit('showErrorMessage')
    commit('hideSkeleton')
  },
  async getSuggestItems ({ state, commit }) {
    commit('hideErrorMessage')
    commit('showSkeleton')
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
          commit('hideSkeleton')
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
        !(value.title).match(/^[a-zA-Z0-9-_.~+\s]+$/) &&
        !(value.keyword).match('無修正') &&
        !(value.keyword).match('FC2')
      )
    )
    commit('showErrorMessage')
    commit('hideSkeleton')
  },
  async getSearchItems ({ state, commit }) {
    commit('hideErrorMessage')
    commit('showSkeleton')
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
          commit('hideSkeleton')
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
        !(value.title).match(/^[a-zA-Z0-9-_.~+\s]+$/) &&
        !(value.keyword).match('無修正') &&
        !(value.keyword).match('FC2')
      )
    )
    commit('showErrorMessage')
    commit('hideSkeleton')
  }
})

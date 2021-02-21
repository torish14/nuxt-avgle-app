import { getterTree, mutationTree, actionTree } from 'typed-vuex'

const searchUrl = 'https://api.avgle.com/v1/search/'

export const state = () => ({
  message: '' as string ,
  messages: [] as any,
  keywords: [] as any,
  isLoading: false as Boolean
})

export type RootState = ReturnType<typeof state>

export const getters = getterTree(state, {
  message: state => state.message,
  messages: state => state.messages,
  keywords: state => state.keywords,
  isLoading: state => state.isLoading
})

export const mutations = mutationTree(state, {
  mutateMessage (state, payload: string): void {
    state.message = payload
  },
  // ? 検索結果
  setSearchItems (state, messages: any): void {
    state.messages = messages
  },
  setSearchKeywords (state, keywords: any): void {
    state.keywords = keywords
  },
  // suggestMessage (state) {
  //   state.message = [
  //     '小倉由菜',
  //     '希崎ジェシカ',
  //     '君島みお',
  //     '霧島レオナ',
  //     '白石茉莉奈',
  //     '篠田ゆう',
  //     '高井ルナ',
  //     '冬月かえで',
  //     '松岡ちな',
  //     '美乃すずめ',
  //     '吉高寧々',
  //     'RIO',
  //   ][
  //     Math.floor(
  //       Math.random() *
  //         [
  //           '小倉由菜',
  //           '希崎ジェシカ',
  //           '君島みお',
  //           '霧島レオナ',
  //           '白石茉莉奈',
  //           '篠田ゆう',
  //           '高井ルナ',
  //           '冬月かえで',
  //           '松岡ちな',
  //           '美乃すずめ',
  //           '吉高寧々',
  //           'RIO',
  //         ].length
  //     )
  //   ]
  // },
  changeMessage (state) {
    state.message = '日本人'
  },
  clearMessage (state) {
    state.message = ''
  },
  // changeKeyword (state, keywords) {
  //   state.message = keywords
  // },
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
  async getSearchItems ({ state, commit }) {
    // const obj = JSON.parse(localStorage.getItem('vuex'))
    // if (!obj.search.message) { obj.search.message = '日本人' }

    commit('showLoading')
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
    // ? keyword 精査
    console.log(
      'keywords',
      // @ts-ignore
      getSearchItemsResponse.response.videos.filter((value) =>
        !(value.title).match('無修正') &&
        !(value.title).match('完全素人') &&
        !(value.title).match('個人撮影') &&
        !(value.title).match('FC2') &&
        !(value.title).match('Fc2') &&
        !(value.title).match('fc2') &&
        !(value.title).match('DEEPFAKE') &&
        !(value.title).match('DeepFake') &&
        !(value.title).match('Deepfake') &&
        !(value.title).match('deepfake') &&
        !(value.keyword).match('無修正') &&
        !(value.keyword).match('FC2')
        // @ts-ignore
      ).map((value) =>
        value.keyword
          .split(/,|\s/)
          .filter(
            RegExp.prototype.test,
            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
          )
          .filter(
            // @ts-ignore
            (value) =>
              value !== state.messages.title &&
              value !== '日本人' &&
              value !== 'アジア' &&
              value !== 'アジア人' &&
              value !== '日本' &&
              value !== '無修正' &&
              value !== '肛門' &&
              value !== 'アナルセックス' &&
              value !== '兼' &&
              value !== '油' &&
              value !== '中出' &&
              value !== '人' &&
              value !== 'アジアユニフォーム' &&
              value !== 'ユニフォーム' &&
              value !== '女' &&
              value !== '熟' &&
              value !== '膣' &&
              value !== 'フェチ' &&
              value !== 'ハードコア' &&
              value !== 'ハイビジョン' &&
              value !== '足'
          )
          .slice(0, 3)
      )
    )
    commit(
      'setSearchItems',
      // @ts-ignore
      getSearchItemsResponse.response.videos.filter((value) =>
        !(value.title).match('無修正') &&
        !(value.title).match('完全素人') &&
        !(value.title).match('個人撮影') &&
        !(value.title).match('FC2') &&
        !(value.title).match('Fc2') &&
        !(value.title).match('fc2') &&
        !(value.title).match('DEEPFAKE') &&
        !(value.title).match('DeepFake') &&
        !(value.title).match('Deepfake') &&
        !(value.title).match('deepfake') &&
        !(value.keyword).match('無修正') &&
        !(value.keyword).match('FC2')
      )
    )

    commit(
      'setSearchKeywords',
      // @ts-ignore
      getSearchItemsResponse.response.videos.filter((value) =>
        !(value.title).match('無修正') &&
        !(value.title).match('完全素人') &&
        !(value.title).match('個人撮影') &&
        !(value.title).match('FC2') &&
        !(value.title).match('Fc2') &&
        !(value.title).match('fc2') &&
        !(value.title).match('DEEPFAKE') &&
        !(value.title).match('DeepFake') &&
        !(value.title).match('Deepfake') &&
        !(value.title).match('deepfake') &&
        !(value.keyword).match('無修正') &&
        !(value.keyword).match('FC2')
        // @ts-ignore
      ).map((value) =>
        value.keyword
          .split(/,|\s/)
          .filter(
            RegExp.prototype.test,
            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
          )
          .filter(
            // @ts-ignore
            (value) =>
              value !== state.messages.title &&
              value !== '日本人' &&
              value !== 'アジア' &&
              value !== 'アジア人' &&
              value !== '日本' &&
              value !== '無修正' &&
              value !== '肛門' &&
              value !== 'アナルセックス' &&
              value !== '兼' &&
              value !== '油' &&
              value !== '中出' &&
              value !== '人' &&
              value !== 'アジアユニフォーム' &&
              value !== 'ユニフォーム' &&
              value !== '女' &&
              value !== '熟' &&
              value !== '膣' &&
              value !== 'フェチ' &&
              value !== 'ハードコア' &&
              value !== 'ハイビジョン' &&
              value !== '足'
          )
          .slice(0, 3)
      )
    )
    commit('hideLoading')
  }
})

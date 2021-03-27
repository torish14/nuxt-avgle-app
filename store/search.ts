import { getterTree, mutationTree, actionTree } from 'typed-vuex'

const searchUrl = 'https://api.avgle.com/v1/search/'
const translateUrl =
  'https://script.google.com/macros/s/AKfycbzZtvOvf14TaMdRIYzocRcf3mktzGgXvlFvyczo/exec'
// @ts-ignore
// const obj = JSON.parse(localStorage.getItem('vuex'))

export const state = () => ({
  message: '' as string,
  messages: [] as object,
  translateMessages: [] as object,
  // クリックしたキーワード・検索キーワードの保存先
  recommendMessages: [] as object,
  suggestMessages: [] as object,
  searchMessages: [] as object,
  errorMessage: false as boolean,
  firstSkeleton: false as boolean,
  recommendTitles: [] as object,
  recommendKeywords: [] as object,
  concatRecommend: [] as object,
  dupConcatRecommend: [] as object,
})

export type RootState = ReturnType<typeof state>

export const getters = getterTree(state, {
  message: (state) => state.message,
  messages: (state) => state.messages,
  translateMessages: (state) => state.translateMessages,
  recommendMessages: (state) => state.recommendMessages,
  suggestMessages: (state) => state.suggestMessages,
  searchMessages: (state) => state.searchMessages,
  errorMessage: (state) => state.errorMessage,
  firstSkeleton: (state) => state.firstSkeleton,
  recommendTitles: (state) => state.recommendTitles,
  recommendKeywords: (state) => state.recommendKeywords,
  concatRecommend: (state) => state.concatRecommend,
  dupConcatRecommend: (state) => state.dupConcatRecommend,
})

export const mutations = mutationTree(state, {
  mutateMessage(state, payload: string): void {
    state.message = payload
  },
  setJapaneseItems(state, messages: object): void {
    state.messages = messages
  },
  setTranslateItems(state, translateMessages: object) {
    state.translateMessages = translateMessages
  },
  setSuggestItems(state, suggestMessages: object): void {
    state.suggestMessages = suggestMessages
  },
  setSearchItems(state, searchMessages: object): void {
    state.searchMessages = searchMessages
  },
  setJapaneseMessage(state) {
    state.message = '日本人'
  },
  setSuggestMessage(state) {
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
  setSearchMessage(state) {
    state.message = '美少女'
  },
  setConcatMessage(state) {
    // @ts-ignore
    state.message =
      // @ts-ignore
      state.concatRecommend[
        // @ts-ignore
        Math.floor(Math.random() * state.concatRecommend.length)
      ]
  },
  setDupConcatMessage(state) {
    // @ts-ignore
    state.message =
      // @ts-ignore
      state.dupConcatRecommend[0]
    // // @ts-ignore
    // Math.floor(Math.random() * state.dupConcatRecommend.length)
  },
  clearMessage(state) {
    state.message = ''
  },
  hideErrorMessage(state) {
    state.errorMessage = false
  },
  showErrorMessage(state) {
    state.errorMessage = true
  },
  hideSkeleton(state) {
    state.firstSkeleton = false
  },
  showSkeleton(state) {
    state.firstSkeleton = true
  },
  addRecommendMessages(state, message) {
    if (
      // @ts-ignore
      state.messages.length > 0 &&
      // @ts-ignore
      state.searchMessages.length > 0
    ) {
      // @ts-ignore
      state.recommendMessages.unshift(message)
      // @ts-ignore
      state.recommendMessages.filter((x) => x)
    }
    // @ts-ignore
    // state.recommendMessages.concat(state.recommendKeywords)
    // ? 10個まで保存
    // // @ts-ignore
    // if (state.recommendMessages.length > 10) {
    //   // @ts-ignore
    //   state.recommendMessages.pop()
    // }
  },
  addRecommendTitles(state, titles) {
    if (
      // @ts-ignore
      state.messages.length > 0 &&
      // @ts-ignore
      state.suggestMessages.length > 0 &&
      // @ts-ignore
      state.searchMessages.length > 0
    ) {
      // @ts-ignore
      state.recommendTitles.unshift(titles)
      // @ts-ignore
      state.recommendTitles.filter((x) => x)
    }
    // ? 10個まで保存
    // // @ts-ignore
    // if (state.recommendTitles.length > 10) {
    //   // @ts-ignore
    //   state.recommendTitles.pop()
    // }
  },
  addRecommendKeywords(state, keywords) {
    if (
      // @ts-ignore
      state.messages.length > 0 &&
      // @ts-ignore
      state.suggestMessages.length > 0
    ) {
      // @ts-ignore
      state.recommendKeywords.unshift(keywords)
      // @ts-ignore
      state.recommendKeywords.filter((x) => x)
    }
    // @ts-ignore
    // state.recommendKeywords.concat(state.recommendMessages)
    // ? 10個まで保存
    // // @ts-ignore
    // if (state.recommendKeywords.length > 10) {
    //   // @ts-ignore
    //   state.recommendKeywords.pop()
    // }
  },
  // @ts-ignore
  concatRecommendArray(state: any, newArray: object) {
    // @ts-ignore
    state.concatRecommend = state.recommendMessages.concat(newArray)
    // @ts-ignore
    state.dupConcatRecommend = state.concatRecommend.filter(
      (x: any, i: any, self: any) =>
        self.indexOf(x) === i && i !== self.lastIndexOf(x)
    )
  },
  changeKeyword(state, keywords) {
    state.message = keywords
  },
})

export const actions = actionTree(
  { state, getters, mutations },
  {
    commitMessage({ commit }, payload) {
      return commit('mutateMessage', payload)
    },
    async getJapaneseItems({ state, commit }) {
      commit('hideErrorMessage')
      commit('showSkeleton')
      const config = {
        headers: { 'content-type': 'application/json' },
      }
      // @ts-ignore
      const getSearchItemsResponse = await this.$axios
        .$get(
          encodeURI(
            searchUrl +
              state.message +
              '/0' +
              '?limit=250' +
              '?type=public'
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
        getSearchItemsResponse.response.videos.filter(
          // @ts-ignore
          (value) =>
            !value.title.match('無修正') &&
            !value.title.match('無') &&
            !value.title.match('完全素人') &&
            !value.title.match('個人撮影') &&
            !value.title.match('FC2') &&
            !value.title.match('Fc2') &&
            !value.title.match('fc2') &&
            !value.title.match('DEEPFAKE') &&
            !value.title.match('DeepFake') &&
            !value.title.match('Deepfake') &&
            !value.title.match('deepfake') &&
            !value.title.match('カリビアンコム') &&
            !value.title.match('一本道') &&
            !value.title.match('HEYZO') &&
            !value.title.match('Heyzo') &&
            !value.title.match('heyzo') &&
            !value.title.match('東京熱') &&
            !value.title.match('TOKYO-HOT') &&
            !value.title.match('Tokyo-Hot') &&
            !value.title.match('Tokyo-hot') &&
            !value.title.match('tokyo-hot') &&
            !value.title.match('AV9898') &&
            !value.title.match('Av9898') &&
            !value.title.match('av9898') &&
            !value.title.match('PORNHUB') &&
            !value.title.match('PornHub') &&
            !value.title.match('Pornhub') &&
            !value.title.match('pornhub') &&
            !value.title.match('エッチな4610') &&
            !value.title.match('エッチな0930') &&
            !value.title.match('人妻斬り') &&
            !value.title.match('SM-MIRACLE') &&
            !value.title.match('SM-Miracle') &&
            !value.title.match('SM-miracle') &&
            !value.title.match('sm-miracle') &&
            !value.title.match('のぞきザムライ') &&
            !value.title.match('金8天国') &&
            !value.title.match('carib') &&
            !value.title.match(/^[a-zA-Z0-9-_.~+\s]+$/) &&
            !value.keyword.match('無修正') &&
            !value.keyword.match('FC2')
        )
      )
      commit('hideSkeleton')
      commit('showErrorMessage')
    },
    async getSuggestItems({ state, commit }) {
      commit('hideErrorMessage')
      commit('showSkeleton')
      const config = {
        headers: { 'content-type': 'application/json' },
      }
      // @ts-ignore
      const getSearchItemsResponse = await this.$axios
        .$get(
          encodeURI(
            searchUrl +
              state.message +
              '/0' +
              '?limit=250' +
              '?type=public'
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
        getSearchItemsResponse.response.videos.filter(
          // @ts-ignore
          (value) =>
            !value.title.match('無修正') &&
            !value.title.match('無') &&
            !value.title.match('完全素人') &&
            !value.title.match('個人撮影') &&
            !value.title.match('FC2') &&
            !value.title.match('Fc2') &&
            !value.title.match('fc2') &&
            !value.title.match('DEEPFAKE') &&
            !value.title.match('DeepFake') &&
            !value.title.match('Deepfake') &&
            !value.title.match('deepfake') &&
            !value.title.match('カリビアンコム') &&
            !value.title.match('一本道') &&
            !value.title.match('HEYZO') &&
            !value.title.match('Heyzo') &&
            !value.title.match('heyzo') &&
            !value.title.match('東京熱') &&
            !value.title.match('TOKYO-HOT') &&
            !value.title.match('Tokyo-Hot') &&
            !value.title.match('Tokyo-hot') &&
            !value.title.match('tokyo-hot') &&
            !value.title.match('AV9898') &&
            !value.title.match('Av9898') &&
            !value.title.match('av9898') &&
            !value.title.match('PORNHUB') &&
            !value.title.match('PornHub') &&
            !value.title.match('Pornhub') &&
            !value.title.match('pornhub') &&
            !value.title.match('エッチな4610') &&
            !value.title.match('エッチな0930') &&
            !value.title.match('人妻斬り') &&
            !value.title.match('SM-MIRACLE') &&
            !value.title.match('SM-Miracle') &&
            !value.title.match('SM-miracle') &&
            !value.title.match('sm-miracle') &&
            !value.title.match('のぞきザムライ') &&
            !value.title.match('金8天国') &&
            !value.title.match('carib') &&
            !value.title.match(/^[a-zA-Z0-9-_.~+\s]+$/) &&
            !value.keyword.match('無修正') &&
            !value.keyword.match('FC2')
        )
      )
      commit('hideSkeleton')
      commit('showErrorMessage')
    },
    async getSearchItems({ state, commit }) {
      commit('hideErrorMessage')
      commit('showSkeleton')
      const config = {
        headers: { 'content-type': 'application/json' },
      }
      // @ts-ignore
      const getSearchItemsResponse = await this.$axios
        .$get(
          encodeURI(
            searchUrl +
              state.message +
              '/0' +
              '?limit=250' +
              '?type=public'
          ),
          config
        )
        // @ts-ignore
        .catch((err) => {
          if (err.response.status !== 403) {
            if (err.response.status !== 404) {
              commit('hideSkeleton')
              this.$router.push('/error')
            }
          }
        })
      commit(
        'setSearchItems',
        // @ts-ignore
        getSearchItemsResponse.response.videos.filter(
          // @ts-ignore
          (value) =>
            !value.title.match('無修正') &&
            !value.title.match('無') &&
            !value.title.match('完全素人') &&
            !value.title.match('個人撮影') &&
            !value.title.match('FC2') &&
            !value.title.match('Fc2') &&
            !value.title.match('fc2') &&
            !value.title.match('DEEPFAKE') &&
            !value.title.match('DeepFake') &&
            !value.title.match('Deepfake') &&
            !value.title.match('deepfake') &&
            !value.title.match('カリビアンコム') &&
            !value.title.match('一本道') &&
            !value.title.match('HEYZO') &&
            !value.title.match('Heyzo') &&
            !value.title.match('heyzo') &&
            !value.title.match('東京熱') &&
            !value.title.match('TOKYO-HOT') &&
            !value.title.match('Tokyo-Hot') &&
            !value.title.match('Tokyo-hot') &&
            !value.title.match('tokyo-hot') &&
            !value.title.match('AV9898') &&
            !value.title.match('Av9898') &&
            !value.title.match('av9898') &&
            !value.title.match('PORNHUB') &&
            !value.title.match('PornHub') &&
            !value.title.match('Pornhub') &&
            !value.title.match('pornhub') &&
            !value.title.match('エッチな4610') &&
            !value.title.match('エッチな0930') &&
            !value.title.match('人妻斬り') &&
            !value.title.match('SM-MIRACLE') &&
            !value.title.match('SM-Miracle') &&
            !value.title.match('SM-miracle') &&
            !value.title.match('sm-miracle') &&
            !value.title.match('のぞきザムライ') &&
            !value.title.match('金8天国') &&
            !value.title.match('carib') &&
            !value.title.match(/^[a-zA-Z0-9-_.~+\s]+$/) &&
            !value.keyword.match('無修正') &&
            !value.keyword.match('FC2')
        )
      )
      commit('hideSkeleton')
      commit('showErrorMessage')
    },
    async getTranslateTitles({ commit }) {
      const config = {
        headers: { 'content-type': 'application/json' },
      }
      // @ts-ignore
      const getSearchItemsResponse = await this.$axios.$get(
        encodeURI(
          translateUrl +
            '?text=' +
            '[中文字幕]長野縣○○市○○旅館第一次的換妻對手大募集！！ 夫婦交換中出的混浴溫' +
            '&source=zh' +
            '&target=ja'
        ),
        config
      )
      commit(
        'setTranslateItems',
        // @ts-ignore
        getSearchItemsResponse.text
      )
    },
  }
)

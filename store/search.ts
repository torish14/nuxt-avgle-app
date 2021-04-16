import { getterTree, mutationTree, actionTree } from 'typed-vuex'

const searchUrl = 'https://api.avgle.com/v1/search/'
const translateUrl =
  'https://script.google.com/macros/s/AKfycbzZtvOvf14TaMdRIYzocRcf3mktzGgXvlFvyczo/exec'
// @ts-ignore
// const obj = JSON.parse(localStorage.getItem('vuex'))

export const state = () => ({
  message: '' as string,
  messages: '' as any,
  translateMessages: [] as string[],
  // クリックしたキーワード・検索キーワードの保存先
  recommendMessages: [] as string[],
  suggestMessages: [] as string[],
  searchMessagesFirst: [] as string[],
  searchMessagesSecond: [] as string[],
  searchMessagesThird: [] as string[],
  errorMessage: false as boolean,
  firstSkeleton: false as boolean,
  recommendTitles: [] as string[],
  recommendKeywords: [] as string[],
  concatRecommend: [] as string[],
  dupConcatRecommend: [] as string[],
})

export type RootState = ReturnType<typeof state>

export const getters = getterTree(state, {
  message: (state) => state.message,
  messages: (state) => state.messages,
  translateMessages: (state) => state.translateMessages,
  recommendMessages: (state) => state.recommendMessages,
  suggestMessages: (state) => state.suggestMessages,
  searchMessagesFirst: (state) => state.searchMessagesFirst,
  searchMessagesSecond: (state) => state.searchMessagesSecond,
  searchMessagesThird: (state) => state.searchMessagesThird,
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
  setJapaneseItems(state, messages: string[]): void {
    state.messages = messages
  },
  setTranslateItems(state, translateMessages: string[]) {
    state.translateMessages = translateMessages
  },
  setSuggestItems(state, suggestMessages: string[]): void {
    state.suggestMessages = suggestMessages
  },
  setSearchFirstItems(state, searchMessagesFirst: string[]): void {
    state.searchMessagesFirst = searchMessagesFirst
  },
  setSearchSecondItems(state, searchMessagesSecond: string[]): void {
    state.searchMessagesSecond = searchMessagesSecond
  },
  setSearchThirdItems(state, searchMessagesThird: string[]): void {
    state.searchMessagesThird = searchMessagesThird
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
    state.message =
      state.concatRecommend[
        Math.floor(Math.random() * state.concatRecommend.length)
      ]
  },
  setDupConcatMessage(state) {
    state.message = state.dupConcatRecommend[0]
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
    state.recommendMessages.unshift(message)
    // @ts-ignore
    state.recommendMessages.filter((x) => x)
    if (
      state.messages.length === 0 ||
      state.searchMessagesFirst.length === 0
    ) {
      state.recommendMessages.splice(1, 1)
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
    state.recommendTitles.unshift(titles)
    state.recommendTitles.filter((x) => x)
    if (
      state.messages.length === 0 ||
      state.suggestMessages.length === 0 ||
      state.searchMessagesFirst.length === 0
    ) {
      state.recommendMessages.splice(1, 1)
    }
    // ? 10個まで保存
    // // @ts-ignore
    // if (state.recommendTitles.length > 10) {
    //   // @ts-ignore
    //   state.recommendTitles.pop()
    // }
  },
  addRecommendKeywords(state, keywords) {
    state.recommendKeywords.unshift(keywords)
    state.recommendKeywords.filter((x) => x)
    if (
      state.messages.length === 0 ||
      state.suggestMessages.length === 0
    ) {
      state.recommendMessages.splice(1, 1)
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
  concatRecommendArray(state: any, newArray: string[]) {
    state.concatRecommend = state.recommendMessages.concat(newArray)
    state.concatRecommend.filter((x: any) => x)
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
      const getJapaneseItemsResponse = await this.$axios
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
        .catch((err) => {
          if (err.response.status !== 403) {
            commit('hideSkeleton')
            this.$router.push('/error')
          }
        })
      commit(
        'setJapaneseItems',
        getJapaneseItemsResponse.response.videos.filter(
          (value: { title: string; keyword: string }) =>
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
      const getSuggestItems = await this.$axios
        .$get(
          encodeURI(
            searchUrl +
              state.message +
              '/0' +
              '?limit=250' +
              '?type=public' +
              '?o=mv'
          ),
          config
        )
        .catch((err) => {
          if (err.response.status !== 403) {
            commit('hideSkeleton')
            this.$router.push('/error')
          }
        })
      commit(
        'setSuggestItems',
        getSuggestItems.response.videos.filter(
          (value: { title: string; keyword: string }) =>
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
      const [
        getSearchFirstItemsResponse,
        getSearchSecondItemsResponse,
        getSearchThirdItemsResponse,
      ] = await Promise.all([
        this.$axios
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
          .catch((err) => {
            if (err.response.status !== 403) {
              if (err.response.status !== 404) {
                commit('hideSkeleton')
                this.$router.push('/error')
              }
            }
          }),
        this.$axios
          .$get(
            encodeURI(
              searchUrl +
                state.message +
                '/1' +
                '?limit=250' +
                '?type=public'
            ),
            config
          )
          .catch((err) => {
            if (err.response.status !== 403) {
              if (err.response.status !== 404) {
                commit('hideSkeleton')
                this.$router.push('/error')
              }
            }
          }),
        this.$axios
          .$get(
            encodeURI(
              searchUrl +
                state.message +
                '/2' +
                '?limit=250' +
                '?type=public'
            ),
            config
          )
          .catch((err) => {
            if (err.response.status !== 403) {
              if (err.response.status !== 404) {
                commit('hideSkeleton')
                this.$router.push('/error')
              }
            }
          }),
      ])
      commit(
        'setSearchFirstItems',
        getSearchFirstItemsResponse.response.videos.filter(
          (value: { title: string; keyword: string }) =>
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
      commit(
        'setSearchSecondItems',
        getSearchSecondItemsResponse.response.videos.filter(
          (value: { title: string; keyword: string }) =>
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
      commit(
        'setSearchThirdItems',
        getSearchThirdItemsResponse.response.videos.filter(
          (value: { title: string; keyword: string }) =>
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
      commit('setTranslateItems', getSearchItemsResponse.text)
    },
  }
)

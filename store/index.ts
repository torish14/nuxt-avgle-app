import { getAccessorType, getterTree, mutationTree, actionTree } from 'typed-vuex'

import * as search from '~/store/search'

// const searchUrl = 'https://api.avgle.com/v1/search/'

export const state = () => ({
  currentIndexPage: 1 as number,
  currentIdPage: 1 as number
  //   soaringMessages: [],
  //   famousMessages: [],
  //   actressMessages: [],
  //   genreMessages: []
})

export type RootState = ReturnType<typeof state>

export const getters = getterTree(state, {
  currentIndexPage: state => state.currentIndexPage,
  currentIdPage: state => state.currentIdPage
//   soaringMessages: state => state.soaringMessages,
//   famousMessages: state => state.famousMessages,
//   actressMessages: state => state.actressMessages,
//   genreMessages: state => state.genreMessages
})

export const mutations = mutationTree(state, {
  setCurrentIndexPage (state, currentIndexPage) {
    state.currentIndexPage = currentIndexPage
  },
  setCurrentIdPage (state, currentIdPage) {
    state.currentIdPage = currentIdPage
  },
  changeIndexPagination (state) {
    state.currentIndexPage = 1
  },
  changeIdPagination (state) {
    state.currentIdPage = 1
  }
//   // ? 日本で急上昇
//   setSoaringItems (state, soaringMessages) {
//     state.soaringMessages = soaringMessages
//   },
//   // ? 日本で一番人気
//   setFamousItems (state, famousMessages) {
//     state.famousMessages = famousMessages
//   },
//   // ? おすすめ女優
//   setActressItems (state, actressMessages) {
//     state.actressMessages = actressMessages
//   },
//   // ? おすすめジャンル
//   setGenreItems (state, genreMessages) {
//     state.genreMessages = genreMessages
//   }
})

export const actions = actionTree({ state, getters, mutations }, {
//   // ? メイン動画の表示
//   async getIndexItems ({ commit }) {
//     try {
//       const [
//         getSoaringItemsResponse,
//         getFamousItemsResponse,
//         getActressItemsResponse,
//         getGenreItemsResponse
//       ] = await Promise.all([
//         // ? 日本で急上昇
//         this.$axios.$get(
//           encodeURI(searchUrl + '可愛い' + '/0' + '?limit=5' + '?o=tf')
//         ),
//         // ? 日本で一番人気
//         this.$axios.$get(
//           encodeURI(searchUrl + '女子高生' + '/0' + '?limit=5' + '?o=tr')
//         ),
//         // ? おすすめ女優
//         this.$axios.$get(encodeURI(searchUrl + '君島みお' + '/0' + '?limit=5')),
//         // ? おすすめジャンル
//         this.$axios.$get(encodeURI(searchUrl + '個人撮影' + '/0' + '?limit=5'))
//       ])
//       commit('setSoaringItems', getSoaringItemsResponse.response.videos)
//       commit('setFamousItems', getFamousItemsResponse.response.videos)
//       commit('setActressItems', getActressItemsResponse.response.videos)
//       commit('setGenreItems', getGenreItemsResponse.response.videos)

//       console.log(getSoaringItemsResponse);
//       console.log(getFamousItemsResponse);
//       console.log(getActressItemsResponse);
//       console.log(getGenreItemsResponse);
//     } catch (err) {
//       console.log(err)
//       this.$router.push('/error')
//     }
//   }
})

export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions,
  modules: {
    search
  }
})

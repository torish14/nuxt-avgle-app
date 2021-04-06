import {
  getAccessorType,
  getterTree,
  mutationTree,
  actionTree,
} from 'typed-vuex'

import * as search from '~/store/search'

export const state = () => ({
  currentIndexPage: 1 as number,
  currentIdPage: 1 as number,
  prevRoute: [] as object,
})

export type RootState = ReturnType<typeof state>

export const getters = getterTree(state, {
  currentIndexPage: (state) => state.currentIndexPage,
  currentIdPage: (state) => state.currentIdPage,
  prevRoute: (state) => state.prevRoute,
})

export const mutations = mutationTree(state, {
  mutateCurrentIndexPage(state, payload: number) {
    state.currentIndexPage = payload
  },
  setCurrentIndexPage(state, currentIndexPage) {
    state.currentIndexPage = currentIndexPage
  },
  setCurrentIdPage(state, currentIdPage) {
    state.currentIdPage = currentIdPage
  },
  changeIndexPagination(state) {
    state.currentIndexPage = 1
  },
  changeIdPagination(state) {
    state.currentIdPage = 1
  },
  setPrevRoute(state, from) {
    state.prevRoute = from
  },
})

export const actions = actionTree(
  { state, getters, mutations },
  {
    commitCurrentIndexPage({ commit }, payload) {
      return commit('mutateCurrentIndexPage', payload)
    },
  }
)

export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions,
  modules: {
    search,
  },
})

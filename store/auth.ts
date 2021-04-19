import { getterTree, mutationTree, actionTree } from 'typed-vuex'

export const state = () => ({
  users: [] as string[],
})

export type RootState = ReturnType<typeof state>

export const getters = getterTree(state, {
  getUsers(state) {
    return state.users
  },
})

export const mutations = mutationTree(state, {
  addUsers(state, user) {
    if (state.users.length === 0) {
      state.users.push(user)
    }
  },
  clearUsers(state) {
    state.users = []
  },
})

export const actions = actionTree(
  { state, getters, mutations },
  {
    async signInWithGoogle({ commit }) {
      const provider = new this.$fireModule.auth.GoogleAuthProvider()
      await this.$fire.auth
        .signInWithPopup(provider)
        .then((res) => {
          const user = res.user
          console.log(
            'サインインに成功しました。 : ' + user?.displayName
          )
          const messageRef = this.$fire.firestore
            .collection('users')
            // @ts-ignore
            .doc(user.uid)
          const userData = {
            // @ts-ignore
            id: user.uid,
            // @ts-ignore
            name: user.displayName,
            // @ts-ignore
            photoURL: user.photoURL,
          }
          messageRef.set({
            // @ts-ignore
            id: user.uid,
            // @ts-ignore
            name: user.displayName,
            // @ts-ignore
            photoURL: user.photoURL,
          })
          commit('addUsers', userData)
        })
        .catch((err) => {
          const errorCode = err.code
          const errorMessage = err.message
          console.log(errorCode)
          console.log(errorMessage)
        })
    },
    async signOutWithGoogle({ commit }) {
      await this.$fire.auth
        .signOut()
        .then(() => {
          console.log('サインアウトに成功しました。')
          commit('clearUsers')
        })
        .catch((err) => {
          const errorCode = err.code
          const errorMessage = err.message
          console.log(errorCode)
          console.log(errorMessage)
        })
    },
    async fetchUsers() {
      const messageRef = this.$fire.firestore.collection('users')
      const messageDoc = messageRef.get()
      await messageDoc
        .then((res) => {
          // @ts-ignore
          res.forEach((doc) => {
            console.log('データ取得に成功しました。 : ' + `${doc.id}`)
          })
        })
        .catch((err) => {
          console.log('error : ' + err)
        })
    },
  }
)

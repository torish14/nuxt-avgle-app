<template>
  <section>
    <!-- デスクトップ -->
    <div v-if="$device.isDesktop"></div>
    <!-- モバイル -->
    <div v-else class="pt-1">
      <template v-if="isLogin">
        <div class="flex flex-col min-h-screen">
          <div class="flex text-gray-200">
            <nuxt-link to="/" aria-label="ホームへ戻る">
              <i class="material-icons m-2">close</i>
            </nuxt-link>
            <h1 class="text-lg font-semibold m-2">マイページ</h1>
          </div>
          <div
            v-for="(data, index) in getUsers"
            :key="index"
            class="flex mr-4"
          >
            <img
              :src="data.photoURL"
              alt="プロフィール画像"
              width="36"
              height="36"
              class="rounded-full"
              style="width: 36px; height: 36px"
            />
            <p class="text-gray-400">{{ data.name }}</p>
          </div>
          <div class="flex justify-center mt-4">
            <button
              class="bg-red-500 hover:bg-red-dark text-gray-800 font-semibold py-1.5 px-3 rounded"
              type="button"
              @click="signOutWithGoogle"
            >
              ログアウト
            </button>
          </div>
          <nuxt-link to="/help" aria-label="ヘルプへ進む">
            <div class="flex text-gray-300 mt-16">
              <i class="material-icons m-2">help</i>
              <p class="text-base m-2">ヘルプ</p>
            </div>
          </nuxt-link>
          <footer class="mt-auto mb-4">
            <div class="flex justify-center text-gray-400 text-xs">
              <nuxt-link to="/terms" aria-label="利用規約へ進む"
                >利用規約・</nuxt-link
              >
              <nuxt-link
                to="/privacy"
                aria-label="プライバシーポリシーへ進む"
                >プライバシーポリシー</nuxt-link
              >
            </div>
          </footer>
        </div>
      </template>
      <template v-else>
        <div class="flex flex-col min-h-screen">
          <div class="flex text-gray-200">
            <nuxt-link to="/" aria-label="ホームへ戻る">
              <i class="material-icons m-2">close</i>
            </nuxt-link>
            <h1 class="text-lg font-semibold m-2">マイページ</h1>
          </div>
          <div class="flex justify-center m-4">
            <img
              src="~/assets/Marilyn.jpeg"
              alt="マリリン・モンロー"
              width="250"
              height="223"
              style="width: 250px; height: 223px"
            />
          </div>
          <div class="flex flex-col items-center">
            <h2 class="text-gray-200 text-base">
              Porngle を使い倒す
            </h2>
            <h3
              class="container mx-auto px-16 mt-2 text-gray-400 text-base text-center"
            >
              視聴履歴の確認やいいね、コメントの投稿をするにはログインしてください。
            </h3>
            <!-- <h3 class="text-gray-400 text-base mt-1"></h3> -->
          </div>
          <div class="flex justify-center mt-4">
            <button
              class="bg-blue-500 hover:bg-blue-dark text-gray-800 font-semibold py-1.5 px-3 rounded"
              type="button"
              @click="signInWithGoogle"
            >
              ログイン
            </button>
          </div>
          <nuxt-link to="/help" aria-label="ヘルプへ進む">
            <div class="flex text-gray-300 mt-16">
              <i class="material-icons m-2">help</i>
              <p class="text-base m-2">ヘルプ</p>
            </div>
          </nuxt-link>
          <footer class="mt-auto mb-4">
            <div class="flex justify-center text-gray-400 text-xs">
              <nuxt-link to="/terms" aria-label="利用規約へ進む"
                >利用規約・</nuxt-link
              >
              <nuxt-link
                to="/privacy"
                aria-label="プライバシーポリシーへ進む"
                >プライバシーポリシー</nuxt-link
              >
            </div>
          </footer>
        </div>
      </template>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import Meta from '~/assets/mixins/meta'

export type DataType = {
  meta: object
  isLogin: boolean
}

export default Vue.extend({
  mixins: [Meta],
  // @ts-ignore
  layout: (ctx) => (ctx.$device.isMobile ? 'mobile' : 'default'),
  data(): DataType {
    return {
      meta: {
        title: 'マイページ',
        description: 'マイページです。',
        type: 'website',
        url: 'https://porngle.love/mypage',
        image: 'https://porngle.love/assets/PG.jpeg',
        robots: 'noindex',
      },
      isLogin: false,
    }
  },
  computed: {
    ...mapGetters('auth', ['getUsers']),
  },
  created(): void {
    this.$fire.auth.onAuthStateChanged((user): void => {
      if (user) {
        this.$accessor.auth.fetchUsers()
        this.isLogin = true
      } else {
        this.isLogin = false
      }
    })
  },
  methods: {
    signInWithGoogle(): void {
      // @ts-ignore
      this.$accessor.auth.signInWithGoogle()
    },
    signOutWithGoogle(): void {
      this.$accessor.auth.signOutWithGoogle()
    },
  },
})
</script>

<style></style>

<template>
  <section>
    <!-- デスクトップ -->
    <div v-if="$device.isDesktop" class="bg-black">
      <footer class="text-gray-600">
        <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col normal-footer">
          <a href="https://nuxt-pornhub-api.web.app" aria-label="ホームへ戻る" @click="changeForm">
            <img
              src="~/assets/Porngle ロゴ.jpeg"
              alt="ロゴ"
              class="w-40"
            >
          </a>
          <p class="text-sm text-gray-600 sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4">
            &copy; 2020 - Porngle
          </p>
          <p class="text-xs text-gray-600 sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4">
            porngle.love@gmail.com
          </p>
        </div>
      </footer>
    </div>
    <!-- モバイル -->
    <div v-else class="bg-black">
      <footer class="text-gray-600">
        <div class="flex justify-around py-1 fixed z-10 bottom-0 bg-black w-full leading-4">
          <nuxt-link to="/" aria-label="ホームへ戻る">
            <div class="text-center align-middle">
              <i class="material-icons">home</i>
              <p class="icon-text" style="font-size: 10px;">
                ホーム
              </p>
            </div>
          </nuxt-link>
          <nuxt-link to="/suggest" aria-label="オススメへ進む">
            <div class="text-center align-middle">
              <i class="material-icons">live_tv</i>
              <p class="icon-text" style="font-size: 10px;">
                オススメ
              </p>
            </div>
          </nuxt-link>
          <nuxt-link to="/search" aria-label="検索へ進む" @click.native="clearForm(); focusSearch()">
            <div class="text-center align-middle">
              <i class="material-icons">search</i>
              <p class="icon-text" style="font-size: 10px;">
                検索
              </p>
            </div>
          </nuxt-link>
        </div>
      </footer>
    </div>
  </section>
</template>

<script lang="ts">
// Todo ロゴのサイズ縮小
import Vue from 'vue'

export type DataType = {
  activetab: number
}

export default Vue.extend({
  data(): DataType {
    return {
      activetab: 1
    }
  },
  methods: {
    changeForm () {
      this.$accessor.search.setJapaneseMessage()
    },
    clearForm () {
      this.$accessor.search.clearMessage()
    },
    focusSearch () {
      // @ts-ignore
      // this.$refs.textInput.focus()
    }
  },
})
</script>

<style>
.nuxt-link-exact-active {
  color: white;
}
</style>

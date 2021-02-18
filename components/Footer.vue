<template>
  <!-- フッター -->
  <footer class="text-gray-600 bg-black body-font">
    <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col normal-footer">
      <a href="/" @click="changeForm">
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
    <!-- レスポンシブ -->
    <!-- <div class="flex justify-around py-1 fixed z-10 bottom-0 bg-black w-full responsive">
      <nuxt-link to="/">
        <div class="text-center" :class="[ activetab === 1 ? 'active' : '' ]" @click="activetab=1">
          <i class="material-icons">home</i>
          <p class="icon-text">
            ホーム
          </p>
        </div>
      </nuxt-link>
      <nuxt-link to="/suggest">
        <div class="text-center" :class="[ activetab === 2 ? 'active' : '' ]" @click="activetab=2">
          <i class="material-icons">live_tv</i>
          <p class="icon-text">
            オススメ
          </p>
        </div>
      </nuxt-link>
      <nuxt-link to="/search" @click.native="clearForm()">
        <div class="text-center" :class="[ activetab === 3 ? 'active' : '' ]" @click="activetab=3">
          <i class="material-icons">search</i>
          <p class="icon-text">
            検索
          </p>
        </div>
      </nuxt-link>
    </div> -->
  </footer>
</template>

<script lang="ts">
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
      this.$accessor.search.changeMessage()
    },
    clearForm () {
      this.$accessor.search.clearMessage()
    },
    focusSearch () {
      // @ts-ignore
      this.$refs.textInput.focus()
    }
  },
})
</script>

<style scoped>
/* @media screen and (max-width: 768px) {
  .normal-footer {
    display: none !important;
  }

  .material-icons {
    font-size: 24px !important;
  }

  .icon-text {
    font-size: 10px;
  }

  .active {
    color: #6b46c1;
    color: white;
  }
}

@media screen and (min-width: 769px) {
  .responsive {
    display: none !important;
  }
} */
</style>

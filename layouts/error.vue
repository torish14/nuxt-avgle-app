<template>
  <div class="error bg-gray-800">
    <div class="flex flex-wrap flex-shrink-0 justify-center">
      <template v-if="error.statusCode === 404">
        <i class="material-icons text-gray-400">error</i>
        <h5 class="text-gray-400 text-lg">
          &nbsp;ページが見つかりません。
        </h5>
      </template>
      <template v-else class="text-gray-400 text-lg">
        <i class="material-icons text-gray-400">error</i>
        <h5 class="text-gray-400 text-lg">
          <!-- {{ error.statusCode }} -->
          <!-- {{ error.message }} -->
          &nbsp;エラーが発生しました。
        </h5>
      </template>
      <a
        href="https://porngle.love"
        aria-label="ホームへ戻る"
        class="text-gray-400 text-lg hover:text-purple-600"
        @click="setJapaneseForm"
      >
        &nbsp;トップページに戻る
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Meta from '~/assets/mixins/meta.js'

export type DataType = {
  meta: object
}

export default Vue.extend({
  mixins: [Meta],
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      meta: {
        title: 'エラー',
        description: 'エラーページです。',
        type: 'website',
        image: 'https://porngle.love/assets/PG ロゴ.jpeg',
        robots: 'noindex',
      },
    }
  },
  methods: {
    setJapaneseForm(): void {
      this.$accessor.search.setJapaneseMessage()
    },
  },
})
</script>

<style>
.error {
  padding-top: 4px;
}

body {
  background-color: #1f2937;
}
</style>

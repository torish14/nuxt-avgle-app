<template>
  <div class="error bg-gray-800">
    <div class="flex flex-col flex-shrink-0 items-center pt-8">
      <template v-if="error.statusCode === 404">
        <h5 class="text-gray-200 text-base">
          &nbsp;お探しのページが見つかりませんでした。
        </h5>
      </template>
      <template v-else class="text-gray-400 text-base">
        <h5 class="text-gray-200 text-sm">
          <!-- {{ error.statusCode }} -->
          <!-- {{ error.message }} -->
          &nbsp;エラーが発生しました。
        </h5>
      </template>
      <a
        href="https://porngle.love"
        aria-label="ホームへ戻る"
        class="text-gray-400 text-sm hover:text-purple-500"
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

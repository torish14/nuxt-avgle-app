<template>
  <div class="error bg-black">
    <div class="flex flex-wrap flex-shrink-0 justify-center">
      <template v-if="error.statusCode === 404">
        <i class="material-icons text-gray-500">error</i>
        <h5 class="text-gray-500 text-lg">
          &nbsp;ページが見つかりません
        </h5>
      </template>
      <template v-else class="text-gray-500 text-lg">
        <i class="material-icons text-gray-500">error</i>
        <h5 class="text-gray-500 text-lg">
          <!-- {{ error.statusCode }} -->
          <!-- {{ error.message }} -->
          &nbsp;エラーが発生しました
        </h5>
      </template>
      <a href="https://nuxt-pornhub-api.web.app" aria-label="ホームへ戻る" class="text-gray-500 text-lg hover:text-purple-600" @click="changeForm">
        &nbsp;トップページに戻る
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  methods: {
    changeForm () {
      this.$accessor.search.setJapaneseMessage()
    }
  },
}
</script>

<style>
.error {
  padding-top: 80px;
}
</style>

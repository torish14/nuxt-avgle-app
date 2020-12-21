<template>
  <div class="bg-black">
    <h1 v-if="error.statusCode === 404" class="text-white text-lg">
      お探しのページが見つかりません
    </h1>
    <h1 v-else class="text-white text-lg">
      エラーが発生しました
    </h1>
    <nuxt-link to="/" class="text-white text-lg hover:text-purple-600">
      トップページに戻ります
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  }
}
</script>

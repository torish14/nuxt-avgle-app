<template>
  <div>
    <div class="flex flex-wrap flex-shrink-0 justify-center bg-black">
      <template v-if="error.statusCode === 404">
        <i class="material-icons text-gray-500">error</i>
        <h5 class="text-gray-500 text-lg">
          &nbsp;お探しのページが見つかりません
        </h5>
      </template>
      <template v-else class="text-gray-500 text-lg">
        <i class="material-icons text-gray-500">error</i>
        <h5 class="text-gray-500 text-lg">
          &nbsp;エラーが発生しました
        </h5>
      </template>
      <a href="/" class="text-gray-500 text-lg hover:text-purple-600">
        &nbsp;トップページに戻ります
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
      this.$store.commit('search/clearMessage')
    }
  },
}
</script>

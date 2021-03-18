<template>
  <div v-if="$device.isDesktop">
    <p class="text-white">
      {{ translateMessages }}
    </p>
    <button @click="$fetch">
      Refresh
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  fetch () {
    this.$accessor.search.getTranslateTitles()
  },
  computed: {
    ...mapGetters('search', ['translateMessages'])
  },
  mounted() {
    this.refresh()
  },
  methods: {
    refresh () {
      this.$fetch()
    }
  }
})
</script>

<style>

</style>

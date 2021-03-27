<template>
  <section>
    <div v-if="$device.isDesktop">
      <div
        class="flex flex-col justify-center items-center"
        style="height: 768px"
      >
        <img src="~/assets/Porngle.jpeg" alt="Porngle" class="w-40" />
      </div>
    </div>
    <div v-else>
      <div
        class="flex flex-col justify-center items-center"
        style="height: 667px"
      >
        <img src="~/assets/Porngle.jpeg" alt="Porngle" class="w-40" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'mobile',
  // @ts-ignore
  head(): {
    title: string
    // @ts-ignore
    titleTemplate: null
  } {
    return {
      title: 'Porngle',
      // @ts-ignore
      titleTemplate: null,
    }
  },
  created() {
    setTimeout(() => this.$router.push('/home'), 1000)
  },
})
</script>

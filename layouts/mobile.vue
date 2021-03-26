<template>
  <div>
    <nuxt keep-alive />
  </div>
</template>

<script lang="ts">
export default {
  name: 'Mobile',
  head() {
    return {
      link: [
        {
          rel: 'canonical',
          href: `https://porngle.love${this.$route.path}`,
        },
      ],
    }
  },
}
</script>

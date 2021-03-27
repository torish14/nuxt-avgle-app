<template>
  <div>
    <nuxt keep-alive />
  </div>
</template>

<script lang="ts">
export default {
  name: 'Mobile',
  head(): { link: { rel: string; href: string }[] } {
    return {
      link: [
        {
          rel: 'canonical',
          // @ts-ignore
          href: `https://porngle.love${this.$route.path}`,
        },
      ],
    }
  },
}
</script>

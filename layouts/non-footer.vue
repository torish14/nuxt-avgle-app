<template>
  <div>
    <Header />
    <nuxt keep-alive />
  </div>
</template>

<script lang="ts">
export default {
  components: {
    // @ts-ignore
    Header: () => import('~/components/Header'),
    // @ts-ignore
  },
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

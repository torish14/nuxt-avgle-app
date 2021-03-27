<template>
  <div>
    <Header />
    <nuxt keep-alive />
    <Footer />
  </div>
</template>

<script lang="ts">
export default {
  name: 'Default',
  components: {
    // @ts-ignore
    Header: () => import('~/components/Header'),
    // @ts-ignore
    Footer: () => import('~/components/Footer'),
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

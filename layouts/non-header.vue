<template>
  <div>
    <nuxt keep-alive />
    <Footer />
  </div>
</template>

<script lang="ts">
export default {
  components: {
    // @ts-ignore
    Footer: () => import('~/components/Footer'),
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

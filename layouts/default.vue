<template>
  <div>
    <Header />
    <nuxt keep-alive />
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'default',
  components: {
    Header: () => import('~/components/Header'),
    Footer: () => import('~/components/Footer')
  },
  head () {
    return {
      link: [
        {
          rel: 'canonical',
          href: `https://porngle.love${this.$route.path}`,
        },
      ]
    }
  }
}
</script>

<template>
  <div>
    <nuxt keep-alive />
    <!-- <Footer /> -->
  </div>
</template>

<script>
// import Footer from '~/components/Footer'

export default {
  name: 'Custom',
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
  // components: {
  //   Footer: () => import('~/components/Footer')
  // }
}
</script>

<template>
  <div>
    <Header />
    <nuxt keep-alive />
    <Footer />
  </div>
</template>

<script>
// import Header from '~/components/Header'
// import Footer from '~/components/Footer'

export default {
  components: {
    Header: () => import('~/components/Header'),
    Footer: () => import('~/components/Footer')
  }
}
</script>

<template>
  <div>
    <nuxt keep-alive />
  </div>
</template>

<script>
export default {
  name: 'mobile',
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

<template>
  <div class="mainHome">
    <div class="topMessage"></div>
    <div class="banner">
      <img :src="bannerImage" alt="Banner">
    </div>
    <div class="paragraph">
      {{ paragraph }}
    </div>
    <div class="homeLogin">
      <Login></Login>
    </div>
    <div class="bottomBanner">
      <img :src="bottomBanner" alt="Banner">
    </div>
  </div>
</template>

<script>
import Login from './Login'

export default {
  components: {
    Login
  },
  data() {
    return {
      topMessage: this.$siteConfig.home.topMessage,
      bannerImage: this.$siteConfig.home.bannerImage,
      paragraph: this.$siteConfig.home.paragraph,
      bottomBanner: this.$siteConfig.home.bottomBanner
    }
  },
  mounted() {
      window.document.title = this.$siteConfig.siteName
  }
}
</script>
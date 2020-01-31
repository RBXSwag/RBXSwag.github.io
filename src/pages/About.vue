<template>
  <div class="mainAbout">
      <h1>About Us</h1>
      <div class="aboutParagraphs">
          <div v-for="(paragraph, index) in paragraphs" :key="index" class="aboutParagraph">
              <p>{{ paragraph }}</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            paragraphs: this.$siteConfig.about
        }
    },
    mounted() {
        window.document.title = 'About Us | ' + this.$siteConfig.siteName
    }
}
</script>

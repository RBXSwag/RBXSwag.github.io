<template>
  <div class="faqMain">
        <h1>Our frequently asked questions</h1>
        <div class="faqList">
          <div v-for="(question, index) in questions" :key="index" class="faqItem">
              <h2>{{ question[0] }}</h2>
              <p>{{ question[1] }}</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            questions: this.$siteConfig.faq
        }
    },
    mounted() {
        window.document.title = 'FAQ | ' + this.$siteConfig.siteName
    }
}
</script>
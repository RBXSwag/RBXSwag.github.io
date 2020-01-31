<template>
  <div class="earnMain">
    <h1>Earn</h1>
  </div>
</template>

<script>
export default {
  mounted() {
      window.document.title = 'Earn | ' + this.$siteConfig.siteName
  }
}
</script>
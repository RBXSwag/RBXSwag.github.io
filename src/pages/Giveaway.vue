<template>
  <div class="giveawayMain">
    <h1>Giveaway</h1>
  </div>
</template>

<script>
export default {
  mounted() {
    window.document.title = 'Giveaway | ' + this.$siteConfig.siteName
  }
}
</script>
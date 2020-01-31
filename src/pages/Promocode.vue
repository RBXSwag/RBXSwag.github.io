<template>
  <div class="promocodeMain">
    <h1>Promocode</h1>
  </div>
</template>

<script>
export default {
  mounted() {
    window.document.title = 'Promocode | ' + this.$siteConfig.siteName
  }
}
</script>
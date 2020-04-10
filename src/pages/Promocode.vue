<template>
  <div class="promocodeMain">
    <h1>Promocode</h1>
    <div class="promocodePanel">
      <h2>Enter Code</h2>
      <input type="text" placeholder="Code" v-model="code">
      <button @click="redeem()">Redeem</button>
      <p>You must complete at least one offer to redeem codes.</p>
      <p v-show="result" class="result">{{ result }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      code: undefined,
      result: undefined
    }
  },
  methods: {
    redeem() {
      fetch(`${this.$siteConfig.apiServer}/redeempromo`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({ name: this.code, user: localStorage.username }),
          mode: 'cors'
        })
        .then(result => result.json())
        .then(result => {
          this.code = undefined
          if (result.status === 'success') this.result = 'Sucessfully redeemed'
          else this.result = 'Code already used or invalid'
        })
    }
  },
  mounted() {
    window.document.title = 'Promocode | ' + this.$siteConfig.siteName
  }
}
</script>

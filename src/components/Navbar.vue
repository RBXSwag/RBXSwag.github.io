<template>
  <div>
      <div class="navLogo">
          <router-link to="/">{{ siteName }}</router-link>
      </div>
      <div class="navItems">
          <router-link to="/earn">Earn</router-link>
          <router-link to="/giveaway">Giveaway</router-link>
          <router-link to="/promocode">Promocode</router-link>
          <router-link to="/payout">Payout</router-link>
          <router-link to="/account">Account</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/faq">FAQ</router-link>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            siteName: this.$siteConfig.siteName,
            logoUrl: this.$siteConfig.logoUrl
        }
    },
    methods: {
        logout() {

        }
    }
}
</script>

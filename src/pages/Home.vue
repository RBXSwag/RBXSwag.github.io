<template>
  <div class="mainHome">
    <div class="welcomePanel">
      <div>
        <h1>Welcome to {{ this.$siteConfig.siteName }}</h1>
        <p>Earn <strong>FREE</strong> Robux by simply completing offers and watching videos!</p>
        <br>
        <button @click="$router.push('/login')">Start Earning Robux <i class="fas fas fa-hand-holding-usd"></i></button>
      </div>
      <img src="/img/gfx1.png">
    </div>
    <div class="aboutPanels">
      <div>
        <h2>Link Account</h2>
        <p>Link your account by entering your username, we will NEVER ask for your password.</p>
      </div>
      <div>
        <h2>Complete offers to earn Robux!</h2>
        <p>Do surveys, play games, and watch videos.</p>
      </div>
      <div>
        <h2>Withdraw Robux</h2>
        <p>Instantly withdraw the Robux directly into your Roblox account!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
      window.document.title = this.$siteConfig.siteName
  }
}
</script>
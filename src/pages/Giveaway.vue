<template>
  <div class="giveawayMain">
    <h1>Giveaway</h1>
    <h2>Prize: {{ prize }}</h2>
    <div class="giveaway">
      <div class="countdown">
        <h2>Next winner in {{ timer }}</h2>
      </div>
      <p>You can enter the giveaway every hour if you have completed an offer beforehand.</p>
      <button @click="enter()">Enter</button>
      <h4>Last Winner</h4>
      <p class="lastWinner">{{ lastWinner }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: undefined,
      lastWinner: ' . . . ',
      prize: ' . . . '
    }
  },
  methods: {
    enter() {
      fetch(`${this.$siteConfig.apiServer}/joingiveaway`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ user: localStorage.username }),
        mode: 'cors'
      })
      .then(data => data.json())
      .then(json => {
        alert(json.status)
      })
    }
  },
  mounted() {
    window.document.title = 'Giveaway | ' + this.$siteConfig.siteName
    fetch(`${this.$siteConfig.apiServer}/giveaway/lastwinner`)
      .then(raw => raw.text())
      .then(text => this.lastWinner = text)
    fetch(`${this.$siteConfig.apiServer}/getgiveaway`)
      .then(raw => raw.json())
      .then(res => this.prize = `${this.$siteConfig.pointsPrefix}${res.value}`)
    setInterval(() => {
      const now = new Date();
      const mins = now.getMinutes();
      const secs = now.getSeconds();
      this.timer = "Giveaway ending in " + (60 - mins - 1) + " minutes and " + (60 - secs) + " seconds!";
    }, 1000)
  }
}
</script>
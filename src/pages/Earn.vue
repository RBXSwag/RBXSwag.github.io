<template>
  <div class="earnMain">
    <div class="statsPanel">
      <div>
        <h2>Users Registered</h2>
        <h2>{{ statsRegistered }}</h2>
      </div>
      <div>
        <h2>Amount Rewared</h2>
        <h2>{{ statsRewarded }}</h2>
      </div>
      <div>
        <h2>Offers Completed</h2>
        <h2>{{ statsOffers }}</h2>
      </div>
    </div>
    <div style="display: flex; justify-content: center">
      <button style="margin: auto; font-size: 35px"><a style="text-decoration: none; color: white" href="https://discord.gg/mrxxGAZ" target="_blank">Join the Discord</a></button>
    </div>
    <div class="content">
      <Cashouts></Cashouts>
       <iframe height="350px" :src="youtubeKey" frameborder="0" allow="accelerometer; autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div class="offerProviders">
      <button @click="selectedProvider = 0">Adgate</button>
      <button @click="selectedProvider = 1">OfferToro</button>
      <!-- <button @click="selectedProvider = 2">Adscend</button> -->
      <button style="background: red"><a :href="`https://api.rbxswag.com/subscribe?user=${user}`" style="text-decoration: none; color: white; background-color: red" target="_blank"><i class="fab fa-youtube"></i> Subscribe for 1 RBX</a></button>
    </div>
    <div class="earnPanel">
      <iframe :src="rewardUrls[selectedProvider]" frameborder="0"  height="700px"></iframe>
    </div>
  </div>
</template>

<script>
import Cashouts from '../components/Cashouts'

export default {
  components: {
    Cashouts
  },
  data() {
    return {
      statsRegistered: undefined,
      statsRewarded: undefined,
      statsOffers: undefined,
      user: localStorage.username,
      youtubeKey: '',
      rewardUrls: [
        `https://wall.adgaterewards.com/nq6WqQ/${localStorage.username}`,
        `https://www.offertoro.com/ifr/show/22755/${localStorage.username}/9286`
      ],
      selectedProvider: 0
    }
  },
  mounted() {
    window.document.title = 'Earn | ' + this.$siteConfig.siteName
    fetch(`${this.$siteConfig.apiServer}/stats`, { mode: 'cors' })
    .then(result => result.json())
    .then(result => {
      this.statsRegistered = result.u
      this.statsRewarded = result.r
      this.statsOffers = result.o
    })
     fetch(`${this.$siteConfig.apiServer}/getyoutube`)
      .then(result => result.text())
      .then(key => this.youtubeKey = 'https://www.youtube.com/embed/' + key)
  }
}
</script>

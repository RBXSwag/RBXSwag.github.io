<template>
  <div class="dailyMain">
      <!-- <div class="dailyAds">
        <div class="ad">
          <h3>Your Ad Here</h3>
        </div>
        <div class="ad">
          <h3>Your Ad Here</h3>
        </div>
      </div> -->
      <div class="dailyPanel">
        <div class="quests">
          <h1>Daily Quests</h1>
          <p>Resets in {{ dayTimer }}</p>
          <div class="list">
            <div v-for="(item, index) in daily.redeemed" :key="index">
              <p>Completed {{ daily.complete }} of {{ item[0] }} offers</p>
              <button @click="claimDaily(index)" :disabled="daily.complete < item[0] || item[2]" >Claim {{ item[1] }}</button>
            </div>
          </div>
        </div>
        <div class="achievements">
          <h1>Achievements</h1>
          <div class="list">
            <div v-for="(item, index) in achivements.redeemed" :key="index">
              <p>Completed {{ achivements.complete }} of {{ item[0] }} offers</p>
              <button @click="claimAchievement(index)" :disabled="achivements.complete < item[0] || item[2]" >Claim {{ item[1] }}</button>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="dailyAds">
        <div class="ad">
          <h3>Your Ad Here</h3>
        </div>
        <div class="ad">
          <h3>Your Ad Here</h3>
        </div>
      </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      achivements: [],
      daily: [],
      dayTimer: ''
    }
  },
  methods: {
    claimDaily(index) {
      fetch(`${this.$siteConfig.apiServer}/quests/claim`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({ index: index, user: localStorage.username }),
        mode: 'cors'
      })
      .then(() => {
        fetch(`${this.$siteConfig.apiServer}/quests?name=${localStorage.username}`, { mode: 'cors' })
        .then(res => res.json())
        .then(res => this.daily = res)
      })
    },
    claimAchievement(index) {
      fetch(`${this.$siteConfig.apiServer}/achievements/claim`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({ index: index, user: localStorage.username }),
        mode: 'cors'
      })
      .then(() => {
        fetch(`${this.$siteConfig.apiServer}/achievements?name=${localStorage.username}`, { mode: 'cors' })
        .then(res => res.json())
        .then(res => this.achivements = res)
      })
    }
  },
  mounted() {
    window.document.title = 'Daily Rewards | ' + this.$siteConfig.siteName
    fetch(`${this.$siteConfig.apiServer}/quests?name=${localStorage.username}`, { mode: 'cors' })
      .then(res => res.json())
      .then(res => this.daily = res)
    fetch(`${this.$siteConfig.apiServer}/achievements?name=${localStorage.username}`, { mode: 'cors' })
      .then(res => res.json())
      .then(res => this.achivements = res)
    setInterval(() => {
      const hours = 24 - new Date().getUTCHours()
      const minutes = 60 - new Date().getUTCMinutes()
      const seconds = 60 - new Date().getUTCSeconds()
      this.dayTimer = (hours + "h " + minutes + "m " + seconds + "s")
    }, 1000)
  }
}
</script>
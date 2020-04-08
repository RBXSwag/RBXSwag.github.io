<template>
  <div class="cashoutsMain">
      <h2>Latest Cashouts</h2>
      <div v-for="i in cashouts" :key="i" >
            <img :src="`https://www.roblox.com/Thumbs/Avatar.ashx?x=50&y=50&username=${i[0]}`">
            <div class="name">{{ i[0] }}</div>
            <div class="amount">{{ i[1] }}</div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Cashouts',
    data() {
        return {
            cashouts: []
        }
    },
    mounted() {
        fetch(`${this.$siteConfig.apiServer}/latestwithdrawals`)
            .then(raw => raw.json())
            .then(stats => {
                this.cashouts = stats
            })
    }
}
</script>
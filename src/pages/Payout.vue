<template>
  <div class="mainPayout">
        <h1>Payout</h1>
        <p>Minimum withdraw: 5 RBX</p><br>
        <input type="number" placeholder="Amount" v-model="withdrawAmount">
        <button :disabled="withdrawAmount < 5" @click="getGroup()">Withdraw</button>
        <div v-show="showGroup">
        <br>
        <h4>Join this group before clicking Confirm</h4>
        <p>If you do not join the group you will lose your Robux</p>
        <a :href="`https://www.roblox.com/groups/${siteGroup}`" target="_blank" rel="noopener noreferrer"><button @click="clickedJoin = true">Join Group</button></a>
        </div>
        <div v-show="clickedJoin">
        <br>
        <h4>Click Payout AFTER you have JOINED the group</h4>
        <button @click="payout()">Payout</button>
        </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            withdrawAmount: 0,
            clickedJoin: false,
            siteBalance: 0,
            siteGroup: undefined,
            showGroup: false
        }
    },
    methods: {
        payout() {
            fetch(`${this.$siteConfig.apiServer}/api/payout/pay`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({ amount: this.withdrawAmount, user: localStorage.username }),
                mode: 'cors'
            })
            .then(data => data.json())
            .then(json => {
                alert(json.status)
                this.withdrawAmount = 0
                this.showGroup = false
                this.clickedJoin = false
            })
        },
        getGroup() {
            fetch(`${this.$siteConfig.apiServer}/api/payout/getgroup`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({ amount: this.withdrawAmount }),
                mode: 'cors'
            })
            .then(data => data.json())
            .then(json => {
                if (json.status === "Robux Available") {
                this.siteGroup = json.groupId  
                this.showGroup = true
                } else {
                  alert(json.status)
                }
            })
        }
    },
    mounted() {
        window.document.title = 'Payout | ' + this.$siteConfig.siteName
    }
}
</script>

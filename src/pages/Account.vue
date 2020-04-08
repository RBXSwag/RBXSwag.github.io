<template>
    <div class="accountMain">
        <h1>Your Account</h1>
        <div class="accountPanel">
            <div class="profilePanel">
                <img :src="`https://www.roblox.com/Thumbs/Avatar.ashx?x=250&y=250&username=${username}`">
                <h2>{{ username }}</h2>
                <div class="logout">
                    <button @click="logout()" class="logoutButton">Logout</button>
                </div>
            </div>
            <div class="statsPanel">
                <h2>Account Statistics</h2>
                <div class="stats">
                    <p><strong>Balance:</strong> {{ accountDetails.balance }}</p>
                    <p><strong>Total Earned:</strong> {{ accountDetails.totalEarned }}</p>
                    <p><strong>Completed Offers:</strong> {{ accountDetails.offersComplete }}</p>
                </div>
                <br>
                <div class="invite">
                    <h2>Invite friends and earn Robux!</h2>
                    <input type="text" :placeholder="`https://${$siteConfig.siteUrl}/#/?invite=${username}`" disabled style="width: 80%">
                    <p>You will earn 5% of all Robux your friends earn.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: localStorage.username,
            accountDetails: undefined
        }
    },
    methods: {
        logout() {
            localStorage.removeItem('username')
            this.$router.push('/')
        },
        fetchAccount() {
            return new Promise(async (resolve, reject) => {
                try {
                    const request = await fetch(`${this.$siteConfig.apiServer}/account?name=${localStorage.username}`, { mode: 'cors' })
                    const parsedResult = await request.json()
                    resolve(JSON.parse(parsedResult))
                }
                catch {
                    reject(0)
                }
            })
        }
    },
    async mounted() {
      window.document.title = 'Account | ' + this.$siteConfig.siteName
      this.accountDetails = await this.fetchAccount()
    }
}
</script>
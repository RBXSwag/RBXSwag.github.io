<template>
    <div class="mainNavbar">
        <div class="navLogo">
            <router-link to="/"><img src="/img/logo.png" :alt="$siteConfig.siteName"></router-link>
        </div>
        <label for="toggle" class="hamburger"><i class="fas fa-bars"></i></label>
        <input type="checkbox" id="toggle" class="nav-bar__toggle" v-model="burgerChecked">
        <div class="navItems">
            <router-link to="/earn"><i class="fas fa-money-bill-wave"></i> Earn</router-link>
            <router-link to="/daily"><i class="fas fa-gift"></i> Daily Rewards</router-link>
            <router-link to="/giveaway"><i class="fas fa-ticket-alt"></i> Giveaway</router-link>
            <router-link to="/promocode"><i class="fas fa-percentage"></i> Promocode</router-link>
            <router-link to="/payout"><i class="fas fa-coins"></i> Payout</router-link>
            <router-link to="/account"><i class="fas fa-user-circle"></i> Account</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/faq">FAQ</router-link>
        </div>
        <div v-if="loggedIn" class="account">
            <img class="icon" :src="`https://www.roblox.com/Thumbs/Avatar.ashx?x=50&y=50&username=${username}`" style="height: 40px; width: 40px">
            <div class="name">{{ username }}</div>
            <div class="balance">{{ `${this.$siteConfig.pointsPrefix} ${balance}`}}</div>
            <button class="logout" @click="logout()">Logout</button>
        </div>
        <router-link v-else class="account" to="/login">Add Account</router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loggedIn: localStorage.username ? true : false,
            siteName: this.$siteConfig.siteName,
            logoUrl: this.$siteConfig.logoUrl,
            username: localStorage.username,
            balance: 0,
            burgerChecked: false
        }
    },
    methods: {
        logout() {
            localStorage.removeItem('username')
            this.loggedIn = false
            this.$router.push('/')
        },
        fetchBalance() {
            return new Promise(async (resolve, reject) => {
                try {
                    const request = await fetch(`${this.$siteConfig.apiServer}/account?name=${this.username}`, { mode: 'cors' })
                    const parsedResult = await request.json()
                    resolve(JSON.parse(parsedResult).balance)
                }
                catch {
                    reject(0)
                }
            })
        }
    },
    watch: {
        async $route() {
            this.burgerChecked = false
            this.loggedIn = localStorage.username ? true : false
            this.username = localStorage.username
            this.balance = await this.fetchBalance()
        }
    },
    async mounted() {
        this.balance = await this.fetchBalance()
    }
}
</script>

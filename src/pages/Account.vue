<template>
    <div class="accountMain">
        <div class="logout">
            <button @click="logout()" class="logoutButton">Logout</button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        logout() {
            localStorage.removeItem('username')
            this.$router.push('/')
        }
    },
    mounted() {
      window.document.title = 'Account | ' + this.$siteConfig.siteName
    }
}
</script>
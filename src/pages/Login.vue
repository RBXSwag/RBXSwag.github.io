<template>
  <div class="mainLogin">
      <div class="loginBox">
          <h1>Login with your in-game username</h1>
          <p>We will never ask for a password.</p>
          <form v-on:submit.prevent="login()">
              <input type="text" placeholder="Username" v-model="username">
              <button @click="login()">Login</button>
          </form>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            username: undefined
        }
    },
    methods: {
        login() {
            if (this.username) {
                localStorage.username = this.username
                this.username = undefined
                this.$router.push('/earn')
            }
        }
    },
    mounted() {
        window.document.title = 'Login | ' + this.$siteConfig.siteName
    }
}
</script>
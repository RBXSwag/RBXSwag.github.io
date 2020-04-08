<template>
  <div class="mainLogin">
      <div class="loginBox">
          <h1>Admin Login</h1>
          <form v-on:submit.prevent="login(username, password)">
                <input type="text" placeholder="Username" v-model="username"><br>
                <input type="password" placeholder="Password" v-model="password"><br>
                <button @click="login(username, password)" :disabled="loggingin">Login</button>
          </form>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            username: undefined,
            password: undefined,
            loggingin: false
        }
    },
    methods: {
        login(u, p) {
            this.loggingin = true
            fetch(`${this.$siteConfig.apiServer}/auth`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({ username: u, password: p }),
                mode: 'cors'
            })
            .then(result => result.json())
            .then(result => {
                if (result.auth) {
                    localStorage.adminAuth = result.auth
                    this.$router.push('/admin')
                } else {
                    alert('Error')
                    this.loggingin = false
                }
            })
        }
    },
    mounted() {
        window.document.title = 'Admin Login | ' + this.$siteConfig.siteName
    }
}
</script>

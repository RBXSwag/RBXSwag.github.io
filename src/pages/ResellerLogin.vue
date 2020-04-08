<template>
  <div class="mainLogin">
    <div class="loginBox">
      <h1>Reseller Login</h1>
      <form v-on:submit.prevent="login(username, password)">
        <input type="text" placeholder="Username" v-model="username" /><br />
        <input
          type="password"
          placeholder="Password"
          v-model="password"
        /><br />
        <button @click="login(username, password)" :disabled="loggingin">
          Login
        </button>
      </form>
    </div>
    <br />
    <div class="loginBox">
      <h1>Apply For Reseller</h1>
      <form v-on:submit.prevent="register(registerUsername, registerPassword, registerMessage)">
        <input
          type="text"
          placeholder="Username"
          v-model="registerUsername"
        /><br />
        <input
          type="password"
          placeholder="Password"
          v-model="registerPassword"
        /><br />
        <input
          type="text"
          placeholder="Application Message"
          v-model="registerMessage"
        /><br />
        <button>Apply</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      registerUsername: undefined,
      registerPassword: undefined,
      registerMessage: undefined,
      username: undefined,
      password: undefined,
      loggingin: false
    };
  },
  methods: {
    login(u, p) {
      this.loggingin = true;
      fetch(`${this.$siteConfig.apiServer}/reseller/auth`, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({ username: u, password: p }),
        mode: "cors"
      })
        .then(result => result.json())
        .then(result => {
          if (result.auth) {
            localStorage.resellerAuth = result.auth
            localStorage.resellerUser = u
            this.$router.push("/reseller");
          } else {
            alert("Error");
            this.loggingin = false;
          }
        });
    },
    register(name, pass, group) {
      if (!name || !pass || !group) {
        alert("Please enter a username, password and message!");
      } else {
        fetch(`${this.$siteConfig.apiServer}/api/reseller/apply`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ name, pass, group })
        })
          .then(r => r.json())
          .then(r => (r.status === 'success') ? alert('Application sent!') : alert(r.status))
      }
    }
  },
  mounted() {
    window.document.title = "Reseller Login | " + this.$siteConfig.siteName;
  }
};
</script>

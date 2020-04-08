<template>
  <div class="adminMain">
    <h1>Reseller Dashboard</h1>
    <div class="adminPanel">
      <div class="payoutConfig">
        <h2>Payout Config</h2>
        <p>Set Roblox Authentication Cookie and group ID.</p>
        <textarea
          cols="30"
          rows="10"
          placeholder="Enter your .ROBLOSECURITY cookie"
          v-model="robloxCookie"
        ></textarea
        ><br />
        <input
          type="number"
          placeholder="Enter your group ID"
          v-model="robloxGroup"
        /><br />
        <button @click="updatePayoutConfig()">Update</button>
      </div>
      <div class="account">
        <h2>Reselling Account</h2>
        <p>Group Balance: {{ groupBalance }}</p>
        <p>Outstanding Paidout: {{ outstandingBalance }}</p>
        <br />
        <p>
          Using Group Funds For Payouts: <strong>{{ resellerStatus }}</strong>
        </p>
        <button @click="toggleStatus()">Enable</button>
      </div>
      <div class="logout">
        <h2>Log Out</h2>
        <button @click="logout()">Logout</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      robloxCookie: undefined,
      robloxGroup: undefined,
      outstandingBalance: 0,
      groupBalance: 0,
      resellerStatus: false,
    };
  },
  methods: {
    getPayoutConfig() {
      fetch(`${this.$siteConfig.apiServer}/reseller/getpayoutconfig`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: localStorage.resellerAuth,
        },
        body: JSON.stringify({
          user: localStorage.resellerUser,
        }),
        mode: "cors",
      })
        .then((result) => result.json())
        .then((json) => {
          this.outstandingBalance = json.balance;
          if (json.id) {
            this.robloxGroup = json.id;
            this.getGroupBalance();
          }
          if (json.cookie) this.robloxCookie = json.cookie;
        });
    },
    updatePayoutConfig() {
      fetch(`${this.$siteConfig.apiServer}/reseller/setpayoutconfig`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: localStorage.resellerAuth,
        },
        body: JSON.stringify({
          user: localStorage.resellerUser,
          id: this.robloxGroup,
          cookie: this.robloxCookie,
        }),
        mode: "cors",
      })
        .then((result) => result.json())
        .then((json) => {
          if (json.status == "Success") alert(`Updated payout config`);
          else alert(`Error updating payout config`);
        });
    },
    getGroupBalance() {
      fetch(`${this.$siteConfig.apiServer}/reseller/getrobloxbalance`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: localStorage.resellerAuth,
        },
        body: JSON.stringify({
          user: localStorage.resellerUser,
          id: this.robloxGroup,
        }),
        mode: "cors",
      })
        .then((result) => result.json())
        .then((json) => (this.groupBalance = json.balance));
    },
    toggleStatus() {
      if (this.robloxCookie && this.robloxGroup) {
        const action = this.resellerStatus ? "disable" : "enable";
        fetch(`${this.$siteConfig.apiServer}/reseller/${action}`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: localStorage.resellerAuth,
          },
          body: JSON.stringify({
            user: localStorage.resellerUser,
            id: this.robloxGroup,
            cookie: this.robloxCookie,
          }),
          mode: "cors",
        }).then(() => this.getStatus())
      }
    },
    getStatus() {
      fetch(`${this.$siteConfig.apiServer}/reseller/status`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: localStorage.resellerAuth,
        },
        body: JSON.stringify({
          user: localStorage.resellerUser
        }),
        mode: "cors",
      })
        .then((result) => result.json())
        .then((json) => (this.resellerStatus = json.status));
    },
    logout() {
      localStorage.removeItem("resellerAuth");
      localStorage.removeItem("resellerUser");
      this.$router.push("/reseller/login");
    },
  },
  mounted() {
    this.getPayoutConfig();
    this.getStatus()
  },
};
</script>

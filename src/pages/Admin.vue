<template>
  <div class="adminMain">
    <h1>Admin Dashboard</h1>
    <div class="adminPanel">
      <div class="pointGiver">
        <h2>Point Giver</h2>
        <p>
          Give a user {{ $siteConfig.pointsPrefix }}, use a negative number to
          remove points.
        </p>
        <input type="text" placeholder="User" v-model="giveUser" /><br />
        <input
          type="number"
          :placeholder="`Amount of ${$siteConfig.pointsPrefix}`"
          v-model="giveAmount"
        /><br />
        <button @click="givePoints()">Give</button><br />
      </div>
      <div class="generatePromocode">
        <h2>Create Promocode</h2>
        <input type="text" placeholder="Code" v-model="promoCode" /><br />
        <input type="text" placeholder="Value" v-model="promoValue" /><br />
        <input type="text" placeholder="Uses" v-model="promoUses" /><br />
        <button @click="createPromo()">Create</button>
      </div>
      <div class="setHourlyGiveaway">
        <h2>Hourly Giveaway</h2>
        <p>
          Every hour {{ $siteConfig.pointsPrefix + hourlyRate }} can be given
          away.
        </p>
        <input
          type="number"
          placeholder="New amount"
          v-model="newHourlyRate"
        /><br />
        <button @click="updateHourlyGiveaway()">Update</button>
      </div>
      <div>
        <h2>Set Youtube Video</h2>
        <input
          type="text"
          placeholder="Youtube URL"
          v-model="newYotubeUrl"
        /><br />
        <button @click="updateYoutube()">Update</button>
      </div>
      <div class="activeResellers">
        <h2>Resellers</h2>
        <table>
          <thead>
            <th>Username</th>
            <th>Outstanding Balance</th>
            <th>Mark Outstanding Balance Paid</th>
            <th>Remove Account</th>
          </thead>
          <tbody>
            <tr v-for="(item, index) in resellerAccounts" :key="index">
              <th>{{ index }}</th>
              <th>{{ item.balance }}</th>
              <th>
                <button @click="approveApplication(index)">
                  <i class="fas fa-check"></i>
                </button>
              </th>
              <th>
                <button @click="removeReseller(index)">
                  <i class="fas fa-times"></i>
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="applicationResellers">
        <h2>Reseller Applications</h2>
        <table>
          <thead>
            <th>Username</th>
            <th>Message</th>
            <th>Action</th>
          </thead>
          <tbody>
            <tr v-for="(item, index) in resellerApplications" :key="index">
              <th>{{ index }}</th>
              <th>{{ item.group }}</th>
              <th>
                <button @click="approveApplication(index)">
                  <i class="fas fa-check"></i></button
                ><button @click="rejectApplication(index)">
                  <i class="fas fa-times"></i>
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
      <!--
          <div class="payoutConfig">
              <h2>Payout Config</h2>
              <p>Set Roblox Authentication Cookie and group ID.</p>
              <textarea cols="30" rows="10" placeholder="Enter your .ROBLOSECURITY cookie" v-model="robloxCookie"></textarea><br>
              <input type="number" placeholder="Enter your group ID" v-model="robloxGroup"><br>
              <button @click="updatePayoutConfig()">Update</button>
          </div>
      -->
      <div class="setPassword">
        <h2>Change Admin Password</h2>
        <p>Change your password.</p>
        <input
          type="password"
          placeholder="Enter new password"
          v-model="changePassword"
        /><br />
        <input
          type="password"
          placeholder="Enter again"
          v-model="changePasswordConfirm"
        /><br />
        <button @click="changeAdminPassword()">Change</button>
      </div>
      <div class="logout">
        <h2>Log Out</h2>
        <button @click="logout()">Logout</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
th {
  padding: 0px 5px 0px 5px;
}
</style>

<script>
export default {
  data() {
    return {
      giveUser: undefined,
      giveAmount: undefined,
      promoCode: undefined,
      promoValue: undefined,
      promoUses: undefined,
      hourlyRate: undefined,
      newHourlyRate: undefined,
      robloxCookie: undefined,
      robloxGroup: undefined,
      changePassword: undefined,
      changePasswordConfirm: undefined,
      newYotubeUrl: undefined,
      resellerApplications: {},
      resellerAccounts: {}
    };
  },
  methods: {
    givePoints() {
      fetch(`${this.$siteConfig.apiServer}/givepoints`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: localStorage.adminAuth
        },
        body: JSON.stringify({ user: this.giveUser, amount: this.giveAmount }),
        mode: "cors"
      })
        .then(result => result.json())
        .then(json => {
          if (json.stauts === "sucess") {
            alert(`Sent ${this.giveUser} ${this.giveAmount} Robux!`);
          } else {
            alert(`Error, Robux not sent`);
          }
          this.giveUser = undefined;
          this.giveAmount = undefined;
        });
    },
    createPromo() {
      fetch(`${this.$siteConfig.apiServer}/createpromo`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: localStorage.adminAuth
        },
        body: JSON.stringify({
          name: this.promoCode,
          value: this.promoValue,
          uses: this.promoUses
        }),
        mode: "cors"
      })
        .then(result => result.json())
        .then(json => {
          this.promoCode = undefined;
          this.promoValue = undefined;
          this.promoUses = undefined;
          alert(json.status);
        });
    },
    updateHourlyGiveaway() {
      fetch(`${this.$siteConfig.apiServer}/setgiveaway`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: localStorage.adminAuth
        },
        body: JSON.stringify({ value: this.newHourlyRate }),
        mode: "cors"
      })
        .then(result => result.json())
        .then(json => {
          if (json.error) alert(`Error: Giveaway amount not changed!`);
          else this.hourlyRate = this.newHourlyRate;
          this.newHourlyRate = undefined;
        });
    },
    updateYoutube() {
      const _key = new URL(this.newYotubeUrl).search
        .split("v=")[1]
        .split("&")[0];
      fetch(`${this.$siteConfig.apiServer}/setyoutube`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: localStorage.adminAuth
        },
        body: JSON.stringify({ value: _key }),
        mode: "cors"
      })
        .then(result => result.json())
        .then(json => {
          if (json.error) alert(`Error updating Yotube URL`);
          else alert(`Updated Yotube URL`);
        });
    },
    updatePayoutConfig() {
      fetch(`${this.$siteConfig.apiServer}/setpayout`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: localStorage.adminAuth
        },
        body: JSON.stringify({
          id: this.robloxGroup,
          cookie: this.robloxCookie
        }),
        mode: "cors"
      })
        .then(result => result.json())
        .then(json => {
          if (json.status == "Success") alert(`Updated payout config`);
          else alert(`Error updating payout config`);
        });
    },
    changeAdminPassword() {
      if (
        this.changePassword === this.changePasswordConfirm &&
        this.changePassword
      ) {
        fetch(`${this.$siteConfig.apiServer}/admin/setpassword`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: localStorage.adminAuth
          },
          body: JSON.stringify({ pass: this.changePassword }),
          mode: "cors"
        })
          .then(result => result.json())
          .then(result => {
            if (result.error) alert("Password not changed");
            else {
              localStorage.adminAuth = result.auth;
              this.changePassword = undefined;
              this.changePasswordConfirm = undefined;
              alert("Changed password!");
            }
          });
      } else {
        alert("Passwords do not match!");
      }
    },
    getResellers() {
      fetch(`${this.$siteConfig.apiServer}/api/reseller/accounts`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: localStorage.adminAuth
        },
        mode: "cors"
      })
        .then(r => r.json())
        .then(data => (this.resellerAccounts = data));
    },
    getResellerApplications() {
      this.getResellers()
      fetch(`${this.$siteConfig.apiServer}/api/reseller/applications`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: localStorage.adminAuth
        },
        mode: "cors"
      })
        .then(r => r.json())
        .then(data => (this.resellerApplications = data));
    },
    rejectApplication(name) {
      fetch(`${this.$siteConfig.apiServer}/api/resller/applications/reject`, {
        method: "post",
        headers: {
          "content-type": "application/json",
          authorization: localStorage.adminAuth
        },
        body: JSON.stringify({ name }),
        mode: "cors"
      }).then(() => this.getResellerApplications());
    },
    approveApplication(name) {
      fetch(`${this.$siteConfig.apiServer}/api/resller/applications/approve`, {
        method: "post",
        headers: {
          "content-type": "application/json",
          authorization: localStorage.adminAuth
        },
        body: JSON.stringify({ name }),
        mode: "cors"
      }).then(() => this.getResellerApplications());
    },
    removeReseller(name) {
      fetch(`${this.$siteConfig.apiServer}/api/reseller/accounts/remove`, {
        method: "post",
        headers: {
          "content-type": "application/json",
          authorization: localStorage.adminAuth
        },
        body: JSON.stringify({ name }),
        mode: "cors"
      }).then(() => this.getResellerApplications());
    },
    logout() {
      localStorage.removeItem("adminAuth");
      this.$router.push("/admin/login");
    }
  },
  mounted() {
    this.getResellerApplications();
    fetch(`${this.$siteConfig.apiServer}/getgiveaway`, { mode: "cors" })
      .then(result => result.json())
      .then(json => {
        if (json.error) this.hourlyRate = "Error";
        else this.hourlyRate = json.value;
      });
  }
};
</script>

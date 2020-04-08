import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VuePageTransition from 'vue-page-transition'

Vue.use(VuePageTransition)
Vue.config.productionTip = false

async function main() {
  const result = await fetch('/config/data.json')
  const configObject = await result.json()
  Vue.prototype.$siteConfig = configObject
  new Vue({
    router,
    render: h => h(App),
  }).$mount('#app')
}

main()
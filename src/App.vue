<template>
  <div>
    <Navbar></Navbar>
    <vue-page-transition name="fade-in-right">
      <router-view></router-view>
    </vue-page-transition>
    <div class="noblock" style="">
      <div>
        <h2>Please disabled ad blockers to access this site</h2>
        <button onclick="window.location = '/#'">I disabled Adblock, let me in</button>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'app',
  components: {
    Navbar
  },
  mounted() {
    if(!document.getElementById('TaZqKzEjPMmY')) {
      document.querySelector('.noblock').style.display = 'flex'
    }
  }
}
</script>
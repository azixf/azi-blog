<template>
  <div class="home-page">
    <nav-bar />
    <profile-page />
    <work-output />
    <footer-comp />
  </div>
</template>

<script lang="ts">
import NavBar from './components/navBar.vue'
import ProfilePage from './components/profile.vue'
import WorkOutput from './components/workOutput.vue'
import FooterComp from './components/footer.vue'

export default {
  name: 'HomePage',
  components: {
    NavBar,
    ProfilePage,
    WorkOutput,
    FooterComp,
  },
}
</script>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.home-page {
  width: 960px;
  min-height: 100vh;
  margin: 0 auto;
  #bg {
    width: 100vw;
    height: 100vh;
  }
}
</style>

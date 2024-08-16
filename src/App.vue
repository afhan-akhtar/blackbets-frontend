<template>
  <div id="app">
    <TopBar />
    <router-view></router-view>
    <MainFooter />
  </div>
</template>

<script>
import MainFooter from './components/common/Footer.vue'
import TopBar from './components/common/TopBar.vue'

export default {
  name: 'App',
  components: {
    MainFooter,
    TopBar
  }
}
</script>

<style></style>

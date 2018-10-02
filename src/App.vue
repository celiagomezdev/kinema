<template lang="pug">
  div(id="app")
    TopMenu
    router-view
</template>

<script>
import TopMenu from '@/components/top-menu.vue'

export default {
  name: 'App',
  components: {
    TopMenu
  }
}
</script>

<style lang="scss">
@import './style/index';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $mainFontColor;
}

body {
  background-color: $bgBodyDark
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>

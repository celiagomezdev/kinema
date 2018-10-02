<template lang="pug">
  div(id="app")
    div(id='top-menu')
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
  text-align: center;
  color: $mainFontColor;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: $greyGreen;
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

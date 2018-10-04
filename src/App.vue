<template lang="pug">
  div(id="app")
    div(class="top-menu")
      TopMenu
    div(class="main")
      router-view
    div(class="footer")
      Footer
</template>

<script>
import TopMenu from '@/components/top-menu.vue'
import Footer from '@/components/footer.vue'

export default {
  name: 'App',
  components: {
    TopMenu,
    Footer
  }
}
</script>

<style lang="scss">
@import "./style/index";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  background-color: $bgBodyDark;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $mainFontColor;
  height: -webkit-fill-available;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "top-menu"
    "main"
    "footer";
}

.top-menu {
  grid-area: top-menu;
}

.main {
  grid-area: main;
  min-height: 100vh;
  height: auto;
}

.footer {
  //to fix: should be sticky
  grid-area: footer;
}
</style>

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
@import './style/index';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $mainFontColor;
  min-height: 100%;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: $bgBodyDark;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: "top-menu", "main", "footer";
  grid-template-rows: auto 1fr auto;
}

.top-menu {
  grid-area: top-menu;
}

.main {
  grid-area: main;
  height: 600px;
}

.footer {
  grid-area: footer;
}

</style>

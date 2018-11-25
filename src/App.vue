<script>
// import TopMenu from '@/components/top-menu.vue'
// import Footer from '@/components/footer.vue'

export default {
  name: 'App'
}
</script>

<template lang="pug">
  div.app
    div.main
      router-view
</template>

<style lang='scss'>
@import '@/assets/style/main.scss';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  background-color: var(--white);
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-color);
  height: -webkit-fill-available;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'top-menu'
    'main'
    'footer';
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

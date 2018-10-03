<template lang="pug">
  div(class="home")
    div(class="left")
    div(class="center")
      MoviesBox
    div(class="right")
</template>

<script>
// @ is an alias to /src
import MoviesBox from '@/components/movies-box.vue'

export default {
  name: 'Home',
  components: {
    MoviesBox
  }
}
</script>

<style lang="scss" scoped>
@import "../style/index.scss";

.home {
  padding: 20px 0;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-areas: "left center right";
}
</style>

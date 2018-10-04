<script>
// @ is an alias to /src
import MoviesBox from '@/components/movies-box.vue'
import Schedules from '@/components/schedules.vue'

export default {
  name: 'Home',
  components: {
    MoviesBox,
    Schedules
  }
}
</script>

<template lang="pug">
  div(class="home")
    div(class="left")
    div(class="center")
      MoviesBox
      Schedules
    div(class="right")
</template>

<style lang="scss" scoped>
@import "../style/index.scss";

.home {
  padding: 20px 0;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-areas: "left center right";
}
</style>

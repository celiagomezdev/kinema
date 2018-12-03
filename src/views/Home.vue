<script>
// @ is an alias to /src
import MoviesBox from '@/components/movies-box.vue'
import Hero from '@/components/hero.vue'
import MovieBooking from '@/components/movie-booking.vue'

export default {
  name: 'Home',
  components: {
    Hero,
    MoviesBox,
    MovieBooking
  }
}
</script>

<template lang="pug">
  div
    Hero
    MoviesBox
    MovieBooking
</template>

<style lang="scss" scoped>
</style>

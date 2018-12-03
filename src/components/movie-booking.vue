<script>
import { serverBus } from '../main.js'

export default {
  name: 'MovieBooking'
}
</script>

<template lang="pug">
  section#moviebooking
    .content
      .grid
        .seats-box
          h3 SELECT YOUR SEAT
        .movie-details-box
          h2 Movie Title
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '@/assets/style/main.scss';

.seats-box {
  grid-column: 3 / 7;
  border: 1px solid #333;
  height: 200px;
}

.movie-details-box {
  grid-column: 7 / 11;
  border: 1px solid #333;
  height: 200px;
}
</style>
<script>
import { serverBus } from '../main.js'

export default {
  name: 'Schedules',
  data() {
    return {
      weekDays: ['Thursday', 'Friday', 'Saturday', 'Sunday'],
      timeTable: ['18:45', '21:00'],
      selectedMovie: undefined
    }
  },
  created() {
    serverBus.$on('selectMovie', (selectedMovie) => {
      this.selectedMovie = selectedMovie
    })
  }
}
</script>

<template lang="pug">
  div(class="schedules-wrapper" v-if="this.selectedMovie")
    div(class="movie-title")
      h2(v-if="this.selectedMovie.originalTitle") {{ this.selectedMovie.originalTitle }}
      h2(v-else) {{ this.selectedMovie.title }}
    div(class="week-days")
      div(class="week-day" v-for="day in weekDays") {{ day }}
        div(class="time" v-for="time in timeTable") {{ time }}
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../style/index.scss";

.schedules-wrapper {
  padding: 15px;
  background-color: $bgBodyLight;
}

.movie-title {
  color: $lightBgFontColor;
  margin: 10px 0 10px;
}

.week-days {
  color: $lightBgFontColor;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  justify-content: center;
  margin-bottom: 10px;
}

.week-day {
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.time {
  margin-top: 5px;
  font-weight: normal;
  height: 30px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

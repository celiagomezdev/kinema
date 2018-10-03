<template lang="pug">
  div(class="schedules-wrapper")
    div(class="movie-title")
      h2 Title of the movie
    div(class="week-days")
      div(class="week-day") Thursday
        div(class="time") 18:45
        div(class="time") 21:00
      div(class="week-day") Friday
        div(class="time") 18:45
        div(class="time") 21:00
      div(class="week-day") Saturday
        div(class="time") 18:45
        div(class="time") 21:00
      div(class="week-day") Sunday
        div(class="time") 18:45
        div(class="time") 21:00
</template>

<script>
export default {
  name: 'Schedules'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../style/index.scss";

.schedules-wrapper {
  padding: 15px;
  background-color: $bgBodyLight;
}

.movie-title {
  color: $lightBgFontColor;
  margin-bottom: 10px;
}

.week-days {
  color: $lightBgFontColor;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  justify-content: center;
  margin-bottom: 20px;
}

.week-day {
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.time {
  font-weight: normal;
  height: 30px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 5px;
}
</style>

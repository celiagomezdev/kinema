<template lang="pug">
  div(class="movies-wrapper")
    div(class="movie-item")
      router-link(to="/movie")
    div(class="movie-item")
    div(class="movie-item")
    div(class="movie-item")
    div(class="movie-item")
    div(class="movie-item")
</template>

<script>
export default {
  name: 'MoviesBox'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../style/index.scss";

.movies-wrapper {
  padding: 15px;
  background-color: $bgBodyLight;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  justify-content: center;

  @media (min-width: 500px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: (repeat(2, 1fr));
  }
}

.movie-item {
  background-color: $pinkLavender;
  min-width: 100px;
  width: 150px;
  height: 200px;
  min-height: 150px;
}
</style>

<script>
import Movies from '../movies.json'

import { serverBus } from '../main.js'

export default {
  name: 'MoviesBox',
  data() {
    return {
      featuredMovies: Movies.movies.slice(0, 30),
      choosenMoviesIndex: [27, 2, 6, 8, 15, 19],
      selectedMovie: {}
    }
  },
  methods: {
    getPosterImageUrl(index) {
      return this.featuredMovies[index].posterurl
    },
    selectMovie(index) {
      this.selectedMovie = this.featuredMovies[index]
      serverBus.$emit('selectMovie', this.selectedMovie)
    }
  }
}
</script>

<template lang="pug">
  div(class="movies-wrapper")
    router-link(to="#" v-for="index in choosenMoviesIndex")
      div(class="movie-item" @click="selectMovie(index)")
        img(:src="getPosterImageUrl(index)")
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../style/index.scss";

.movies-wrapper {
  padding: 15px;
  background-color: white;
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
  min-width: 100px;
  width: 150px;
  height: 220px;
  min-height: 150px;
  text-align: center;
}

.movie-item img {
  width: auto;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  margin: auto;
}


</style>

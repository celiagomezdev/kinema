<script>
import Movies from '../movies.json'

import { serverBus } from '../main.js'

export default {
  name: 'MoviesBox',
  data() {
    return {
      featuredMovies: Movies.movies.slice(0, 30),
      choosenMoviesIndex: [27, 18, 6, 8, 15, 19],
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
  section#movies-box
    .content
      .grid
        .movies-wrapper
          .movie-item(v-for="index in choosenMoviesIndex")
            router-link(to="#" @click="selectMovie(index)")
            img(:src="getPosterImageUrl(index)")
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '@/assets/style/main.scss';

.movies-wrapper {
  grid-column: 3/11;
}

.movie-item {
  grid-column: span 2;
  height: 220px;
  min-height: 150px;
}

.movie-item img {
  width: auto;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  margin: auto;
}
</style>

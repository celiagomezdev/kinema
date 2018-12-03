<script>
import Movies from '../movies.json'

import { serverBus } from '../main.js'

export default {
  name: 'MoviesBox',
  data() {
    return {
      featuredMovies: Movies.movies.slice(0, 30),
      choosenMoviesIndex: [27, 18, 6, 8],
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
        .grid.movie-wrapper 
          a.movie-item(v-for="index in choosenMoviesIndex")
            img.poster.cover-filter(:src="getPosterImageUrl(index)")
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '@/assets/style/main.scss';

.movie-wrapper {
  grid-template-columns: repeat(8, 1fr);
  grid-column: 3 / 11;
}

.movie-item {
  grid-column: span 2;
  height: 250px;
}

.poster {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.cover-filter:hover {
  -webkit-filter: opacity(90%);
  filter: opacity(90%);
}

@include tablet {
  .movie-wrapper {
    grid-template-columns: repeat(6, 1fr);
    grid-column: 1/-1;
    grid-row: 1;
  }

  .poster {
    width: auto;
  }
}

@include mobile {
  .movie-wrapper {
    grid-template-columns: repeat(2, 1fr);
    grid-column: 1/-1;
    justify-items: center;
  }
}
</style>

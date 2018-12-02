<script>
// @ is an alias to /src
import MoviesBox from '@/components/movies-box.vue'
import Hero from '@/components/hero.vue'

export default {
  name: 'Home',
  components: {
    Hero,
    MoviesBox
  }
}
</script>

<template lang="pug">
  div
    Hero
    MoviesBox
</template>

<style lang="scss" scoped>
</style>

<script>
// @ is an alias to /src
import MoviesBox from '@/components/movies-box.vue'
// import Schedules from '@/components/schedules.vue'

export default {
  name: 'Home',
  components: {
    MoviesBox
    // Schedules
  }
}
</script>

<template lang="pug">
    MoviesBox
    //- Schedules
</template>

<style lang="scss" scoped>
</style>

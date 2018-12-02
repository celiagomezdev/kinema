<script>
import { serverBus } from '../main.js'

export default {
  name: 'Hero'
}
</script>

<template lang="pug">
  section#hero
    .content
      .grid
        h1.logo Kinema
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '@/assets/style/main.scss';

h1 {
  grid-column: 1/-1;
  text-align: center;
}
</style>

<template lang="pug">
  div(class="home")
    Intro(msg="Enjoy the seventh art.")
</template>

<script>
// @ is an alias to /src
import Intro from '@/components/intro.vue'

export default {
  name: 'Home',
  components: {
    Intro
  }
}
</script>

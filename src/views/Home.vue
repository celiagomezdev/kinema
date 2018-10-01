<template lang="pug">
  div(class="home")
    TopMenu
    Intro(msg="Enjoy the seventh art.")
</template>

<script>
// @ is an alias to /src
import Intro from '../components/intro.vue'
import TopMenu from '../components/top-menu.vue'

export default {
  name: 'Home',
  components: {
    Intro,
    TopMenu
  }
}
</script>

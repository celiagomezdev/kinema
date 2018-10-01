<template lang="pug">
  div(class="home")
    Intro(msg="Welcome to Kinema 📽")
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

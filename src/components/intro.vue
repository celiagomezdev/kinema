<template lang="pug">
  div(class="intro")
    p
      | {{ msg }}
</template>

<script>
export default {
  name: 'Intro',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.intro {
  padding: 20px 20px;
}
</style>

<template lang="pug">
  div(class="top-menu-container")
    div(class="top-menu" id="nav")
      div(class="logo")
        router-link(to="/") kinema
      div(class="about")
        router-link(to="/about") About
      div(class="login")
        router-link(to="/login") Log in
      div(class="signup")
        router-link(to="/signup") Sign up
</template>

<script>
export default {
  name: 'TopMenu'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../style/index.scss';
@import url('https://fonts.googleapis.com/css?family=Capriola');

.top-menu-container {
  padding: 20px 0;
  background-color: $bgBodyLight;
  color: $lightBgFontColor;
  font-weight: bold;
}

.top-menu {
  width: 900px;
}

.logo {
  font-family: 'Capriola', sans-serif;
  font-size: 40px;
  color: $lightGreen;
}

</style>

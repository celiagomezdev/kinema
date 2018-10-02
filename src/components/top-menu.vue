<template lang="pug">
  div(class="top-menu-wrapper")
    div(class="logo")
      router-link(to="/") kinema
    div(class="nav-menu" id="nav")
      div(class="about")
        router-link(to="/about") About
      div(class="about")
        router-link(to="/location") Location
      div(class="about")
        router-link(to="/contact") Contact
    div(class='user')
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

.top-menu-wrapper {
  padding: 15px 20px;
  background-color: $bgBodyDarkLighter;
  font-weight: bold;
  display: grid;
  grid-template-columns: 2fr 6fr 2fr;
}

.top-menu-wrapper a {
  color: $mainFontColor;
  text-decoration: none;
}

.top-menu-wrapper a:active {
  color: $greyGreen;
}

.top-menu-wrapper a.router-link-exact-active {
  color: $greyGreen;
}

.logo {
  font-family: 'Capriola', sans-serif;
  font-size: 40px;
  color: $lightGreen;
}

.nav-menu {

}

.user {

}

</style>

<template lang="pug">
  div(class="footer-wrapper")
    div(class="nav-menu" id="nav")
      div(class="about")
        router-link(to="/about") About us
      div(class="location")
        router-link(to="/location") Location
      div(class="contact")
        router-link(to="/contact") Contact
    div(class='social')
      div(class="facebook")
        router-link(to="/fb")
          include ../assets/facebook.svg
      div(class="instagram")
        router-link(to="/ig")
          include ../assets/instagram.svg
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../style/index.scss";

.footer-wrapper {
  font-size: 14px;
  padding: 15px 20px;
  background-color: $bgBodyDarkLighter;
  display: grid;
  grid-template-columns: 1fr 50px;
}

.footer-wrapper a {
  color: $mainFontColor;
  text-decoration: none;
}

.footer-wrapper a.router-link-exact-active {
  color: $greyGreen;
}

.social {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.social a {
  width: 20px;
  height: 20px;
}

.social svg {
  fill: $mainFontColor;
  width: 20px;
  height: 20px;
}

.social a.router-link-exact-active svg {
  fill: $greyGreen;
}
</style>

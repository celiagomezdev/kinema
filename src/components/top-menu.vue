<template lang="pug">
  div(class="top-menu-wrapper")
    div(class="logo")
      router-link(to="/") kinema
    div(class='user')
      router-link(to="/user")
        include @/assets/img/user.svg
</template>

<script>
export default {
  name: 'TopMenu'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '@/assets/style/main.scss';
@import url('https://fonts.googleapis.com/css?family=Capriola');

.top-menu-wrapper {
  padding: 15px 20px;
  background-color: $bgBodyDarkLighter;
  font-weight: bold;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.top-menu-wrapper a {
  color: $mainFontColor;
  text-decoration: none;
}

.top-menu-wrapper a.router-link-exact-active {
  color: $greyGreen;
}

.logo {
  font-family: 'Capriola', sans-serif;
  font-size: 30px;
  color: $lightGreen;
}

.nav-menu {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.user {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.user a {
  width: 25px;
  height: 25px;
}

.user svg {
  width: 25px;
  height: 25px;
}

.user a.router-link-exact-active svg {
  fill: $greyGreen;
}
</style>

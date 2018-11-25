<template lang="pug">
  div(class="booking")
    div(class="left")
    div(class="center")
      p This is the booking page
    div(class="right")
</template>

<script>

export default {
  name: 'Booking',
  components: {
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/main.scss';

.booking {
  padding: 20px 0;
  // display: grid;
  // grid-template-columns: 1fr auto 1fr;
  // grid-template-areas: "left center right";
}
</style>

<template>
  <div class="home">
    <SuperBanner></SuperBanner>
  </div>
</template>

<script>
import SuperBanner from '@cpts/Home/SuperBanner.vue'
export default {
  name: 'HomeView',
  components: {
    SuperBanner
  }
}
</script>

<style lang="scss" scoped>
$t: ".home";

#{$t} {
  // width: 1190px;
}
</style>

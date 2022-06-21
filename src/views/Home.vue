<template>
  <div class="home">
    <TopBar></TopBar>
    <SearchHome></SearchHome>
    <div class="temp">

    </div>
  </div>
</template>

<script>
import SearchHome from '@cpts/Home/Search.vue'
export default {
  name: 'HomeView',
  components: {
    SearchHome
  }
}
</script>

<style lang="scss" scoped>
$t: ".home";

#{$t} {
  width: 100%;
  background-color: #e8e2e0;
}
.temp{
  height: 1800px;
}
</style>

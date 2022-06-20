<template>
  <div id="shop">
    <TopBar></TopBar>
    <router-view></router-view>
  </div>
</template>

<script>
import TopBar from '@cmm/TopBar.vue'
export default {
  name: 'App',
  components: {
    TopBar
  }
}
</script>
<style lang="scss">
body #shop {
  font: 12px/1.5 tahoma, arial, "Hiragino Sans GB", "\5b8b\4f53", sans-serif;
}
.home-width {
  width: 1190px;
  min-width: 1190px;
}
img{
  width: 100%;
}
</style>

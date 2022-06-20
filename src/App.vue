<template>
  <div id="shop">
    <TopBar></TopBar>
    <router-view></router-view>
  </div>
</template>

<script>
import TopBar from '@/components/common/TopBar.vue'
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
</style>

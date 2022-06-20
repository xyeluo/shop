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

</style>

<template>
  <div id="shop">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {}
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
img {
  width: 100%;
}
@mixin hfl($h, $size, $lh: $h) {
  height: $h;
  font-size: $size;
  line-height: $lh;
}
</style>

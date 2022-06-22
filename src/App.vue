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
.enter-width{
  width: 1200px;
  min-width: 1200px;
}
img {
  width: 100%;
}
@mixin hfl($h, $size, $lh: $h) {
  height: $h;
  font-size: $size;
  line-height: $lh;
}
.radius12 {
  border-radius: 12px;
  overflow: hidden;
}
</style>

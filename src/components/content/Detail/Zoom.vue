<template>
  <div class="spec-preview">
    <img :src="currentImg" ref="img" />
    <div class="event" @mousemove="handler"></div>
    <div class="big">
      <img :src="currentImg" ref="big" />
    </div>
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
export default {
  name: 'ZoomDetail',
  data () {
    return {
      currentImg: ''
    }
  },
  props: {
    ImgSrc: {
      type: String,
      default: () => ''
    }
  },
  mounted () {
    this.currentImg = this.ImgSrc
    this.$bus.$on('getIndex', (src) => {
      this.currentImg = src
    })
  },
  methods: {
    handler (event) {
      const big = this.$refs.big
      const mask = this.$refs.mask
      let left = event.offsetX - mask.offsetWidth / 2
      let top = event.offsetY - mask.offsetHeight / 2
      if (left <= 0) left = 0
      if (left >= mask.offsetWidth) left = mask.offsetWidth
      if (top <= 0) top = 0
      if (top >= mask.offsetHeight) top = mask.offsetHeight
      mask.style.left = left + 'px'
      mask.style.top = top + 'px'
      big.style.left = -2 * left + 'px'
      big.style.top = -2 * top + 'px'
    }
  }
}
</script>

<style lang="scss" scoped>
.spec-preview {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;

  img {
    width: 100%;
    height: 100%;
  }

  .event {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 998;
    cursor: move;
  }

  .mask {
    width: 50%;
    height: 50%;
    background: url("@images/pic_0.png") repeat scroll 0 0 transparent;
    position: absolute;
    left: 0;
    top: 0;
    display: none;
  }

  .big {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -1px;
    left: 105%;
    // border: 1px solid #aaa;
    overflow: hidden;
    z-index: 998;
    display: none;
    background: white;

    img {
      width: 200%;
      max-width: 200%;
      height: 200%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .event:hover ~ .mask,
  .event:hover ~ .big {
    display: block;
  }
}
</style>

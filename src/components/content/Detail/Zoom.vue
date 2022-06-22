<template>
  <div class="spec-preview">
    <!-- 背景图 -->
    <img :src="currentImg" ref="img" />
    <!-- 绑事件的位置 -->
    <div class="event" @mousemove="handler"></div>
    <!-- 大图 -->
    <div class="big">
      <img :src="currentImg" ref="big" />
    </div>
    <!-- 蒙版 -->
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
  // 写props的时候带上默认值  因为ImgList传过来的时候可能是undefined 带上默认值可以确保不是undefined 不会假报错
  props: {
    ImgSrc: {
      type: String,
      default: () => ''
    }
  },
  mounted () {
    this.currentImg = this.ImgSrc
    // 全局事件总线：获取兄弟组件传递过来的图片地址
    this.$bus.$on('getIndex', (src) => {
      // 修改当前响应式数据
      this.currentImg = src
    })
  },
  methods: {
    handler (event) {
      const big = this.$refs.big
      const mask = this.$refs.mask
      let left = event.offsetX - mask.offsetWidth / 2
      let top = event.offsetY - mask.offsetHeight / 2
      // 约束范围
      if (left <= 0) left = 0
      if (left >= mask.offsetWidth) left = mask.offsetWidth
      if (top <= 0) top = 0
      if (top >= mask.offsetHeight) top = mask.offsetHeight
      // 修改元素的left|top属性值
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

<template>
  <div class="swiper-container" ref="cur">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(silde, index) in ImgList" :key="index">
        <img
          :src="silde"
          :class="{ active: currentIndex == index }"
          @mouseover="changeCurrentIndex(index)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name: 'ImageList',
  data () {
    return {
      currentIndex: 0,
      preview: ''
    }
  },
  props: {
    ImgList: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    ImgList () {
      this.$nextTick(() => {
        this.preview = new Swiper(this.$refs.cur, {
          // 如果需要前进后退按钮
          // 显示几个图片设置
          slidesPerView: 5,
          // 每一次切换图片个数
          slidesPerGroup: 1
        })
      })
    }
  },
  methods: {
    // 点击那张图片有背框颜色
    changeCurrentIndex (index) {
      this.currentIndex = index
      // 给zoom组件发索引值
      this.$bus.$emit('getIndex', this.ImgList[index])
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper-container {
  height: 56px;
  width: 412px;
  box-sizing: border-box;
  padding-right: 11px;
  .swiper-wrapper {
    justify-content: space-between;
  }
  .swiper-slide {
    width: 56px;
    height: 56px;

    img {
      width: 100%;
      height: 100%;
      border: 1px solid #ccc;
      padding: 2px;
      width: 50px;
      height: 50px;
      display: block;

      &.active {
        border: 2px solid #f60;
        padding: 1px;
      }
    }
  }
}
</style>

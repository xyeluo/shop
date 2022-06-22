<template>
  <div class="detail">
    <TopBar :isHome="isHome"></TopBar>
    <SearchHome :isHome="isHome"></SearchHome>
    <div class="tb-item-info home-width com-margin-center com-flex">
      <p class="mask com-absolute com-mouse-point">举报</p>
      <!-- 左侧放大镜区域 -->
      <div class="previewWrap">
        <!--放大镜效果-->
        <Zoom :ImgSrc="info.img" />
        <!-- 小图列表 -->
        <ImgList :ImgList="info.detail"/>
      </div>
      <InfoDetail :info="info"></InfoDetail>
    </div>
  </div>
</template>

<script>
import Zoom from '@cpts/Detail/Zoom.vue'
import ImgList from '@cpts/Detail/ImgList.vue'
import InfoDetail from '@cpts/Detail/InfoDetail.vue'
export default {
  name: 'DetailPrd',
  data () {
    return {
      isHome: false,
      skuId: undefined,
      skuNum: 1
    }
  },
  props: {
    info: {
      type: Object,
      default: () => {}
    }
  },
  mounted () {
    document.title = this.info.content
  },
  components: {
    Zoom,
    ImgList,
    InfoDetail
  }
}
</script>

<style lang="scss" scoped>
.tb-item-info {
  padding: 20px;
  position: relative;
  box-sizing: border-box;
  border: 1px solid #e8e8e8;
  justify-content: space-between;
}
.mask{
  z-index: 10;
  top: -8px;
  right: 15px;
  width: 30px;
  height: 21px;
  text-align: center;
  background-color: #fff;

}
</style>

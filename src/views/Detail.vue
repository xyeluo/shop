<template>
  <div class="detail">
    <TopBar :isHome="isHome"></TopBar>
    <SearchHome :isHome="isHome"></SearchHome>
    <div class="tb-item-info home-width com-margin-center com-flex">
      <!-- 左侧放大镜区域 -->
      <div class="previewWrap">
        <!--放大镜效果-->
        <Zoom :ImgSrc="skuInfo.img" />
        <!-- 小图列表 -->
        <ImgList :ImgList="skuInfo.detail"/>
      </div>
      <InfoDetail :skuInfo="skuInfo"></InfoDetail>
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
      skuNum: 1,
      skuInfo: {
        ishot: false,
        img: '/shopImgs/pic_001.jpeg',
        content: '正品耐克Nike Air Force 1定制空军一号De Lo Mio鸳鸯男女板鞋',
        price: '899',
        detail: [
          '/shopImgs/pic_001.jpeg',
          '/shopImgs/pic_014.jpeg',
          '/shopImgs/pic_015.jpeg',
          '/shopImgs/pic_016.jpeg',
          '/shopImgs/pic_017.jpeg'
        ]
      }
    }
  },
  // props: {
  //   skuInfo: {
  //     type: Object,
  //     default: () => {
  //       return {};
  //     },
  //   },
  // },

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
  box-sizing: border-box;
  border: 1px solid #e8e8e8;
  justify-content: space-between;
}
</style>

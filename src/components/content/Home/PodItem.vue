<template>
  <div class="poditem radius12">
    <a href="javascript:void(0);" class="com-flex">
      <div class="podImg"><img v-lazy="info.img" /></div>
      <div class="podInfo">
        <div class="title">
          <div class="msg">
            <img src="@images/pic_021.png" v-if="info.ishot" />
            {{ info.content }}
          </div>
        </div>
        <div class="price" v-if="info.price">
          <em>&yen;</em>
          {{ info.price }}
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'PodItem',
  props: {
    info: {
      type: Object,
      default: () => {
        return { content: '未传参' }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin wh($w, $h: $w) {
  width: $w;
  height: $h;
}
.poditem {
  height: 174px;
  background-color: #f7f9fa;
  border: 1px solid #f7f9fa;
  transition: all 0.5s;
  box-sizing: border-box;
  &:hover {
    border-color: #ff915e;
  }
  a {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 11px;
    &.com-flex {
      justify-content: space-between;
    }
  }
  .podImg {
    @include wh(150px);
    border-radius: 10px;
    overflow: hidden;
  }
  .podInfo {
    .title {
      img {
        width: auto;
        height: 16px;
      }
      .msg {
        max-height: 46px;
        padding-left: 5px;
        overflow: hidden;
        &:hover {
          color: #ff5000;
        }
      }
      line-height: 23px;
      font-size: 16px;
      @include wh(186px, 116px);
    }
    .price {
      color: #ff5000;
      font-size: 22px;
      line-height: 22px;
      font-family: 'Microsoft Yahei';
    }
  }
}
</style>

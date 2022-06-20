<template>
  <div class="super">
    <div class="super-inner home-width com-margin-center com-flex-center">
      <a href="" class="tmall-logo">
        <img src="@images/pic_001.png" alt="天猫" />
      </a>
      <div class="super-list com-flex">
        <a
          :href="item.href"
          class="item"
          v-for="(item, index) in superList"
          :key="index"
        >
          <div class="desc-wrap com-absolute">
            <h4 class="title">{{ item.title }}</h4>
            <p class="subtitle">{{ item.subtitle }}</p>
          </div>
          <div class="img-out com-absolute">
            <img :src="item.imgOut" :alt="item.title" />
          </div>
          <div class="img-bg com-absolute">
            <img :src="item.imgBg" alt="" />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SuperBanner',
  data () {
    return {
      superList: [
        {
          href: '',
          title: '粮食素食',
          subtitle: '1元抢大额券',
          imgOut: require('@/assets/images/pic_002.jpeg'),
          imgBg: require('@images/pic_012.png')
        },
        {
          href: '',
          title: '运动户外',
          subtitle: '满400减80',
          imgOut: require('@/assets/images/pic_003.jpeg'),
          imgBg: require('@images/pic_013.png')
        },
        {
          href: '',
          title: '运动户外',
          subtitle: '满400减80',
          imgOut: require('@/assets/images/pic_004.jpeg'),
          imgBg: require('@images/pic_014.png')
        },
        {
          href: '',
          title: '运动户外',
          subtitle: '满400减80',
          imgOut: require('@/assets/images/pic_005.jpeg'),
          imgBg: require('@images/pic_015.png')
        },
        {
          href: '',
          title: '运动户外',
          subtitle: '满400减80',
          imgOut: require('@/assets/images/pic_006.jpeg'),
          imgBg: require('@images/pic_016.png')
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
$t: ".super";
// 宽高相同
@mixin wh($wh) {
  width: $wh;
  height: $wh;
}

.tmall-logo {
  $wh: 80px;
  @include wh($wh);
  padding: 10px 10px 10px 15px;
  img {
    width: 100%;
    height: $wh;
  }
}

#{$t} {
  background-color: #f83c3d;
  position: relative;
  #{$t}-inner {
    overflow: hidden;
    height: 100px;
    .item {
      width: 209px;
      height: 75px;
      margin-right: 10px;
      position: relative;
      .desc-wrap,
      .img-out {
        z-index: 2;
        top: 12px;
      }
      .desc-wrap {
        left: 20px;
        color: #fff;
        @mixin tit-sub($h, $size, $lh: $h) {
          height: $h;
          font-size: $size;
          line-height: $lh;
        }
        .title {
          @include tit-sub(28px, 20px);
        }
        .subtitle {
          @include tit-sub(16px, 14px, 14px);
        }
      }
      .img-out {
        @include wh(52px);
        right: 14px;
      }
      .img-bg {
        top: 0;
        left: 0;
      }
    }
  }
}
</style>

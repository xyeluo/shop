<template>
  <div class="main">
    <div class="tbh-nav radius12">
      <ul class="com-flex">
        <li :class="item.class" v-for="(item, index) in services" :key="index">
          <a :href="item.href">{{ item.msg }}</a
          ><span>|</span>
        </li>
      </ul>
    </div>
    <div class="main-inner com-flex">
      <div
        class="banner radius12"
        @mouseenter="bannerSw.autoplay.stop()"
        @mouseleave="bannerSw.autoplay.start()"
      >
        <div class="ba">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(item, index) in bannerImgs"
              :key="index"
            >
              <!-- <img src="../assets/logo.png" alt=""> -->
              <img :src="item" alt />
            </div>
          </div>
        </div>
        <!-- 分页器 -->
        <div class="banner-pagination"></div>
        <!-- 上一个、下一个 -->
        <div class="banner-prev">&lt;</div>
        <div class="banner-next">&gt;</div>
      </div>

      <div class="usercontent">
        <div class="member-bd">
          <div class="avatar">
            <img src="@images/pic_012.jpeg" />
          </div>
          <div class="member-nickurl">
            Hi!<span v-if="currentUser" style="font-weight: 700">{{
              currentUser
            }}</span
            ><span v-else>你好</span>
          </div>
        </div>
        <div class="member-ft com-flex" v-if="currentUser">
          <a href="javascript:void(0);" class="shop"
            >您购物车商品数量为<span v-if="shopItems.length">{{
              shopItems.length
            }}</span>
            <span v-else>0</span></a
          >
        </div>
        <div class="member-ft com-flex" v-else>
          <router-link :to="{ name: 'enter' }" class="btn-login"
            >登录</router-link
          >
          <router-link :to="{ name: 'notelogin' }" class="btn-register"
            >注册</router-link
          >
          <a
            href="//ishop.taobao.com/openshop/tb_open_shop_landing.htm?accessCode=tbopenshop_personal"
            class="btn-open ml3"
            >开店</a
          >
        </div>
        <div class="user-taobao com-flex">
          <div class="user-content">
            <span class="iconfont icon-shoucang"></span>
            <span>宝贝收藏</span>
          </div>
          <div class="user-content">
            <span class="iconfont icon-shoutibao"></span>
            <span>买过的店</span>
          </div>
          <div class="user-content">
            <span class="iconfont icon-dianpu"></span>
            <span>收藏的店</span>
          </div>
          <div class="user-content">
            <span class="iconfont icon-lishijilu_o"></span>
            <span>我的足迹</span>
          </div>
        </div>
        <div class="tips">
          <div
            class="tipsSw"
            @mouseenter="tipsSw.autoplay.stop()"
            @mouseleave="tipsSw.autoplay.start()"
          >
            <ul class="swiper-wrapper">
              <li
                class="swiper-slide"
                v-for="(item, index) in tips"
                :key="index"
              >
                <span>{{ item.title }}</span
                >{{ item.msg }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getMainService } from '@/request/index.js'
// import Swiper from 'swiper'
import Swiper from 'swiper/swiper-bundle.min.js'
import 'swiper/swiper-bundle.css'
import { mapState } from 'vuex'
export default {
  name: 'MainService',
  data () {
    return {
      services: [],
      bannerImgs: [
        require('@images/pic_008.jpeg'),
        require('@images/pic_009.jpeg'),
        require('@images/pic_032.jpg'),
        require('@images/pic_010.jpeg'),
        require('@images/pic_011.jpeg')
      ],
      bannerSw: '',
      tipsSw: '',
      userContents: [],
      tips: []
    }
  },
  computed: {
    ...mapState(['currentUser', 'shopItems'])
  },
  created () {
    getMainService().then(({ services, userContents, tips }) => {
      this.services = services
      this.userContents = userContents
      this.tips = tips
    })
  },
  mounted () {
    // 广告轮播图
    this.bannerSw = new Swiper('.ba', {
      autoplay: {
        delay: 3500 // 3秒切换一次
      }, // 可选选项，自动滑动
      loop: true,
      navigation: {
        nextEl: '.banner-next',
        prevEl: '.banner-prev'
      },
      grabCursor: true,
      pagination: {
        // 指示点
        el: '.banner-pagination',
        clickable: true // 为true时点击指示点会切换slide
      }
    })
    // 热点轮播图
    this.tipsSw = new Swiper('.tipsSw', {
      autoplay: {
        delay: 4000
      },
      loop: true,
      observer: true, // 修改swiper自己或子元素时，自动初始化swiper
      observeParents: true // 修改swiper的父元素时，自动初始化swiper
    })
  }
}
</script>

<style lang="scss" scoped>
.main {
  .tbh-nav {
    height: 42px;
    position: relative;
    color: #000;
    width: 856px;
    background-color: #f7f9fa;
    text-align: center;
    line-height: 42px;
    li {
      flex: 1;
      position: relative;
      color: #333;
      font-size: 16px;
      span {
        position: absolute;
        right: 0;
        color: #e0e0e0;
      }
    }
    .red,
    .lightgreen {
      font-weight: 700;
      span {
        font-weight: 400;
      }
    }
    .red {
      color: #ff0036;
    }
    .lightgreen {
      color: #33c900;
    }
    .spannone {
      span {
        display: none;
      }
    }
  }
  .main-inner {
    margin-top: 10px;
    justify-content: space-between;
    .banner {
      position: relative;
      width: 564px;
      img {
        height: 331px;
      }
    }
    .banner-prev,
    .banner-next,
    .banner-pagination {
      position: absolute;
      z-index: 10;
    }
    .banner-prev,
    .banner-next {
      top: 50%;
      transform: translateY(-50%);
      height: 30px;
      width: 20px;
      line-height: 30px;
      background: red;
      color: #fff;
      font-size: 16px;
      background: rgba($color: #000, $alpha: 0.5);
      cursor: default;
      display: none;
      user-select: none;
    }
    .banner-prev {
      text-indent: 2px;
      left: 0;
      border-radius: 0 15px 15px 0;
    }
    .banner-next {
      text-indent: 6px;
      right: 0;
      border-radius: 15px 0 0 15px;
    }
    .banner:hover {
      .banner-prev,
      .banner-next {
        display: inline-block;
      }
    }
  }
}
.usercontent {
  flex: 1;
  margin-right: -24px;
  .member-bd {
    .avatar {
      display: block;
      margin: 32px auto 0;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      overflow: hidden;
    }
    .member-nickurl {
      margin-top: 22px;
      text-align: center;
      font-size: 16px;
      span {
        margin-left: 4px;
      }
    }
  }
  .member-ft {
    margin-top: 25px;
    justify-content: space-around;
    padding: 0 20px;
    a {
      width: 80px;
      height: 42px;
      line-height: 42px;
      font-size: 16px;
      font-weight: 700;
      color: #fff;
      border-radius: 21px;
      text-align: center;
    }
    .btn-login {
      background-image: linear-gradient(to right, #ff5000 0, #ff6000 100%);
    }
    .btn-register {
      background-image: linear-gradient(to right, #ff9000 0, #ff7000 100%);
    }
    .btn-open {
      color: #ff5000;
      border: 1px solid #ff915e;
    }
    .shop {
      color: #000;
      flex: 1;
      text-align: left;
    }
  }
  .user-taobao {
    overflow: hidden;
    position: relative;
    margin: 24px 12px 0;
    justify-content: space-around;
    text-align: center;
    .user-content {
      cursor: pointer;
      span {
        display: block;
      }
      .iconfont {
        font-size: 24px;
      }
      &:hover {
        color: #f40;
      }
    }
  }
  .tips {
    width: 265px;
    overflow: hidden;
    position: relative;
    margin: 10px 25px 0;
    li {
      cursor: default;
      span {
        width: 32px;
        height: 18px;
        text-align: center;
        line-height: 18px;
        background-color: #ffefef;
        border-radius: 2px;
        color: #ff5000;
        font-size: 12px;
        margin-right: 4px;
      }
    }
  }
}
</style>
<style lang="scss">
.banner-pagination {
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba($color: #fff, $alpha: 0.3);
  border-radius: 10px;
  line-height: 18px;
  .swiper-pagination-bullet {
    margin: 3px 4px 0;
    background-color: #fff;
    opacity: 1;
  }
  .swiper-pagination-bullet-active {
    background-color: #ff5000;
  }
}
</style>

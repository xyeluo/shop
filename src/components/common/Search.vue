<template>
  <div class="search" :class="{ 'wrap-fixed': isTop }" ref="search">
    <div class="top com-flex">
      <div class="home-width com-margin-center com-flex position">
        <div class="tbh-logo">
          <div class="logo">
            <h1>
              <router-link :to="{ name: 'home' }" class="logo-bd">淘宝网</router-link>
            </h1>
            <h2>
              <router-link :to="{ name: 'home' }">淘宝网</router-link>
            </h2>
          </div>
        </div>
        <div class="tbh-search">
          <div class="search-bd com-flex">
            <div class="search-suggest-tabs com-mouse-point">
              <span>宝贝</span>
              <span class="iconfont icon-xialajiantou"></span>
              <i class="slicer"></i>
              <ul class="tb-menu com-absolute">
                <li>天猫</li>
                <li>店铺</li>
              </ul>
            </div>
            <form class="search-suggest" action="https://s.taobao.com/search">
              <input type="text" autofocus autocomplete="off" name="q" v-model="search" @input="getSearch" @keydown.down="downNo" @keydown.up="upNo" @blur="deleteKeyWords" />
              <button class="com-absolute">搜索</button>
              <ul class="keywords-list com-absolute">
                <li v-for="(item, index) in keywords" :key="index">
                  <a :href="`https://s.taobao.com/search?q=${item[0]}`" :class="{ 'current-a': index === No }">{{ item[0] }}</a>
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div class="tbh-qr-wrapper com-absolute" v-show="isHome">
          <a href="https://market.m.taobao.com/app/fdilab/download-page/main/index.html" class="qr-bd">
            <span id="mtb" class="h">下载淘宝</span>
            <img class="qrcode" src="@images/pic_002.png" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { jsonp } from 'vue-jsonp'
export default {
  name: 'SearchHome',
  props: {
    isHome: {
      type: Boolean,
      default: () => true
    }
  },
  data () {
    return {
      isTop: false,
      offsetTo: '',
      search: '',
      keywords: [],
      No: -1
    }
  },
  methods: {
    async getSearch () {
      try {
        const res = await jsonp('https://suggest.taobao.com/sug', {
          q: this.search,
          code: 'utf-8',
          output: 'jsonp'
        })
        this.keywords = res.result
      } catch (error) {}
    },
    handleTabFix () {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      scrollTop > this.offsetTo ? (this.isTop = true) : (this.isTop = false)
    },
    downNo () {
      this.No++
      if (this.No > this.keywords.length - 1) {
        this.No = 0
      }
      this.search = this.keywords[this.No][0]
    },
    upNo () {
      this.No--
      if (this.No < 0) {
        this.No = this.keywords.length - 1
      }
      this.search = this.keywords[this.No][0]
    },
    deleteKeyWords () {
      this.keywords.splice(0, this.keywords.length)
    }
  },
  // 监听页面滚动
  mounted () {
    this.offsetTo = this.$refs.search.offsetTop
    window.addEventListener('scroll', this.handleTabFix, true)
  },
  // 离开当前组件前清除滚动监听,
  beforeRouteLeave (to, from, next) {
    window.removeEventListener('scroll', this.handleTabFix, true)
    next()
  }
}
</script>

<style lang="scss" scoped>
@mixin hfl($h, $size, $lh: $h) {
  height: $h;
  font-size: $size;
  line-height: $lh;
}
@mixin wh($w, $h: $w) {
  width: $w;
  height: $h;
}
.slicer {
  display: inline-block;
  position: absolute;
  top: 8px;
  left: 74px;
  width: 1px;
  height: 24px;
  background: #f3f0f0;
}
.search {
  width: 100%;
  .top {
    padding-top: 24px;
    height: 97px;
  }
}
.position {
  position: relative;
}
.logo {
  @include wh(190px, 80px);
  float: left;
  margin-top: 8px;
  padding-left: 32px;
  h1 {
    position: relative;
    .logo-bd {
      display: block;
      margin-left: 22px;
      padding-top: 58px;
      @include wh(142px, 0);
      overflow: hidden;
      text-indent: -9999px;
      background: url('@images/pic_018.png') 0 0 no-repeat;
    }
  }
  h2 {
    display: none;
    a {
      display: block;
      padding-top: 33px;
      @include wh(80px, 0);
      text-indent: -9999px;
      overflow: hidden;
      background: url('@images/pic_019.png') 0 0 no-repeat;
    }
  }
}
.tbh-search {
  width: 738px;
  margin-top: 12px;
  .search-bd {
    $lh: 38px;
    height: $lh;
    border: 2px solid #ff5000;
    border-radius: 100px;
    background-color: #fff;
    position: relative;
    .search-suggest-tabs {
      position: relative;
      width: 65px;
      text-align: center;
      @include hfl($lh, 14px);
      color: #333;
      padding-left: 10px;
      .icon-xialajiantou {
        padding: 4px 3px 3px;
      }
      .tb-menu {
        width: 100%;
        // top: 3px;
        bottom: -80px;
        background: #fff;
        display: none;
        z-index: 10;
        li:hover {
          color: #ff5000;
        }
      }
      &:hover .tb-menu {
        display: block;
      }
    }
    .search-suggest {
      line-height: $lh;
      $input-h: 20px;
      // position: relative;
      input {
        @include wh(580px, $input-h);
        padding: 9px 0;
        color: #000;
        font-size: 14px;
        text-indent: 10px;
        background-color: #fff;
        border: 0;
        outline: none;
        font-weight: 500;
      }
      button {
        @include wh(72px, 34px);
        border-radius: 20px;
        background-image: linear-gradient(to right, #ff9000 0, #ff5000 100%);
        color: #fff;
        border: 0;
        font-size: 18px;
        top: 2px;
        right: 3px;
      }
      .keywords-list {
        z-index: 20;
        border: 1px solid #bebebe;
        margin-top: 5px;
        border-radius: 5px;
        overflow: hidden;
        // top: 0;
        a {
          display: block;
          text-indent: 20px;
          @include wh(580px, $input-h + 10);
          line-height: $input-h + 10;
          background-color: #fff;
        }
        .current-a,
        a:hover {
          background-color: #f1f1f1;
        }
      }
    }
  }
}
.tbh-qr-wrapper {
  right: 58px;
  top: -10px;
  .qr-bd {
    // position: relative;
    cursor: pointer;
    display: inline-block;
    text-align: center;
    width: 74px;
    height: 88px;
    color: #666;
    border: 1px solid #eee;
    background-color: #fff;
    .h {
      line-height: 20px;
      margin: 4px auto 0;
      width: 78px;
      color: #ff5000;
    }
    img {
      display: block;
      margin-left: 6px;
      width: 62px;
      height: 62px;
    }
  }
}
.wrap-fixed {
  .top {
    z-index: 1001;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 40px;
    padding: 7px 0;
    background: #fff;
  }
  h1 {
    display: none;
  }
  h2 {
    display: inline-block;
  }
  .tbh-qr-wrapper {
    display: none;
  }
  .tbh-search {
    margin-top: 0;
  }
}
</style>

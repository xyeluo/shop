<template>
  <div class="topbar">
    <div class="topbar-bd com-margin-center com-flex">
      <ul class="com-flex-center com-mouse-point">
        <li class="topbar-bd-change">
          <div class="topbar-bd-hd">
            <span>中国大陆</span>
            <span class="iconfont icon-xialajiantou"></span>
          </div>
          <div class="topbar-bd-menu com-absolute">
            <ul class="com-overflow-scroll">
              <li v-for="(item, index) in menus.address" :key="index">
                {{ item }}
              </li>
            </ul>
          </div>
        </li>
        <li class="topbar-color-change">
          <router-link :to="{ name: 'enter' }" class="color"
            >亲，请登录</router-link
          >
          <router-link :to="{ name: 'enter' }">免费注册</router-link>
        </li>
        <li class="topbar-color-change"><a href="">手机逛淘宝</a></li>
        <li class="topbar-color-change"><a href="">网页无障碍</a></li>
      </ul>
      <ul class="right com-flex-center com-mouse-point">
        <li class="topbar-color-change" v-show="!isHome">
          <div class="taopbar-bd-hd">
            <router-link tag="span" :to="{ name: 'home' }"
              >淘宝网首页</router-link
            >
          </div>
        </li>
        <li class="topbar-bd-change">
          <div class="topbar-bd-hd">
            <span>我的淘宝</span>
            <span class="iconfont icon-xialajiantou"></span>
          </div>
          <div class="topbar-bd-menu com-absolute">
            <ul>
              <li v-for="(item, index) in menus.mytaobao" :key="index">
                {{ item }}
              </li>
            </ul>
          </div>
        </li>
        <li class="topbar-color-change">
          <a href=""
            ><span class="iconfont icon-gouwuche-tianchong color"></span
            >购物车</a
          >
        </li>
        <li class="topbar-bd-change">
          <div class="topbar-bd-hd">
            <span class="iconfont icon-shoucang1"></span>
            <span>收藏夹</span>
            <span class="iconfont icon-xialajiantou"></span>
          </div>
          <div class="topbar-bd-menu com-absolute">
            <ul>
              <li v-for="(item, index) in menus.favorite" :key="index">
                {{ item }}
              </li>
            </ul>
          </div>
        </li>
        <li class="topbar-color-change">
          <a href="">商品分类</a><a href="">免费开店</a
          ><span class="slicer">|</span>
        </li>
        <li class="topbar-bd-change">
          <div class="topbar-bd-hd">
            <span>千牛卖家中心</span>
            <span class="iconfont icon-xialajiantou"></span>
          </div>
          <div class="topbar-bd-menu com-absolute">
            <ul>
              <li v-for="(item, index) in menus.qianNiuMaiJia" :key="index">
                {{ item }}
              </li>
            </ul>
          </div>
        </li>
        <li class="topbar-bd-change">
          <div class="topbar-bd-hd">
            <span>联系客服</span>
            <span class="iconfont icon-xialajiantou"></span>
          </div>
          <div class="topbar-bd-menu com-absolute">
            <ul>
              <li v-for="(item, index) in menus.contactServe" :key="index">
                {{ item }}
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getTopBar } from '@/request/index.js'
export default {
  name: 'TopBar',
  data () {
    return {
      menus: {}
    }
  },
  created () {
    getTopBar().then((res) => {
      this.menus = res
    })
  },
  props: {
    isHome: {
      type: Boolean,
      default: () => true
    }
  }
}
</script>

<style lang="scss" scoped>
$t: ".topbar";
@mixin topbar($type) {
  @if ($type==bd) {
    border: 1px solid #eee;
  } @else if($type==mr) {
    margin-right: 7px;
  }
}
#{$t} {
  width: 100%;
  background-color: #f5f5f5;
  .slicer {
    padding: 0 5px;
  }
  #{$t}-bd {
    $height: 35px; //li高度
    @include topbar(bd);
    width: 1190px;
    height: $height;
    justify-content: space-between;
    li {
      padding: 0 6px;
      line-height: $height;
      font-size: 12px;
      position: relative;
      text-align: center;
      #{$t}-bd-hd span:first-child {
        @include topbar(mr);
      }
    }
    // 导航栏悬浮改变字体颜色
    #{$t}-color-change {
      a {
        display: inline-block;
        @include topbar(mr);
        color: #6c6c6c;
        &:hover {
          color: #f22e00;
        }
      }
    }
    // 导航栏悬浮改变背景颜色
    #{$t}-bd-change {
      // 二级菜单
      #{$t}-bd-menu {
        left: 0;
        display: none;
        z-index: 10;
        background-color: #fff;
        ul {
          padding: 8px 0;
          max-height: 270px;
          @include topbar(bd);
          li {
            width: 249px;
            height: $height - 6;
            line-height: $height - 6;
            padding: 0 0 0 8px;
            text-align: left;
            &:hover {
              background-color: #f4f4f4;
            }
          }
        }
      }
      &:hover {
        background-color: #fff;
        #{$t}-bd-menu {
          display: block;
        }
      }
    }
    // 左右导航栏个别样式设置
    .color {
      color: #f22e00 !important;
    }
    .right #{$t}-bd-change {
      #{$t}-bd-menu ul li {
        width: auto;
        text-align: center;
        @extend .slicer;
        white-space: nowrap;
        color: #6c6c6c;
      }
      .icon-shoucang1 {
        color: #9c9c9c;
      }
      &:hover,
      &:hover .icon-shoucang1 {
        color: #f22e00;
      }
    }
  }
}
// 字体图标
.icon-shoucang1,
.icon-gouwuche-tianchong {
  margin-right: 5px !important;
  // color: #ff4400;
}
</style>

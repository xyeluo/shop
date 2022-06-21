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
    <div class="main-inner"></div>
  </div>
</template>

<script>
import { getMainService } from '@/request/index.js'
export default {
  name: 'MainService',
  data () {
    return {
      services: []
    }
  },
  created () {
    getMainService().then((res) => {
      this.services = res
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
}
</style>

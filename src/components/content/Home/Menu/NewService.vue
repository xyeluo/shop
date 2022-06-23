<template>
  <div class="new-service radius12">
    <h2>分类</h2>
    <ul class="service-bd">
      <li
        class="com-mouse-point"
        v-for="(item, index) in services"
        :key="index"
      >
        <i class="iconfont" :class="item.class"></i>
        <a :href="item.first.href">{{ item.first.msg }}</a
        ><span class="service-slash">/</span>
        <a :href="item.second.href">{{ item.second.msg }}</a
        ><span class="service-slash">/</span>
        <a href="item.third.href">{{ item.third.msg }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { getNewService } from '@/request/index.js'
export default {
  name: 'NewService',
  data () {
    return {
      services: []
    }
  },
  created () {
    getNewService().then((res) => {
      this.services = res
    })
  }
}
</script>

<style lang="scss" scoped>
.new-service {
  font-size: 14px;
  background-color: #f7f9fa;
  width: 270px;
  h2 {
    padding: 16px 0 0 20px;
    font-size: 18px;
    color: #111;
    letter-spacing: 0;
    line-height: 24px;
  }
  .service-bd {
    padding: 16px 0 8px 20px;
  }
  li {
    overflow: hidden;
    line-height: 20px;
    height: 20px;
    position: relative;
    font-weight: 400;
    margin-bottom: 18px;
    width: 212px;
    color: #666;
    i {
      margin-right: 12px;
      font-size: 16px;
    }
    &:hover {
      color: #ff5000;
    }
    a:hover {
      text-decoration: underline;
    }
  }
  .service-slash {
    overflow: hidden;
    width: 7px;
    padding: 0 8px;
  }
}
</style>

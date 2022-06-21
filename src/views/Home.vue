<template>
  <div class="home">
    <TopBar></TopBar>
    <SearchHome></SearchHome>

    <div class="home-content home-width com-margin-center">
      <ul class="search-hot com-absolute-center-x com-flex">
        <li v-for="(item, index) in searchHot" :key="index">{{ item }}</li>
      </ul>
      <div class="menu com-flex">
        <NewService></NewService>
        <MainService></MainService>
      </div>
      <div class="layer">
        <div class="recommend">
          <div class="recommend-heade">
            <h3>
              <span>猜你喜欢</span><img src="@images/pic_020.png" alt="" />
            </h3>
          </div>
          <div class="recommend-content">
            <PodItem
              v-for="(item, index) in prodInfo"
              :key="index"
              :info="item"
            ></PodItem>
          </div>
        </div>
      </div>
    </div>
    <SideBar></SideBar>
  </div>
</template>

<script>
import SearchHome from '@cpts/Home/Search.vue'
import NewService from '@cpts/Home/Menu/NewService.vue'
import MainService from '@cpts/Home/Menu/MainService.vue'
import PodItem from '@cpts/Home/PodItem.vue'
import SideBar from '@cpts/Home/SideBar.vue'

import { getProdInfo } from '@/request/index.js'

export default {
  name: 'HomeView',
  data () {
    return {
      searchHot: ['新款连衣裙', '四件套', '潮流T恤', '时尚女鞋'],
      prodInfo: []
    }
  },
  components: {
    SearchHome,
    NewService,
    MainService,
    PodItem,
    SideBar
  },
  created () {
    getProdInfo().then((res) => {
      this.prodInfo = res
    })
  }
}
</script>

<style lang="scss" scoped>
$t: ".home";

#{$t} {
  width: 100%;
  background-color: #e8e2e0;
  #{$t}-content {
    background: #fff;
    border-radius: 18px 18px 0 0;
    position: relative;
    box-sizing: border-box;
    padding: 24px;
  }
}
.search-hot {
  top: -30px;
  transform: translateX(-145%);
  li {
    width: 60px;
    height: 40px;
    text-align: center;
    white-space: nowrap;
    color: #666;
  }
}
.menu {
  justify-content: space-between;
}
.layer {
  margin-top: 50px;
  min-height: 150px;
  .recommend-heade {
    margin-bottom: 20px;
    span {
      color: #111;
      vertical-align: middle;
      font-size: 24px;
    }
    img {
      width: auto;
      height: 20px;
    }
  }
  .recommend-content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 13px;
    grid-row-gap: 16px;
  }
}
</style>

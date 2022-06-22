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
      <div class="layer" ref="layer">
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
              @click.native="goToDetail(item)"
            ></PodItem>
          </div>
        </div>
      </div>
    </div>
    <SideBar :backTop="showBT"></SideBar>
  </div>
</template>

<script>
import NewService from '@cpts/Home/Menu/NewService.vue'
import MainService from '@cpts/Home/Menu/MainService.vue'
import PodItem from '@cpts/Home/PodItem.vue'
import SideBar from '@cpts/Home/SideBar.vue'

import { getProdInfo } from '@/request/index.js'
import { mapMutations } from 'vuex'
export default {
  name: 'HomeView',
  data () {
    return {
      isHome: true,
      searchHot: [
        '新款连衣裙',
        '四件套',
        '潮流T恤',
        '时尚女鞋',
        '短裤',
        '半身裙',
        '男士外套',
        '墙纸',
        '行车记录仪',
        '新款男鞋'
      ],
      prodInfo: [],
      offsetTo: '',
      showBT: false
    }
  },
  methods: {
    ...mapMutations(['setCurrent']),
    showBackTop () {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      scrollTop > this.offsetTo ? (this.showBT = true) : (this.showBT = false)
    },
    goToDetail (info) {
      this.setCurrent(info)
      this.$router.push({
        name: 'detail'
      })
    }
  },
  components: {
    NewService,
    MainService,
    PodItem,
    SideBar
  },
  created () {
    getProdInfo().then((res) => {
      this.prodInfo = res
    })
  },
  // 监听页面滚动
  mounted () {
    this.offsetTo = this.$refs.layer.offsetTop
    window.addEventListener('scroll', this.showBackTop, true)
  },
  // 离开当前组件前清除滚动监听,
  beforeRouteLeave (to, from, next) {
    window.removeEventListener('scroll', this.showBackTop, true)
    next()
  }
}
</script>

<style lang="scss" scoped>
$t: ".home";

#{$t} {
  width: 100%;
  background-color: #e8e2e0;
  overflow: hidden;
  #{$t}-content {
    background: #fff;
    border-radius: 18px;
    position: relative;
    box-sizing: border-box;
    padding: 24px;
    margin-bottom: 20px;
  }
}
.search-hot {
  top: -30px;
  transform: translateX(-60%);
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

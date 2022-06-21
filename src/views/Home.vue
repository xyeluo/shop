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
    </div>
  </div>
</template>

<script>
import SearchHome from '@cpts/Home/Search.vue'
import NewService from '@cpts/Home/Menu/NewService.vue'
import MainService from '@cpts/Home/Menu/MainService.vue'
export default {
  name: 'HomeView',
  data () {
    return {
      searchHot: ['新款连衣裙', '四件套', '潮流T恤', '时尚女鞋']
    }
  },
  components: {
    SearchHome,
    NewService,
    MainService
  }
}
</script>

<style lang="scss" scoped>
$t: ".home";

#{$t} {
  width: 100%;
  background-color: #e8e2e0;

  #{$t}-content {
    height: 1800px;
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
.menu{
  justify-content: space-between;
}
.temp {
  height: 1800px;
}
</style>

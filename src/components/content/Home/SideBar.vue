<template>
  <div class="sidebar com-flex">
    <div class="item-entry" v-for="(item, index) in sidebar" :key="index">
      <div class="im-top"><img :src="item.img" :alt="item.msg" /></div>
      <div class="im-buttom">{{ item.msg }}</div>
    </div>
    <div class="item-entry" v-show="backTop" @click="toTop">
      <div class="im-top"><img src="@images/pic_026.png" alt="回顶部" /></div>
      <div class="im-buttom">回顶部</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  props: {
    backTop: {
      type: Boolean,
      default: () => false
    },
    sidebar: {
      type: Array,
      default: () => [
        { img: require('@images/pic_022.png'), msg: '消息' },
        { img: require('@images/pic_023.png'), msg: '官方客服' },
        { img: require('@images/pic_024.png'), msg: '反馈' },
        { img: require('@images/pic_025.png'), msg: '举报' }
      ]
    }
  },
  methods: {
    toTop () {
      const timer = setInterval(() => {
        document.documentElement.scrollTop -= 50
        if (document.documentElement.scrollTop <= 0) {
          clearInterval(timer)
        }
      }, 20)
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin wh($w, $h: $w) {
  width: $w;
  height: $h;
}
.sidebar {
  .item-entry {
    cursor: pointer;
    width: 60px;
    .im-top {
      img {
        @include wh(24px, 22px);
      }
    }
    .im-buttom {
      font-size: 12px;
      color: #333;
      line-height: 17px;
    }
    margin: 10px 0;
    justify-content: space-around;
    box-sizing: border-box;
    line-height: 30px;
  }
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background-color: #fff;
  flex-direction: column;
  text-align: center;
  padding: 15px 0;
  border-radius: 18px 0 0 18px;
  box-shadow: -3px 0 30px 3px rgb(0 0 0 / 25%);
}
</style>

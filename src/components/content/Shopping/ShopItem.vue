<template>
  <div class="shopitem com-flex">
    <div class="th th-chk">
      <input id="J_SelectAllCbx1" type="checkbox" />
      <img :src="shopItem.img" />
    </div>
    <div class="th th-info">{{ shopItem.content }}</div>
    <div class="th th-price">{{ shopItem.price }}</div>
    <div class="th th-amount">{{ shopItem.num }}</div>
    <div class="th th-sum">{{ shopItem.total }}</div>
    <div class="th th-op">删除</div>
  </div>
</template>

<script>
export default {
  name: 'ShopItem',
  props: {
    shopItem: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin wh($w, $h: $w) {
  width: $w;
  height: $h;
}
.shopitem {
  height: 119px;
  margin: 20px 24px;
  background-color: #f5f5f5;
  border-radius: 18px;
  padding: 20px;
  box-sizing: border-box;
  .th {
    // height: 119px;
  }
  .th-chk {
    input{
      margin-top: -50%;
      transform: translateY(50%)
    }
    img {
      @include wh(80px);
    }
  }
}
</style>

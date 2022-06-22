<template>
  <div class="shopping com-overflow-hidden">
    <TopBar :isHome="isHome"></TopBar>
    <SearchHome :isHome="isHome"></SearchHome>
    <div class="content home-width com-margin-center">
      <div class="hd com-flex">
        <span class="car">购物车</span>
        <div class="cart-sum">
          <span>已选商品（不包含运费）</span>
          <strong><em>&nbsp;&yen;</em>{{ allShop }}</strong>
          <a href="javascript:void(0);" :class="{ active: isActive }"
            >结&nbsp;算</a
          >
        </div>
      </div>
      <div class="cartmain">
        <div class="cart-table-th com-flex">
          <div class="th th-chk">
            <input
              id="J_SelectAllCbx1"
              type="checkbox"
              v-model="isAllSelected"
            /><label for="J_SelectAllCbx1">全选</label>
          </div>
          <div class="th th-info">商品信息</div>
          <div class="th th-price">单价</div>
          <div class="th th-amount">数量</div>
          <div class="th th-sum">金额</div>
          <div class="th th-op">操作</div>
        </div>
        <div class="cart-list">
          <ShopItem
            v-for="(item, index) in shopItems"
            :key="index"
            :shopIt="item"
          ></ShopItem>
        </div>
      </div>
      <div class="ft"></div>
    </div>
  </div>
</template>

<script>
import ShopItem from '@cpts/Shopping/ShopItem.vue'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'ShoppingVue',
  data () {
    return {
      isHome: false,
      isActive: false,
      allShop: '0.00'
    }
  },
  components: {
    ShopItem
  },
  computed: {
    ...mapState(['shopItems']),
    isAllSelected: {
      get () {
        return this.$store.state.isAllSelected
      },
      set (val) {
        this.allChecked()
      }
    }
  },
  watch: {
    shopItems: {
      deep: true,
      immediate: true,
      handler (n) {
        let sum = 0
        for (const item of n) {
          const temp = item.price * item.num
          sum += temp
        }
        this.allShop = sum
        for (const item of n) {
          if (item.isSelected) {
            this.isActive = true
            return
          }
        }
        this.isActive = false
      }
    }
  },
  methods: {
    ...mapMutations(['allChecked'])
  }
}
</script>

<style lang="scss" scoped>
@mixin wh($w, $h: $w) {
  width: $w;
  height: $h;
}
.shopping {
  width: 100vw;
  background: repeat-y url("@images/pic_028.png");
  background-size: cover;
  .content {
    background-color: #fff;
    border-radius: 24px;
    margin-bottom: 45px;
    font-family: "Microsoft YaHei";
    padding-bottom: 10px;
  }
}
.hd,
.cart-table-th {
  padding: 0 18px;
  align-items: center;
  justify-content: space-between;
}
.hd {
  height: 72px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
  .car {
    color: #000;
    font-size: 18px;
    font-weight: 600;
  }
  .cart-sum {
    strong {
      font-size: 22px;
      font-weight: 700;
      color: #f50;
      margin-right: 12px;
    }
    a {
      $h: 42px;
      display: inline-block;
      text-align: center;
      line-height: $h;
      @include wh(74px, $h);
      background: #aaa;
      color: #fff;
      font-size: 16px;
      border-radius: 21px;
      cursor: not-allowed;
    }
    .active {
      background-color: #f50;
    }
  }
}
.cartmain {
  user-select: none;
  $h: 50px;
  .cart-table-th {
    padding: 0 25px;
    height: $h;
    margin-bottom: 15px;
  }
  .th {
    height: 100%;
    color: #3c3c3c;
    font-weight: bold;
    font-size: 14px;
    line-height: $h;
  }
}
</style>
<style lang="scss">
.th {
  flex: 1;
}
.th-chk {
  flex: 1.2;
  // width: 150px;
  input,
  label {
    cursor: pointer;
  }
  input {
    vertical-align: middle;
    margin-right: 8px;
  }
  label {
    width: 50px;
    height: 50px;
    display: inline-block;
  }
}
.th-info {
  flex: 3;
}
.th-price,
.th-amount,
.th-sum,
.th-op {
  text-align: center;
}
</style>

<template>
  <div class="shopitem com-flex">
    <div class="th th-chk">
      <input
        id="J_SelectAllCbx1"
        @click="changeStatus"
        type="checkbox"
        v-model="shopItem.isSelected"
      />
      <img :src="shopItem.img" />
    </div>
    <div class="th th-info">
      <p>{{ shopItem.content }}</p>
      <div class="icon com-flex">
        <img src="@images/pic_029.png" />
        <img src="@images/pic_030.png" />
        <img src="@images/pic_031.png" />
      </div>
    </div>
    <div class="th th-price"><span>&yen;</span>{{ shopItem.price }}</div>
    <div class="th th-amount com-flex-center">
      <span class="sub" @click="sub">-</span
      ><input type="number" v-model="shopItem.num" disabled /><span
        class="add"
        @click="add"
        >+</span
      >
    </div>
    <div class="th th-sum"><span>&yen;</span>{{ total }}</div>
    <div class="th th-op"><span>删除</span></div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'ShopItem',
  data () {
    return {
      shopItem: {}
    }
  },
  props: {
    shopIt: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    total () {
      const result = this.shopItem.num * this.shopItem.price
      return result.toFixed(2)
    }
  },
  methods: {
    ...mapMutations(['addProd', 'subProd', 'checked']),
    sub () {
      if (this.shopItem.num <= 1) {
        this.shopItem.num = 1
        return
      }
      this.subProd(this.shopItem.id, this.shopItem)
      // this.shopItem.num--;
    },
    add () {
      this.addProd(this.shopItem)
      // this.shopItem.num++;
    },
    changeStatus () {
      this.checked(this.shopItem)
    }
  },
  beforeMount () {
    this.shopItem = this.shopIt
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
  margin: 25px 24px;
  background-color: #f5f5f5;
  border-radius: 18px;
  padding: 20px;
  box-sizing: border-box;
  .th-chk {
    input {
      margin-top: -50%;
      transform: translateY(50%);
    }
    img {
      @include wh(80px);
    }
  }
  .th-info {
    .icon {
      margin-top: 40px;
      width: 16px;
      img {
        margin-right: 6px;
      }
    }
  }
  .th-price,
  .th-sum {
    font-weight: 700;
    font-size: 14px;
  }
  .th-price {
    color: #3c3c3c;
    margin-top: 6px;
    margin-left: 10px;
  }
  .th-sum {
    color: #f50;
  }
  .th-amount {
    height: 25px;
    margin-left: 24px;
    span {
      width: 19px;
      line-height: 25px;
      border: 1px solid #e5e5e5;
      background: #f0f0f0;
      font-size: 16px;
    }
    input {
      width: 39px;
      height: 100%;
      border: 1px solid #aaa;
      color: #343434;
      text-align: center;
      outline: none;
    }
    .sub:hover,
    .add:hover {
      color: #f50;
      border-color: #f60;
    }
  }
  .th-op {
    margin-top: 5px;

    span:hover {
      cursor: pointer;
      color: #f50;
      text-decoration: underline;
    }
  }
}
</style>

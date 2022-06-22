<template>
  <div class="InfoWrap com-mouse-default">
    <div class="goodsDetail">
      <h3 class="InfoName">
        {{ info.content }}
      </h3>
      <p class="news">
        {{ skuDesc }}
      </p>
      <div class="priceArea">
        <div class="priceArea1 com-flex">
          <div class="com-flex">
            <div class="title">价&emsp;&ensp;格</div>
            <div class="price">
              <i>¥</i>
              <em>{{ info.price }}</em>
              <span>降价通知</span>
            </div>
          </div>
          <div class="remark">
            <em>768</em>
            <i>月销量</i>
          </div>
        </div>
        <div class="priceArea2">
          <div class="title">
            <i>促&emsp;&ensp;销</i>
          </div>
          <div class="fixWidth">
            <i class="red-bg">加价购</i>
            <em class="t-gray"
              >满999.00另加20.00元，或满1999.00另加30.00元，或满2999.00另加40.00元，即可在购物车换购热销商品</em
            >
          </div>
        </div>
      </div>
      <div class="support">
        <div class="supportArea">
          <div class="title">支&emsp;&ensp;持</div>
          <div class="fixWidth">花呗分期，快递 免运费 礼品购</div>
        </div>
        <div class="supportArea">
          <div class="title">配 送 至</div>
          <div class="fixWidth">福建省 南平市 延平区区</div>
        </div>
      </div>
    </div>

    <!-- 属性列表 -->
    <div class="choose">
      <div class="cartWrap">
        <div class="controls com-flex">
          <span>数&emsp;&ensp;量</span>
          <a href="javascript:" class="mins" @click="sub">-</a>

          <input autocomplete="off" class="itxt" disabled v-model="skuNum" />
          <a href="javascript:" class="plus" @click="add">+</a>&emsp;件
        </div>
        <div class="add com-mouse-point">
          <a class="addCart" @click="addCart">加入购物车</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'InfoDetail',
  props: {
    info: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      skuNum: 1,
      skuDesc: '全场正品 达人推荐 无忧退换'
    }
  },
  methods: {
    ...mapMutations(['addProd']),
    sub () {
      if (this.skuNum <= 1) {
        this.skuNum = 1
        return
      }
      this.skuNum--
    },
    add () {
      this.skuNum++
    },
    addCart () {
      this.addProd(this.info, this.skuNum)
      this.$router.push({ name: 'shopping' })
    }
  }
}
</script>

<style lang="scss" scoped>
.InfoWrap {
  width: 700px;

  .InfoName {
    font-size: 14px;
    line-height: 21px;
    margin-top: 15px;
  }

  .news {
    color: #3c3c3c;
    margin-top: 15px;
  }

  .priceArea {
    background: #fff2e8;
    padding: 7px;
    margin: 13px 0;

    .priceArea1 {
      overflow: hidden;
      line-height: 28px;
      margin-top: 10px;
      justify-content: space-between;
      .title {
        margin-right: 15px;
      }

      .price {
        i,
        em {
          color: #f40;
        }
        i {
          font-size: 16px;
        }

        em {
          font-size: 24px;
          font-weight: 700;
          margin-left: 5px;
        }

        span {
          font-size: 12px;
        }
      }
      .remark {
        em,
        i {
          text-align: center;
          display: block;
          line-height: 13px;
          height: 15px;
        }
      }
    }

    .priceArea2 {
      overflow: hidden;
      line-height: 28px;
      margin-top: 10px;

      .title {
        margin-right: 15px;
        float: left;
      }

      .fixWidth {
        width: 520px;
        float: left;

        .red-bg {
          background: #f40;
          color: #fff;
          padding: 3px;
        }

        .t-gray {
          color: #999;
        }
      }
    }
  }

  .support {
    border-bottom: 1px solid #ededed;
    padding-bottom: 5px;

    .supportArea {
      overflow: hidden;
      line-height: 28px;
      margin-top: 10px;

      .title {
        margin-right: 15px;
        float: left;
      }

      .fixWidth {
        width: 520px;
        float: left;
        color: #999;
      }
    }
  }

  .choose {
    .chooseArea {
      overflow: hidden;
      line-height: 28px;
      margin-top: 10px;

      dl {
        overflow: hidden;
        margin: 13px 0;

        dt {
          margin-right: 15px;
          float: left;
        }

        dd {
          float: left;
          margin-right: 5px;
          color: #666;
          line-height: 24px;
          padding: 2px 14px;
          border-top: 1px solid #eee;
          border-right: 1px solid #bbb;
          border-bottom: 1px solid #bbb;
          border-left: 1px solid #eee;

          &.active {
            color: green;
            border: 1px solid green;
          }
        }
      }
    }

    .cartWrap {
      .controls {
        height: 37px;
        position: relative;
        line-height: 37px;
        margin: 10px 0;
        .itxt {
          width: 38px;
          height: 34px;
          border: 1px solid #ddd;
          color: #555;
          border-right: 0;
          text-align: center;
          outline: none;
        }

        .plus,
        .mins {
          width: 27px;
          text-align: center;
          height: 38px;
          background: #f1f1f1;
          color: #666;
        }

        span {
          margin-right: 11px;
        }
      }

      .add {
        a {
          width: 180px;
          background-color: #f40;
          padding: 0 25px;
          font-size: 16px;
          color: #fff;
          height: 36px;
          line-height: 36px;
          text-align: center;
          display: block;
          border-radius: 3px;
        }
      }
    }
  }
}
</style>

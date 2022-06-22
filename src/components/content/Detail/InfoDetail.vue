<template>
  <div class="InfoWrap">
    <div class="goodsDetail">
      <h3 class="InfoName">
        {{ skuInfo.content }}
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
              <em>{{ skuInfo.price }}</em>
              <span>降价通知</span>
            </div>
          </div>
          <div class="remark">
            <i>月销量</i>
            <em>768</em>
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
          <div class="fixWidth">以旧换新，闲置手机回收 4G套餐超值抢 礼品购</div>
        </div>
        <div class="supportArea">
          <div class="title">配 送 至</div>
          <div class="fixWidth">广东省 深圳市 宝安区</div>
        </div>
      </div>
    </div>

    <!-- 属性列表 -->
    <div class="choose">
      <div class="cartWrap">
        <div class="controls com-flex">
          <span>数&emsp;&ensp;量</span>
          <a
            href="javascript:"
            class="mins"
            @click="skuNum > 1 ? skuNum-- : (skuNum = 1)"
            >-</a
          >

          <input
            autocomplete="off"
            class="itxt"
            @change="changeSkuNum"
            v-model="skuNum"
          />
          <a href="javascript:" class="plus" @click="skuNum++">+</a>
        </div>
        <div class="add">
          <!-- 以前的路由跳转都是直接跳，这里需要给服务器发参数，再跳 -->
          <a>加入购物车</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoDetail',
  props: {
    skuInfo: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      skuNum: 1,
      skuDesc: '全场正品 达人推荐 无忧退换'
    }
  },
  methods: {
    changeSkuNum () {
      // 非数字*1都为NaN
      const value = this.skuNum * 1
      // 如果用户输入的非法  出现NaN或用户输入<1的数字
      if (isNaN(value) || value < 1) {
        this.skuNum = 1
      } else {
        // 用户输入的合法(>1)但是带小数
        this.skuNum = parseInt(value)
      }
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

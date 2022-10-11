<template>
  <div class="footer">
    <div class="inner com-flex-center">
      <div class="inner-item" v-for="(item, index) in foot" :key="index">
        <h4>
          <i class="iconfont" :class="item.class"></i><span>{{ item.msg }}</span>
        </h4>
        <ul>
          <li v-for="(ite, i) in item.ul" :key="i">{{ ite.msg }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterVue',
  data () {
    return {
      foot: [
        {
          class: 'icon-anquan',
          msg: '消费者保障',
          ul: [{ msg: '保障范围' }, { msg: '退货退款流程' }, { msg: '服务中心' }, { msg: '更多特色服务' }]
        },
        {
          class: 'icon-bangzhu',
          msg: '消费者保障',
          ul: [{ msg: '保障范围' }, { msg: '退货退款流程' }, { msg: '服务中心' }, { msg: '更多特色服务' }]
        },
        {
          class: 'icon-fukuan',
          msg: '消费者保障',
          ul: [{ msg: '保障范围' }, { msg: '退货退款流程' }, { msg: '服务中心' }, { msg: '更多特色服务' }]
        },
        {
          class: 'icon-taobaotese',
          msg: '消费者保障',
          ul: [{ msg: '保障范围' }, { msg: '退货退款流程' }, { msg: '服务中心' }]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  .inner {
    width: 1200px;
    margin: 0 auto;
    height: 250px;
    .inner-item {
      h4 {
        font-size: 20px;
        .iconfont {
          font-size: 30px;
          margin-right: 12px;
        }
        span {
          color: #3c3c3c;
        }
      }
      ul {
        min-height: 36px;
        li {
          display: inline-block;
          margin-right: 10px;
        }
      }
      color: #999;
      width: 247px;
    }
    justify-content: space-between;
  }
  width: 100%;
  padding: 10px 0 9px;
  border-top: 1px solid #ddd;
  background-color: #fff;
}
</style>

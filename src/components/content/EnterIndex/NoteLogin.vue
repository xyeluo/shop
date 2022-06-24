<template>
  <div class="form-content">
    <div class="item">
      <label for="account"><i class="iconfont icon-shouji"></i></label>
      <input
        type="text"
        name="account"
        id="account"
        placeholder="请输入账号"
        autocomplete="off"
        v-model="account.user"
      />
    </div>
    <div class="item">
      <label for="password"><i class="iconfont icon-yanzhengma"></i></label>
      <input
        type="password"
        autocomplete="off"
        name="password"
        id="password"
        placeholder="请输入密码"
        v-model="account.pwd"
      />
      <!-- <span class="yanzhenma"> 获取验证码 </span> -->
    </div>
    <div class="item">
      <div class="btn">
        <a @click="register">注册账号</a>
      </div>
    </div>
    <div class="item">
      <span class="other-one">
        <i class="iconfont icon-weibo"></i>
        微博登录
      </span>
      <span class="other-one">
        <i class="iconfont icon-zhifubao"></i>
        支付宝登录
      </span>
    </div>
    <div class="item last">
      <span class="other-one"> 免费注册 </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NoteLogin',
  data () {
    return {
      account: {
        user: '',
        pwd: ''
      },
      allAcount: []
    }
  },
  methods: {
    register () {
      if (this.account.user === '' || this.account.pwd === '') {
        alert('信息不完整，注册失败！')
        return
      }
      this.allAcount.push(this.account)
      localStorage.setItem('allAcount', JSON.stringify(this.allAcount))
      this.$router.push({ name: 'pwdlogin' })
    }
  },
  mounted () {
    const temp = localStorage.getItem('allAcount')
    if (temp) {
      this.allAcount = JSON.parse(temp)
    }
  }
}
</script>
<style lang="scss" scoped>
.item {
  &.last {
    margin-left: 240px;
  }
  .yanzhenma {
    width: 60px;
    background-color: #fff;
    font-size: 11px;
    padding-right: 5px;
    color: #6c6c6c;
  }
}
</style>

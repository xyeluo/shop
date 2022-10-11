<template>
  <div class="form-content">
    <div class="item">
      <label for="account"><i class="iconfont icon-yonghu"></i></label>
      <input type="text" name="account" id="account" placeholder="账号名/邮箱/手机号" autocomplete="off" v-model="account.user" />
    </div>
    <div class="item">
      <label for="password"><i class="iconfont icon-ziyuanxhdpi"></i></label>
      <input type="password" autocomplete="off" name="password" id="password" placeholder="请输入登录密码" v-model="account.pwd" />
    </div>
    <div class="item">
      <div class="btn">
        <a @click="login">登录</a>
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
      <span class="other-one"> 忘记密码 </span>
      <span class="other-one"> 忘记账号名 </span>
      <router-link :to="{ name: 'notelogin' }" tag="span" class="other-one"> 免费注册 </router-link>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'PwdLogin',
  data () {
    return {
      account: {
        user: '',
        pwd: ''
      },
      AllAcount: [
        { user: 'demo01', pwd: '123456' },
        { user: 'demo02', pwd: '123456' }
      ]
    }
  },
  methods: {
    ...mapMutations(['setUser']),
    login () {
      if (this.account.user === '' || this.account.pwd === '') {
        alert('用户账号不完整！')
        return
      }
      let code = 0
      let user = ''
      for (const accountEach of this.AllAcount) {
        if (this.account.user === accountEach.user) {
          code = 1
          if (this.account.pwd === accountEach.pwd) {
            user = this.account.user
            code = 2
          }
        }
      }
      if (this.verifCode(code)) {
        this.setUser(user)
        this.$router.push({ name: 'home' })
      }
    },
    verifCode (code) {
      switch (code) {
        case 0:
          alert('账号不存在！')
          break
        case 1:
          alert('密码错误！')
          break
        case 2:
          return true
        default:
          break
      }
    }
  },
  beforeMount () {
    let temp = localStorage.getItem('allAcount')
    if (temp) {
      temp = JSON.parse(temp)
      temp.forEach((item) => {
        this.AllAcount.push(item)
      })
    }
  }
}
</script>

<template>
  <div class="form-content">
    <div class="item">
      <label for="account"><i class="iconfont icon-yonghu"></i></label>
      <input
        type="text"
        name="account"
        id="account"
        placeholder="账号名/邮箱/手机号"
      />
    </div>
    <div class="item">
      <label for="password"><i class="iconfont icon-ziyuanxhdpi"></i></label>
      <input
        type="text"
        autocomplete="false"
        name="password"
        id="password"
        placeholder="请输入登录密码"
      />
    </div>
    <div class="item">
      <div class="btn">
        <router-link :to="{name:'home'}">登录</router-link>
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
      <span class="other-one">
        忘记密码
      </span>
      <span class="other-one">
        忘记账号名
      </span>
      <span class="other-one">
        免费注册
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PwdLogin'
}
</script>

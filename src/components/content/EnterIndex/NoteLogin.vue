<template>
  <div class="form-content">
    <div class="item">
      <label for="account"><i class="iconfont icon-shouji"></i></label>
      <input
        type="text"
        name="account"
        id="account"
        placeholder="请输入手机号"
      />
    </div>
    <div class="item">
      <label for="password"><i class="iconfont icon-yanzhengma"></i></label>
      <input
        type="text"
        autocomplete="false"
        name="password"
        id="password"
        placeholder="请输入验证码"
      />
      <span class="yanzhenma"> 获取验证码 </span>
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
      <span class="other-one"> 免费注册 </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NoteLogin'
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

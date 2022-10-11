<template>
  <div class="enter">
    <div class="header com-flex-center">
      <div class="logo enter-width com-margin-center com-flex">
        <h1>
          <router-link title="淘宝网" class="logo-link" :to="{ name: 'home' }"></router-link>
        </h1>
        <div>
          <a href="javascript:void(0)" class="wza">网站无障碍</a>
          <a href="https://survey.taobao.com/survey/Q095thIx2" class="link"> <i class="iconfont icon-ai42"></i> "登录页面"改进建议 </a>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="enter-width com-margin-center">
        <div id="login-box-wrap" class="com-absolute">
          <div id="loginTitle">
            <router-link :to="{ name: 'pwdlogin' }" active-class="active">密码登录</router-link>
            <router-link :to="{ name: 'notelogin' }" active-class="active">注册账号</router-link>
          </div>
          <form id="loginContent" onsubmit="return false;">
            <keep-alive :include="['pwdlogin', 'notelogin']">
              <router-view></router-view>
            </keep-alive>
          </form>
        </div>
      </div>
    </div>
    <!-- <FooterVue></FooterVue> -->
  </div>
</template>

<script>
export default {
  name: 'EnterVue'
}
</script>

<style lang="scss" scoped>
@mixin wh($w, $h: $w) {
  width: $w;
  height: $h;
}
.header {
  width: 100%;
  height: 88px;
}
.logo {
  // background: red;
  h1 {
    width: 110px;
    height: 44px;
    .logo-link {
      display: inline-block;
      width: 110px;
      height: 44px;
      background: url('@images/pic_019.png') no-repeat;
    }
  }
  .wza,
  .link {
    color: #666;
  }
  .wza {
    display: block;
  }
  .link {
    i {
      vertical-align: middle;
      font-size: 16px;
      color: #f40;
    }
  }
  justify-content: space-between;
}
.content {
  background: url('@images/pic_027.jpg') no-repeat center;
  .enter-width {
    position: relative;
    height: 600px;

    #login-box-wrap {
      z-index: 10;
      top: 120px;
      right: 60px;
      @include wh(350px);
      padding: 25px 25px 23px;
      box-sizing: border-box;
      background-color: hsla(0, 0%, 100%, 0.9);
      #loginTitle {
        margin-bottom: 20px;
        margin-top: 4px;
        color: #3c3c3c;

        a {
          display: inline-block;
          margin-right: 9px;
          font: 700 16px 'Microsoft Yahei';
        }
        .active {
          border-bottom: 2px solid #000;
        }
      }
    }
  }
}
</style>
<style lang="scss">
@mixin wh($w, $h: $w) {
  width: $w;
  height: $h;
  line-height: $h;
}
.form-content {
  width: 100%;
  .item {
    $wh: 40px;
    display: flex;
    line-height: $wh;
    border-radius: 3px;
    overflow: hidden;
    label {
      // display: inline-block;
      @include wh($wh);
      text-align: center;
      background-color: #ccc;
      color: #fff;
      .iconfont {
        font-size: 24px;
      }
    }
    input {
      flex: 1;
      border: 0;
      outline: none;
      text-indent: 10px;
    }
    margin-bottom: 20px;
    .btn {
      flex: 1;
      text-align: center;
      background: #f40;
      border-color: #f40;
      color: #fff;
      cursor: pointer;
      a {
        display: inline-block;

        @include wh(100%, $wh);
        line-height: $wh;
      }
      font: 400 16px 'Microsoft Yahei';
    }
    .other-one {
      margin-right: 6px;
      i {
        margin-right: -2px;
        vertical-align: middle;
      }
      .icon-weibo {
        color: #e52425;
      }
      .icon-zhifubao {
        color: #1ba9ee;
      }
      color: #6c6c6c;
    }
    &.last {
      margin-top: -19px;
      margin-bottom: 0;
      margin-left: 120px;
    }
  }
}
</style>

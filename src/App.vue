<template>
  <div id="app">
    <header>
      <div class="headerContain">
        <div class="headerL">
          <a href="#">
            <div class="logo"></div>
          </a>
          <el-input size="small" prefix-icon="el-icon-search" v-model="searchItem"></el-input>
        </div>
        <div class="headerR">
          <span>首页</span>
          <span>注册</span>
          <span>登录</span>
        </div>
      </div>
    </header>
    <div class="wrapper">
      <div class="content sep20">
        <router-view></router-view>
      </div>
      <div class="rightBar sep20">
        <div class="box">
          <div class="cell">
            <strong>V2EX = way to explore</strong>
            <div class="sep5"></div>
            <span class="fade">V2EX 是一个关于分享和探索的地方</span>
          </div>
          <div class="inner">
            <el-button type="text">现在注册</el-button>
            <div>
              已注册用户请&nbsp;
              <el-button type="text">登陆</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      searchItem: ''
    }
  }
}
</script>

<style lang="scss">
@import url('./assets/css/common.css');
:root {
  --box-background-color: #fff;
  --box-border-radius: 3px;
  --box-border-color: #e2e2e2;
}
#app {
  header {
    box-sizing: border-box;
    width: 100%;
    min-width: 490px;
    padding: 0 20px;
    .headerContain {
      margin: 0 auto;
      display: flex;
      max-width: 1060px;
      min-width: 600px;
      height: 44px;
      font-size: 15px;
      font-weight: 500;
      border-bottom: 1px solid rgba(0, 0, 0, 0.22);
      background-color: var(--box-background-color);
      justify-content: space-between;
      align-items: center;
      .headerL {
        display: flex;
        .logo {
          display: inline-block;
          background-repeat: no-repeat;
          width: 100px;
          height: 30px;
          background-size: 100px 30px;
          background-image: url('./assets/v2ex@2x.png');
          margin-right: 20px;
        }
      }
      .headerR {
        span {
          margin-left: 8px;
          cursor: pointer;
        }
      }
    }
  }
  .wrapper {
    background-color: #e2e2e2;
    height: 120vh;
    position: relative;
    .content {
      margin: 0 310px 0 20px;
      position: absolute;
      width: auto;
    }
    .rightBar {
      width: 270px;
      float: right;
      margin-right: 20px;
      .box {
        background-color: var(--box-background-color);
        border-radius: var(--box-border-radius);
        box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
        border-bottom: 1px solid var(--box-border-color);
        .cell {
          padding: 10px;
          font-size: 14px;
          line-height: 150%;
          text-align: center;
          border-bottom: 1px solid var(--box-border-color);
        }
        .inner {
          padding: 10px;
          font-size: 14px;
          line-height: 150%;
          text-align: center;
        }
      }
    }
  }
}
</style>

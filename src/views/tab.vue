<template>
  <div class="tabBox">
    <div class="box">
      <div class="inner" id="Tabs">
        <router-link to="tech" class="tab" :class="{active: this.$route.params.id==='tech'}">技术</router-link>
        <router-link to="create" class="tab" :class="{active: this.$route.params.id==='create'}">创意</router-link>
        <router-link class="tab" :class="{active: this.$route.params.id==='play'}" to="play">好玩</router-link>
        <router-link class="tab" :class="{active: this.$route.params.id==='apple'}" to="apple">Apple</router-link>
        <router-link class="tab" :class="{active: this.$route.params.id==='jobs'}" to="jobs">酷工作</router-link>
        <router-link class="tab" :class="{active: this.$route.params.id==='deals'}" to="deals">交易</router-link>
        <router-link class="tab" :class="{active: this.$route.params.id==='qna'}" to="qna">问与答</router-link>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tablist: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.tabBox {
  width: auto;
  .box {
    background-color: var(--box-background-color);
    border-radius: var(--box-border-radius);
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
    border-bottom: var(--box-border-color);
    .inner {
      padding: 10px;
      font-size: 14px;
      line-height: 150%;
      text-align: left;
      &#Tabs {
        background-color: var(--box-background-color);
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
      }
      .tab {
        display: inline-block;
        font-size: 14px;
        line-height: 14px;
        padding: 5px 8px;
        margin-right: 5px;
        border-radius: var(--box-border-radius);
        color: #555;
        -webkit-tap-highlight-color: transparent;
      }
      .active {
        background-color: #334;
        color: #fff;
      }
    }
  }
}
</style>

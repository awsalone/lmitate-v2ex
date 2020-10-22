<template>
  <div>
    <div class="cell" v-for="(item,index) in topics" :key="index" @click="pushReply(item.id)">
      <div class="cellL">
        <span class="cellImg">
          <img :src="item.member.avatar_normal" />
        </span>
        <span class="cellContent">
          <span>{{item.title}}</span>
          <span>
            <span class="votes">{{item.node.name}}</span>
            &nbsp; • &nbsp;
            <strong>{{item.member.username}}</strong>
          </span>
        </span>
      </div>
      <div class="cellR">{{item.replies}}</div>
    </div>
  </div>
</template>

<script>
import { getNodesItem } from '../api/index'
export default {
  data () {
    return {
      topics: ''
    }
  },
  async created () {
    let data = await getNodesItem({ node_name: this.$route.params.id })
    this.topics = data
    console.log('start', data)
  },
  async beforeRouteUpdate (to, from, next) {
    // react to route changes...
    // don't forget to call next()
    let data = await getNodesItem({ node_name: to.params.id })
    this.topics = data
    console.log('refresh', this.$route.params.id, data[0])
    next()
  },
  methods: {
    pushReply (id) {
      this.$router.push('/reply/' + id)
    }
  }
}
</script>

<style lang="scss" scoped>
.cell {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid var(--box-border-color);
  .cellL {
    display: flex;
    align-items: center;
    .cellImg {
      width: 48px;
      overflow: hidden;
    }
    .cellContent {
      display: inline-flex;
      flex-direction: column;
      justify-content: center;
      // title
      & > span:nth-child(1) {
        line-height: 130%;
        text-shadow: 0 1px 0 #fff;
        word-break: break-word;
      }
      // 标签
      & > span:nth-child(2) {
        font-size: 12px;
        color: #ccc;
        line-height: 200%;
        .votes {
          background-color: #f5f5f5;
          font-size: 12px;
          line-height: 12px;
          display: inline-block;
          padding: 4px;
          -moz-border-radius: 2px;
          -webkit-border-radius: 2px;
          border-radius: 2px;
          text-decoration: none;
          color: #999;
        }
      }
    }
  }
  .cellR {
    line-height: 12px;
    font-weight: 700;
    color: #fff;
    background-color: #aab0c6;
    display: inline-block;
    padding: 2px 10px;
    -moz-border-radius: 12px;
    -webkit-border-radius: 12px;
    border-radius: 12px;
    text-decoration: none;
    margin-right: 5px;
  }
}
</style>
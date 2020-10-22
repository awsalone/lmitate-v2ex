<template>
  <div>
    <div class="header">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">V2ex</el-breadcrumb-item>
        <el-breadcrumb-item :replace="{path: `/tab/{{data.node.name}}`}">{{data.node.title}}</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="sep10"></div>
      <h1>{{data.title}}</h1>
      <div>{{data.created}}</div>
    </div>
    <div class="cell">
      <div class="topic_content"></div>
    </div>
    <div class="sep20"></div>
    <div class="box">
      <div class="cell">{{data.last_modified}}{{data.replies}}</div>
      <div class="cell" v-for="(item,index) in reply" :key="index">
        <div class="cellL">
          <span class="cellImg">
            <img :src="item.member.avatar_normal" />
          </span>
          <span class="cellContent">
            <span>{{item.member.username}}</span>
           <span>{{item.content}}</span>
          </span>
        </div>
        <div class="cellR">{{item.replies}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getTopicItem , getReply} from '../api/index'
export default {
  data () {
    return {
      data: '',
      reply: ''
    }
  },
  async created () {
    let data = await getTopicItem(this.$route.params.id)
    this.data = data
      let reply = await getReply({topic_id: this.$route.params.id})
  this.reply = reply
  }
}
</script>
<style lang="scss" scoped>
.header {
  padding: 10px;
  font-size: 15px;
  line-height: 120%;
  text-align: left;
  border-bottom: 1px solid var(--box-border-color);
  overflow: auto;
}
.cell {
  padding: 10px;
  font-size: 14px;
  line-height: 150%;
  text-align: left;
  border-bottom: 1px solid var(--box-border-color);
  .topic_content {
    font-size: 14px;
    line-height: 1.6;
    color: #000;
    word-break: break-word;
  }
}
.box {
  background-color: var(--box-background-color);
  border-radius: var(--box-border-radius);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid var(--box-border-color);
  .cell {
    padding: 10px;
    font-size: 14px;
    line-height: 150%;
    text-align: left;
    border-bottom: 1px solid var(--box-border-color);
  }
}
</style>
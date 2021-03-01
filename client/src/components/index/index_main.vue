<template>
  <my-container>
    <sider-container slot="sider" />
    <div slot="main">
      <!-- 文章展示主页 -->
      <main-container :option="null" />
    </div>
  </my-container>
</template>

<script>
import myContainer from "../my_container.vue";
import mainContainer from "../main_container.vue";
import siderContainer from "./sider_container.vue";

export default {
  components: {
    mainContainer,
    siderContainer,
    myContainer,
  },
  created() {
    
  },
  data() {
    return {
      // 文章数组
      listData: [
        // {
        //   title: `hello world`,
        //   id: 10,
        //   description: ["javascript", "互联网前端", "算法"],
        //   content: "我的第一篇个人博客",
        //   actions: [
        //     { type: "like-o", text: "150" },
        //     { type: "message", text: "1" },
        //     { type: "calendar", text: "2019-10-10" },
        //   ],
        // },
      ],
     
    };
  },
};
</script>

<style>
.article_item {
  background-color: #fff;
}
</style>
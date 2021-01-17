<template>
  <a-row class="main_content">
    <a-col
      class="main_sider"
      :md="{ span: '9', push: '15' }"
      :lg="{ span: '8', push: '16' }"
      :xl="{ span: '7', push: '17' }"
    >
      <my-sider />
    </a-col>

    <a-col
      class="main_container"
      :md="{ span: '14', pull: '9' }"
      :lg="{ span: '15', pull: '8' }"
      :xl="{ span: '16', pull: '7' }"
    >
      <!-- 文章展示主页 -->
      <my-container />
      <!-- 页脚信息栏 -->
      <a-layout-footer>
        <a-row>
          <a-col :span="24"
            >小徐个人博客 | 联系电话 ： 18720901484 |
            邮箱：1427742566@qq.com</a-col
          >
          <a-col :span="25"></a-col>
        </a-row>
      </a-layout-footer>
    </a-col>
  </a-row>
</template>

<script>
import myContainer from "./index_container.vue";
import mySider from "./index_sider.vue";

export default {
  components: {
    myContainer,
    mySider,
  },
};
</script>

<style>
::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}
.main_content {
  background-color: #eeeeee;
  padding: 10px 30px;
}

.article_item{
  background-color: #fff;
}
</style>
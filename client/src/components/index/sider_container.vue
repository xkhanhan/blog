<template>
  <a-row class="sider_container">
    <siderItem title="最火文章" icon="fire">
      <article-list :list="fireArticleList" />
    </siderItem>

    <siderItem title="最新文章" icon="form">
      <article-list :list="newArticleList" />
    </siderItem>
  </a-row>
</template>

<script>
import siderItem from "../sider_item";
import articleList from "./sider_article_list";
import api from "@/api/api";

export default {
  components: {
    siderItem,
    articleList,
  },
  async created() {
    const fox_data = await api.Article.getFox();
    const new_data = await api.Article.getNew();

    const fox_list = [];
    const new_list = [];

    fox_data.result.map((v) => {
      fox_list.push({
        id: v.id,
        title: v.Article_title,
        signature: v.Article_brief,
      });
    });

    new_data.result.map((v) => {
      new_list.push({
        id: v.id,
        title: v.Article_title,
        signature: v.Article_brief,
      });
    });

    this.newArticleList = new_list;
    this.fireArticleList = fox_list;
  },
  data() {
    return {
      // 最新文章面版
      newArticleList: [
        {
          id: "10",
          title: "hello javaScript",
          signature: "我的第一篇个人博客文章",
        },
      ],
      // 最火文章面板
      fireArticleList: [
        {
          id: "10",
          title: "hello javaScript",
          signature: "我的第一篇个人博客文章",
        },
      ],
    };
  },
};
</script>

<style>
.sider_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
}
.sider_container .ant-col {
  margin: 0 0 10px 0;
}
.sider_avater {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.avater_name {
  font-weight: bold;
}
.love * {
  vertical-align: middle;
}
</style>
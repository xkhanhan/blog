<template>
  <a-row class="sider_container">
    <siderItem title="个人信息">
      <user-information :user_information="user_information">
          <template  v-slot:git="git">
              <p> <span><b>github主页</b></span> : <a :href="git.href">{{git.href}}</a></p>
          </template>
      </user-information>
    </siderItem>

    <siderItem title="最火文章" icon="fire">
      <article-list :list="fireArticleList" />
    </siderItem>

    <siderItem title="最新文章" icon="form" :defaultAn='false'>
      <article-list :list="newArticleList" />
    </siderItem>
  </a-row>
</template>

<script>
import siderItem from "./sider_item";
import UserInformation from "./user_information.vue";
import articleList from "./sider_article_list";

export default {
  components: {
    siderItem,
    UserInformation,
    articleList,
  },
  data() {
    return {
      user_information: {
        avater_img:
          "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        signature: "人生不止有技术，还有妹子和票子",
        name: "小徐不秃头",
        information: [
          { title: "年龄", contaienr: "18" },
          { title: "居住地址", contaienr: "江西南昌" },
          { title: "感情状况", contaienr: "单身待解决" },
          {
            title: "人生理想",
            contaienr: "这货是个咸鱼，没啥理想，唯一算的上的就是不秃头。",
          },
        ],
        love: [
          { style: { backgroundColor: "#fadb14" }, title: "吉他" },
          { style: { backgroundColor: "#52c41a" }, title: "游戏" },
          { style: { backgroundColor: "#eb2f96" }, title: "妹子" },
        ],
        href : 'https://github.com/xkhanhan'
      },
      newArticleList: [
        { id: '10', title: "hello javaScript", signature: "我的第一篇个人博客文章" },
        { id: '11', title: "hello javaScript", signature: "我的第一篇个人博客文章" },
        { id: '12', title: "hello javaScript", signature: "我的第一篇个人博客文章" },
        { id: '13', title: "hello javaScript", signature: "我的第一篇个人博客文章" },
        { id: '14', title: "hello javaScript", signature: "我的第一篇个人博客文章" },

      ],
      fireArticleList: [   { title: "hello javaScript", signature: "我的第一篇个人博客文章" },
        { id : '1', title: "hello javaScript", signature: "我的第一篇个人博客文章" },
        { id : '2', title: "hello javaScript", signature: "我的第一篇个人博客文章" },
        { id : '3', title: "hello javaScript", signature: "我的第一篇个人博客文章" },
        { id : '4', title: "hello javaScript", signature: "我的第一篇个人博客文章" },],
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
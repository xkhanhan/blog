<template>
  <a-row class="article_contaienr">
    <!-- 首页文章展示组件 -->
    <a-col v-if="listData.length != 0">
      <a-list
        item-layout="vertical"
        size="large"
        :pagination="pagination"
        :data-source="listData"
      >
        <a-list-item
          class="article_item"
          slot="renderItem"
          key="item.title"
          slot-scope="item"
        >
          <template v-for="{ type, text } in item.actions" slot="actions">
            <span :key="type">
              <a-icon :type="type" style="margin-right: 8px" />
              {{ text }}
            </span>
          </template>

          <a-list-item-meta>
            <template slot="description">
              <a-badge
                style="margin: 0 5px"
                v-for="badgeItem in item.description"
                :key="badgeItem"
                :number-style="{
                  backgroundColor: '#fff',
                  color: '#999',
                  boxShadow: '0 0 0 1px #d9d9d9 inset',
                }"
                :count="badgeItem"
              />
            </template>
            <span slot="title">{{ item.title }}</span>
          </a-list-item-meta>

          <router-link
            class="item_brief"
            :to="{ name: 'detailed_article', params: { id: item.id  } }"
          >
            {{ item.content }}
          </router-link>
        </a-list-item>
      </a-list>
    </a-col>
    <!-- 无文章的展示 -->
    <a-col v-else>
      <a-empty description="暂无文章" />
    </a-col>
  </a-row>
</template>

<script>
export default {
  data() {
    return {
      // 文章数组
      listData: [
        // {
        //   title: `hello world`,
        //     id : 10,
        //   description: ["javascript", "互联网前端", "算法"],
        //   content:
        //     "我的第一篇个人博客",
        //   actions: [
        //     { type: "like-o", text: "150" },
        //     { type: "message", text: "1" },
        //     { type: "calendar", text: "2019-10-10" },
        //   ],
        // },
      ],
      // 分页按钮
      pagination: {
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 10,
      },

      // 信息（评论数，点赞数）
      actions: [
        { type: "like-o", text: "156" },
        { type: "message", text: "2" },
      ],
    };
  },
};
</script>

<style>
.ant-empty {
  margin-top: 100px;
}
a {
  display: inline-block;
}
.article_item {
  padding: 30px;
  margin-bottom: 10px;
}
.item_brief {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
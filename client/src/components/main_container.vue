<template>
  <!-- 
    文章列表展示组件
 -->
  <a-row>
    <a-list
      item-layout="vertical"
      size="large"
      :data-source="listData"
      :pagination="pagination"
      :loading="loading"
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
              :key="badgeItem.name"
              :number-style="{
                backgroundColor: '#fff',
                color: '#999',
                boxShadow: '0 0 0 1px #d9d9d9 inset',
              }"
              :count="badgeItem.name"
            />
          </template>
          <span slot="title">{{ item.title }}</span>
        </a-list-item-meta>

        <router-link
          class="item_brief"
          :to="{ name: 'detailed_article', params: { id: item.id } }"
        >
          {{ item.content }}
        </router-link>
      </a-list-item>
    </a-list>
  </a-row>
</template>

<script>
import api from "@/api/api";
export default {
  props: {
    option: {
      type: Object,
    },
  },
  created() {
    this.responseData(0, 5, this.option);
  },
  data() {
    return {
      listData: [],
      loading: false,
      timeout: null,
      /**
       * 分页信息
       */
      pagination: {
        onChange: async (page) => {
          const { responseData } = this;
          await responseData((page - 1) * 5, 5);
        },
        pageSize: 5,
        total: 0,
      },
    };
  },
  methods: {
    async responseData(from, num, createdAt, name) {
      this.loading = true;
      clearTimeout(this.timeout);
      this.timeout = setTimeout(async () => {
        this.loading = false;
        /**
         * 将获取到的文章信息进行赋值
         */
        let { $moment } = this;
        this.listData = []; // 将数据清空

        let data = await api.Article.get(from, num, createdAt, name); // 发送请求

        // 赋值分页总数
        if (this.pagination.total != data.result.count) {
          this.pagination.total = data.result.count;
        }

        data = data.result.rows; // 获取数据
        const length = data.length; // 存入数据总量
        for (let index = 0; index < length; index++) {
          const obj = {
            title: data[index].Article_title,
            id: data[index].id,
            description: data[index].Article_labels,
            content: data[index].Article_brief,
            actions: [
              { type: "like-o", text: data[index].click_quantity },
              {
                type: "calendar",
                text: $moment(data[index].createdAt).format("YY-MM-DD"),
              },
            ],
          };
          this.listData.push(obj);
        }
      }, 1500);
    },
  },
  watch: {
    option() {
      this.responseData(0, 5, this.option.createdAt, this.option.name);
    },
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
  background: #fff;
}
.item_brief {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
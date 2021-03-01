<template>
  <my-container>
    <main-container :option="option" slot="main" />
    <!-- 侧边栏 -->
    <siderItem slot="sider" title="分类" icon="menu">
      <a-badge
        :count="item.count"
        v-for="item in type"
        :key="item.title"
        :style="{ margin: '15px' }"
      >
        <a-button>{{ item.year }}</a-button>
      </a-badge>
    </siderItem>
  </my-container>
</template>

<script>
import myContainer from "../my_container.vue";
import mainContainer from "../main_container.vue";
import siderItem from "../sider_item";
import api from "@/api/api";

export default {
  components: {
    myContainer,
    mainContainer,
    siderItem,
  },
    async created() {
    const data = await api.Article.getDate();
    this.type = data.result;
  },
  data() {
    return {
      option: null,
      type:[]
    };
  },
  methods : {
      handleType(value){
          this.option = { name : null ,createdAt :value,};
      } 
  }
};
</script>

<style>
</style>
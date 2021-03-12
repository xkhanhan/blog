<template>
  <my-container>
    <sider-container slot="sider" />
    <div slot="main" >
      <!-- 文章展示主页 -->
          <markdown-it-vue :style="{hegiht : '500px',background : '#fff', padding : '20px'}" class="md-body" :content="content" />
    </div>
  </my-container>
</template>

<script>
import MarkdownItVue from 'markdown-it-vue';
import myContainer from "./my_container";
import siderContainer from "./index/sider_container";
import api from '@/api/api';
import 'markdown-it-vue/dist/markdown-it-vue.css'


export default {
  components: {
    MarkdownItVue,
    myContainer ,
    siderContainer
  },
  async created(){
     this.content = await api.Article.get_detailed(this.$route.params.id);
     console.log(this.content);
  },
  data() {
    return {
      content: ''
    }
  }
}
</script>
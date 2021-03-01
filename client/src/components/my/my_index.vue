<template>
  <a-layout id="components-layout-demo-top-side">
    <a-layout-content style="padding: 0 50px">
      <a-layout style="padding: 24px 0; background: #fff">
        <a-layout-sider
          breakpoint="lg"
          collapsed-width="0"
          width="200"
          style="background: #fff"
        >
          <a-menu
            mode="inline"
            :default-selected-keys="selectedKeys"
            style="height: 100%"
          >
            <a-menu-item v-for="item in memubar" :key="item.key">
              <router-link :to="{ name: item.key}">{{
                item.name
              }}</router-link>
            </a-menu-item>
          </a-menu>
        </a-layout-sider>
        <a-layout-content :style="{ height:'100%',padding: '0 24px', minHeight: '280px' }">
          <router-view name="my" />
        </a-layout-content>
      </a-layout>
    </a-layout-content>
    <a-layout-footer style="text-align: center"> 小徐个人博客 </a-layout-footer>
  </a-layout>
</template>

<script>
export default {
    created(){
            console.log(this.$route.name);  
      },
  data() {
      
    return {
      selectedKeys: [this.$route.name],
      memubar: [
        {
          name: "我的信息",
          key: "my_info",
        },
        {
          name: "文章列表",
          key: "article_list",
        }
      ],
    };
  },
};
</script>

<style>

.ant-layout-sider-zero-width-trigger{
    z-index: 999;
}
</style>
<template>
<!-- 
    导航栏以下展示组件
 -->
  <a-layout
    :style="{
      background: `url( ${require('@/assets/image/bg.jpg')} )`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }"
  >
    <a-row class="main_content">
      <!--  侧边栏 -->
      <a-col
        :md="{ span: '9', push: '15' }"
        :lg="{ span: '8', push: '16' }"
        :xl="{ span: '7', push: '17' }"
      >
        <slot name="sider" />
      </a-col>
      <!-- 左侧正文 -->
      <a-col
        :md="{ span: '14', pull: '9' }"
        :lg="{ span: '15', pull: '8' }"
        :xl="{ span: '16', pull: '7' }"
      >
        <slot name="main" />
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
  </a-layout>
</template>

<script>
export default {};
</script>

<style>
.main_content {
  height: auto;
  padding: 20px 30px;
  overflow-y: scroll;
}
.main_content::-webkit-scrollbar{
    width: 0;
}
.ant-layout-footer {
  margin-top: 20px;
  background: #ffffff;
}
</style>
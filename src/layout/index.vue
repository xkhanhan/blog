<template>
  <a-layout>
    <!-- 回到顶部 -->
    <a-back-top />
    <!-- 移动端的抽屉 -->
    <a-drawer
      placement="right"
      :closable="false"
      :visible="visible"
      @close="onClose"
    >
      <a-menu
        theme="light"
        mode="inline"
        v-model="current"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item :key="item2.id" v-for="item2 in menuItem">
          <router-link :to="item2.path">{{ item2.title }}</router-link>
        </a-menu-item>
      </a-menu>
    </a-drawer>
    <!-- pc端导航栏 -->
    <a-layout-header class="header">
      <a-row type="flex" :gutter="20">
        <a-col :xs="12" :md="0" class="header_center header_draweBtn">
          <a-icon type="pic-left" @click="showDrawer" />
        </a-col>
        <a-col
          class="header_logo header_center"
          :xs="12"
          :md="4"
          :lg="3"
          :xl="2"
        >
          <img src="@/assets/logo.png" alt="logo" />
        </a-col>
        <a-col class="header_input" :xs="0" :md="6" :lg="6">
          <a-input-search placeholder="请输入搜索内容" enter-button />
        </a-col>
        <a-col :xs="0" :md="14">
          <a-menu
            theme="dark"
            mode="horizontal"
            v-model="current"
            :style="{ lineHeight: '64px' }"
          >
            <a-menu-item :key="item.id" v-for="item in menuItem">
              <router-link :to="item.path">{{ item.title }}</router-link>
            </a-menu-item>
          </a-menu>
        </a-col>
      </a-row>
    </a-layout-header>
    <!-- 路由 -->
    <router-view></router-view>
  </a-layout>
</template>

<script>
export default {
  data() {
    return {
      current: ["1"],
      placement: "left",
      visible: false,
      menuItem: [
        { id: "1", title: "首页", path: "/index" },
        { id: "2", title: "分类", path: "/" },
        { id: "3", title: "归档", path: "/" },
        { id: "5", title: "留言板", path: "/" },
      ],
    };
  },
  methods: {
    showDrawer() {
      this.visible = !this.visible;
    },
    onClose() {
      this.visible = false;
    },
  },
};
</script>

<style>
.ant-layout {
  height: 100%;
}
.header_logo img {
  width: 94px;
}
.header_input .ant-input-search {
  margin-top: 16px;
}
.header_center {
  text-align: center;
}
.header_draweBtn {
  font-size: 30px;
  color: #fff;
}
</style>

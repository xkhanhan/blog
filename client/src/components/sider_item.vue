<template>
  <a-row class="item">
    <a-collapse  :default-active-key="defaultActiveKey">
      <template #expandIcon="">
        <a-icon :type="icon" />
      </template>
      <a-collapse-panel key="1" :header="title">
        <a-col :span="24">
          <slot />
        </a-col>
      </a-collapse-panel>
    </a-collapse>
  </a-row>
</template>

<script>
export default {
  props: {
    title: { // 标题
      type: String,
      default: "这是标题",
    },
    icon: { // 右边icon 图标
      type: String,
      default: "user",
    },
    defaultAn: { // 是否展开
      type: Boolean,
      default: true,
    },
  },
  computed: {
    defaultActiveKey() { // 根据 defaultAn 的参数 是否默认下折叠
      if (this.defaultAn) return "1";
      else return "0"
    },
  },
};
</script>

<style>
.item {
  width: 100%;
  margin-bottom: 10px;
  background-color: #fff;
}
.title {
  text-indent: 1em;
  line-height: 50px;
  height: 50px;
  width: 100%;
  align-content: start;
}
.title p {
  vertical-align: middle;
}
.title p span {
  font-weight: bold;
}
</style>
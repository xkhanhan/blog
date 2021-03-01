<template>
  <a-table
    :pagination="pagination"
    :columns="columns"
    :data-source="data"
    :scroll="{ x: 1200, y: 300 }"
    :style="{height: '100%'}"
  >
    <div slot="type" slot-scope="type">
      <a-tag v-for="(i, index) in type" :key="index">{{ i.name }}</a-tag>
    </div>
    <div slot="action">
      <a-button size="small" icon="edit"></a-button>
      <a-button size="small" icon="delete" type="danger"></a-button>
    </div>
  </a-table>
</template>
<script>
const columns = [
  {
    title: "标题",
    width: 100,
    dataIndex: "title",
    key: "title",
    fixed: "left",
  },
  { title: "简略内容", dataIndex: "brief", key: "brief", width: 300,ellipsis: true, },
  { title: "点击量", dataIndex: "click", key: "click", width: 100 },
  { title: "创建时间", dataIndex: "createdAt", key: "createdAt", width: 100 },
  { title: "修改时间", dataIndex: "updateAt", key: "updateAt", width: 100 },
  {
    title: "标签",
    dataIndex: "label",
    key: "label",
    width: 150,
    scopedSlots: { customRender: "type" },
  },
  {
    title: "Action",
    key: "operation",
    width: 100,
    scopedSlots: { customRender: "action" },
  },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    title: `hello ${i}`,
    brief: `我的第一篇个人博客${i}`,
    click: i,
    createdAt: "2020-02-26",
    updateAt: "202-02-27",
    label: [
      {
        name: "java",
      },
    ],
  });
}

export default {
  data() {
    return {
      data,
      columns,
      pagination: {
        onChange: async (page) => {
          const { responseData } = this;
          await responseData((page - 1) * 5, 5);
        },
        pageSize: 10,
        total: 10,
      },
    };
  },
};
</script>
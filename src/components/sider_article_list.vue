<template>
  <a-list item-layout="horizontal" :data-source="list" size="small" :locale="{emptyText : '这个人很懒一篇文章也没有'}">
    <a-list-item slot="renderItem" slot-scope="item">
      <a-list-item-meta :description="item.signature">
          <router-link slot="title" :to="{name : 'detailed_article', params : {id : item.id}}">
               {{ item.title }}
          </router-link>
      </a-list-item-meta>
    </a-list-item>
  </a-list>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
</style>
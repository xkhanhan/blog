<template>
  <a-row>
    <a-col class="sider_avater">
      <a-avatar
        :size="80"
        style="backgroundcolor: #fde3cf"
        :src="user_information.avater_img"
      />
      <h3 class="avater_name">
        {{ user_information.name }}
      </h3>
      <p v-if="user_information.signature">{{ user_information.signature }}</p>
    </a-col>
    <a-col class="information">
      <p v-for="(item, index) in user_information.information" :key="index">
        <span
          ><b>{{ item.title }}</b></span
        >
        <span> ：</span>
        <span>{{ item.contaienr }}</span>
      </p>
      <p class="love" v-if="user_information.love">
        <span>
          <b>兴趣爱好 </b>
        </span>
        <span> ：</span>
        <span>
          <a-badge
            style="margin: 0 5px"
            v-for="badgeItem in user_information.love"
            :key="badgeItem.title"
            :number-style="badgeItem.style"
            :count="badgeItem.title"
          />
        </span>
      </p>
      <p>
          <slot name="git" :href="user_information.href"/>
      </p>
    </a-col>
  </a-row>
</template>

<script>
export default {
  props: {
    user_information: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
</style>
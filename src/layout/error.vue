<template>
  <a-layout class="error_container">
    <a-empty description="页面走丢了" />
  </a-layout>
</template>

<script>
export default {};
</script>

<style scoped>
.error_container,
.ant-empty{
    display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
}

</style>
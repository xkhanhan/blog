<template>
  <div id="app">
    <transition name="layout">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style  scoped>
#app{
    height: 100%;
    min-height : 500px;
}
.layout-enter-active,
.layout-leave-active {
  transition: all 0.5s;
}
.layout-enter,
.layout-leave-to {
  opacity: 0;
  transform: translateY(50px);
}

</style>


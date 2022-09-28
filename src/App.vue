<template>
  <div id="app">
    <MenuNav></MenuNav>
    <router-view />
  </div>
</template>

<script>
import MenuNav from './components/MenuNav.vue';
export default { components: { MenuNav } };
</script>

<style></style>

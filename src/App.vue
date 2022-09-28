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

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

h1,
h2,
h3,
h4,
h5,
h6,
ul,
li,
a,
p,
span {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Montserrat', sans-serif;
  background: #f5f5f5;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.titulo {
  font-size: 2.25rem;
  font-weight: bold;
  color: #1d74c5;
  text-transform: uppercase;
  margin: 50px 0;
}
</style>

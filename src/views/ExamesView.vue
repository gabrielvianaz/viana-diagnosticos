<template>
  <section class="exames container">
    <h1 class="titulo text-center">Exames</h1>
    <ListaExames></ListaExames>
  </section>
</template>

<script>
import ListaExames from '@/components/Exames/ListaExames.vue';
export default {
  name: 'ExamesView',
  data() {
    return {};
  },
  components: { ListaExames },
};
</script>

<style></style>

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
  components: { ListaExames },
  created() {
    document.title = 'Viana Diagnósticos | Exames';
  },
};
</script>

<style></style>

<template>
  <section class="unidades">
    <h1 class="titulo text-center">Nossas Unidades</h1>
    <NossasUnidades></NossasUnidades>
  </section>
</template>

<script>
import NossasUnidades from '@/components/Unidades/NossasUnidades.vue';
export default {
  name: 'UnidadesView',
  components: { NossasUnidades },
  created() {
    document.title = 'Viana Diagnósticos | Nossas unidades';
  },
};
</script>

<style></style>

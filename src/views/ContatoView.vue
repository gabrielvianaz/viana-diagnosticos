<template>
  <section class="contato">
    <h1 class="titulo text-center">Contato</h1>
    <ContatoForm></ContatoForm>
  </section>
</template>

<script>
import ContatoForm from '@/components/Contato/ContatoForm.vue';
export default {
  name: 'ContatoView',
  components: { ContatoForm },
  created() {
    document.title = 'Viana Diagnósticos | Contato';
  },
};
</script>

<style></style>

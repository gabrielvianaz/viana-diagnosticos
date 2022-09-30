<template>
  <section class="home">
    <HomeIntro></HomeIntro>
    <NossosServicos></NossosServicos>
    <InfoCards></InfoCards>
    <ConveniosAceitos></ConveniosAceitos>
  </section>
</template>

<script>
import HomeIntro from '@/components/Home/HomeIntro.vue';
import NossosServicos from '../components/Home/NossosServicos.vue';
import InfoCards from '@/components/Home/InfoCards.vue';
import ConveniosAceitos from '@/components/Home/ConveniosAceitos.vue';
export default {
  name: 'HomeView',
  components: { HomeIntro, NossosServicos, InfoCards, ConveniosAceitos },
  created() {
    document.title = 'Viana Diagnósticos';
  },
};
</script>

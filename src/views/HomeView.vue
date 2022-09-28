<template>
  <div class="home">
    <HomeIntro></HomeIntro>
    <NossosServicos></NossosServicos>
    <InfoCards></InfoCards>
  </div>
</template>

<script>
import HomeIntro from '@/components/Home/HomeIntro.vue';
import NossosServicos from '../components/Home/NossosServicos.vue';
import InfoCards from '@/components/Home/InfoCards.vue';
export default {
  name: 'HomeView',
  components: { HomeIntro, NossosServicos, InfoCards },
};
</script>

<template>
  <section class="sobre">
    <div class="container">
      <div class="row">
        <div class="col-4 menu">
          <SobreMenu></SobreMenu>
        </div>
        <div class="col-8 info">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SobreMenu from '@/components/Sobre/SobreMenu.vue';
export default {
  name: 'SobreView',
  components: { SobreMenu },
};
</script>

<style>
.sobre {
  margin-top: 50px;
}

.sobre .titulo {
  margin: 0 0 30px 0;
}
</style>

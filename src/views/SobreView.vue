<template>
  <section class="sobre">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 menu">
          <MenuSobre></MenuSobre>
        </div>
        <div class="col-lg-8 info">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MenuSobre from '@/components/Sobre/MenuSobre.vue';
export default {
  name: 'SobreView',
  components: { MenuSobre },
};
</script>

<style>
.sobre {
  margin-top: 50px;
}

.sobre .titulo {
  margin: 0 0 30px 0;
}

/* Responsivo */

@media screen and (max-width: 991px) {
  .sobre {
    margin-top: 30px;
  }

  .sobre .titulo {
    margin-top: 30px;
  }
}
</style>

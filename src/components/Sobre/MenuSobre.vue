<template>
  <div class="menu-sobre">
    <router-link class="menu-option" to="/sobre/historia"
      ><img src="@/assets/sobre/historia.svg" />História</router-link
    >
    <router-link class="menu-option" to="/sobre/missao"
      ><img src="@/assets/sobre/missao.svg" />Missão, visão e
      valores</router-link
    >
    <router-link class="menu-option" to="/sobre/corpoclinico"
      ><img src="@/assets/sobre/corpoclinico.svg" />Corpo clínico</router-link
    >
    <router-link class="menu-option" to="/sobre/certificacoes"
      ><img src="@/assets/sobre/certificacoes.svg" />Certificações</router-link
    >
  </div>
</template>

<script>
export default {
  name: 'MenuSobre',
  methods: {
    ativarComponente() {
      this.componenteAtivo = +event.target.id;
    },
  },
};
</script>

<style scoped>
a.menu-option {
  text-decoration: none;
  color: #1e1e1e;
  font-size: 1.5rem;
  font-weight: bold;
}

a.router-link-exact-active {
  color: #1d74c5;
}

.menu-option {
  display: grid;
  grid-template-columns: 50px 1fr;
}

.menu-option img {
  justify-self: end;
  align-self: center;
  margin-right: 20px;
}

/* Responsivo */

@media screen and (max-width: 599px) {
  .menu-sobre {
    margin-left: 30px;
  }
}

@media screen and (min-width: 992px) and (max-width: 1199px) {
  a.menu-option {
    font-size: 1.25rem;
  }
}
</style>

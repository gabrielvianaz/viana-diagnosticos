<template>
  <div class="menu-sobre">
    <router-link
      v-for="field in fields"
      class="menu-option"
      :key="field.id"
      :id="field.id"
      :to="field.route"
      @click.native="ativarComponente"
      ><img
        :id="field.id"
        :src="
          componenteAtivo === field.id
            ? require(`@/${field.srcAtivo}`)
            : require(`@/${field.src}`)
        "
      />{{ field.titulo }}</router-link
    >
  </div>
</template>

<script>
export default {
  name: 'MenuSobre',
  data() {
    return {
      fields: [
        {
          id: 1,
          route: '/sobre/historia',
          titulo: 'História',
          src: 'assets/sobre/historia.svg',
          srcAtivo: 'assets/sobre/historia-ativo.svg',
        },
        {
          id: 2,
          route: '/sobre/missao',
          titulo: 'Missão, visão e valores',
          src: 'assets/sobre/missao.svg',
          srcAtivo: 'assets/sobre/missao-ativo.svg',
        },
        {
          id: 3,
          route: '/sobre/corpoclinico',
          titulo: 'Corpo clínico',
          src: 'assets/sobre/corpoclinico.svg',
          srcAtivo: 'assets/sobre/corpoclinico-ativo.svg',
        },
        {
          id: 4,
          route: '/sobre/certificacoes',
          titulo: 'Certificações',
          src: 'assets/sobre/certificacoes.svg',
          srcAtivo: 'assets/sobre/certificacoes-ativo.svg',
        },
      ],
      componenteAtivo: 1,
    };
  },
  methods: {
    ativarComponente() {
      console.log(event.target);
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
  a.menu-option {
    font-size: 1.25rem;
  }

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

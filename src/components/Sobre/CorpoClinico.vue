<template>
  <div class="corpo-clinico">
    <div v-if="!loading">
      <h1 class="titulo">Corpo Clínico</h1>
      <div
        class="membro"
        :class="{ reverse: index % 2 === 1 }"
        v-for="(membro, index) in corpoClinico"
        :key="membro.id"
      >
        <img :src="require(`../../${membro.img}`)" />
        <div class="dados">
          <h6>{{ membro.nome }}</h6>
          <p>{{ membro.descricao }}</p>
        </div>
      </div>
    </div>
    <div v-else class="spinner-border azul" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CorpoClinico',
  data() {
    return {
      loading: true,
      corpoClinico: null,
    };
  },
  methods: {
    async getCorpoClinico() {
      this.corpoClinico = await (
        await fetch('https://fakeapi-laboratorio.herokuapp.com/corpoclinico')
      ).json();
      this.loading = false;
    },
  },
  created() {
    this.getCorpoClinico();
  },
};
</script>

<style>
.membro {
  display: grid;
  grid-template-columns: 300px 1fr;
  margin-bottom: 30px;
}
.membro img {
  height: 150px;
  border-radius: 5px;
  margin-bottom: 30px;
}
.membro .dados {
  align-self: center;
}
.membro .dados h6 {
  font-weight: bold;
  font-size: 1rem;
  text-transform: uppercase;
}
.membro.reverse {
  grid-template-columns: 1fr 300px;
}
.membro.reverse .dados {
  grid-column: 1 / 2;
  grid-row: 1;
}
.membro.reverse img {
  grid-column: 2 / 3;
  justify-self: end;
}
.corpo-clinico div:last-child {
  margin-bottom: 0;
}
</style>

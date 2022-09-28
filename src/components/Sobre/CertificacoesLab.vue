<template>
  <div class="certificacoes">
    <div v-if="!loading">
      <h1 class="titulo">Certificações</h1>
      <div
        class="certificacao"
        :class="{ reverse: index % 2 === 1 }"
        v-for="(certificacao, index) in certificacoes"
        :key="certificacao.id"
      >
        <img :src="require(`../../${certificacao.img}`)" />
        <div class="dados">
          <h6>{{ certificacao.nome }}</h6>
          <p>{{ certificacao.descricao }}</p>
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
  name: 'CertificacoesLab',
  data() {
    return {
      loading: true,
      certificacoes: null,
    };
  },
  methods: {
    async getCertificacoes() {
      this.certificacoes = await (
        await fetch('https://fakeapi-laboratorio.herokuapp.com/certificacoes')
      ).json();
      this.loading = false;
    },
  },
  created() {
    this.getCertificacoes();
  },
};
</script>

<style scoped>
.certificacao {
  display: grid;
  grid-template-columns: 300px 1fr;
  margin-bottom: 30px;
}
.certificacao img {
  height: 150px;
  border-radius: 5px;
  margin-bottom: 30px;
}
.certificacao .dados {
  align-self: center;
}
.certificacao .dados h6 {
  font-weight: bold;
  font-size: 1rem;
  text-transform: uppercase;
}
.certificacao.reverse {
  grid-template-columns: 1fr 300px;
}
.certificacao.reverse .dados {
  grid-column: 1 / 2;
  grid-row: 1;
}
.certificacao.reverse img {
  grid-column: 2 / 3;
  justify-self: end;
}
.certificacoes div:last-child {
  margin-bottom: 0;
}
</style>

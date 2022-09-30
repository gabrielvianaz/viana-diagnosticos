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
    document.title = 'Viana Diagnósticos | Certificações';
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
  justify-self: center;
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
  justify-self: center;
}

.certificacoes div:last-child {
  margin-bottom: 0;
}

.dados h6,
.dados p {
  color: #1e1e1e;
}

/* Responsivo */

@media screen and (max-width: 599px) {
  .certificacao {
    grid-template-columns: 150px 1fr;
  }

  .certificacao.certificacao.reverse {
    grid-template-columns: 1fr 150px;
  }

  .certificacao img {
    max-width: 140px;
    height: auto;
    margin-right: 15px;
    align-self: center;
  }

  .certificacao.reverse img {
    margin: 0 0 0 15px;
  }

  .certificacao .dados h6,
  .certificacao .dados p {
    font-size: 0.875rem;
  }
}

@media screen and (min-width: 600px) and (max-width: 767px) {
  .certificacao {
    grid-template-columns: 200px 1fr;
  }

  .certificacao.reverse {
    grid-template-columns: 1fr 200px;
  }

  .certificacao img {
    max-width: 100%;
    margin-right: 15px;
  }

  .certificacao.reverse img {
    margin: 0 0 0 15px;
  }

  .certificacao .dados p {
    font-size: 0.875rem;
  }
}

@media screen and (min-width: 992px) and (max-width: 1199px) {
  .certificacao {
    grid-template-columns: 200px 1fr;
  }

  .certificacao.reverse {
    grid-template-columns: 1fr 200px;
  }
}
</style>

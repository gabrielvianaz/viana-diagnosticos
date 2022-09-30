<template>
  <section class="convenios">
    <div class="container">
      <h1 class="titulo text-center">Convênios Aceitos</h1>
      <div v-if="!loading">
        <div class="row convenios-lista" v-if="convenios">
          <div
            class="col convenio"
            v-for="(convenio, index) in quantidadeConveniosExibidos"
            :key="index"
          >
            <img
              :src="require(`../../${convenios[4 * paginaAtiva + index].img}`)"
            />
          </div>
        </div>
        <div class="botoes text-center">
          <span
            v-for="(paginas, index) in quantidadePaginas"
            :class="{ ativo: paginaAtiva === index }"
            :key="index"
            :id="index"
            @click="ativarBotao"
          ></span>
        </div>
      </div>
      <div v-else class="spinner-border azul" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ConveniosAceitos',
  data() {
    return {
      convenios: null,
      paginaAtiva: null,
      quantidadeConveniosExibidos: null,
      loading: true,
    };
  },
  methods: {
    async getConvenios() {
      this.convenios = await (
        await fetch('https://fakeapi-laboratorio.herokuapp.com/convenios')
      ).json();
      this.loading = false;
      this.paginaAtiva = 0;
    },
    ativarBotao() {
      this.paginaAtiva = +event.target.id;
    },
  },
  created() {
    this.getConvenios();
  },
  computed: {
    quantidadePaginas() {
      return Math.ceil(this.convenios.length / 4);
    },
  },
  watch: {
    paginaAtiva() {
      this.quantidadeConveniosExibidos =
        this.paginaAtiva * 4 + 4 > this.convenios.length
          ? this.convenios.length - this.paginaAtiva * 4
          : 4;
      this.estiloConvenios = {
        ['grid-template-columns']: '1fr '.repeat(
          this.quantidadeConveniosExibidos
        ),
      };
    },
  },
};
</script>

<style scoped>
.titulo {
  margin-bottom: 10px;
}

.convenios-lista {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
}

.convenio {
  padding: 0 20px 20px 20px;
  display: grid;
  height: 200px;
  grid-template-columns: 1fr;
  border-radius: 5px;
  align-items: center;
  justify-items: center;
}

.convenio img {
  max-width: 100%;
}

.botoes span {
  height: 20px;
  width: 20px;
  border: 3px solid #1d74c5;
  border-radius: 50%;
  margin-right: 10px;
  display: inline-block;
  cursor: pointer;
}

.botoes span.ativo {
  background: #1d74c5;
}

/* Responsivo */

@media only screen and (max-width: 767px) {
  .convenios-lista {
    grid-template-columns: 1fr 1fr;
    grid-gap: 0;
  }

  .titulo {
    margin-bottom: 0px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .convenios-lista {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-bottom: 20px;
  }

  .convenio {
    height: 100px;
  }
}

@media only screen and (min-width: 992px) and (max-width: 1399px) {
  .titulo {
    margin-bottom: 0;
  }
}
</style>

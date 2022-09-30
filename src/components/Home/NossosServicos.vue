<template>
  <section class="servicos">
    <div class="container">
      <h1 class="titulo text-center">Nossos Serviços</h1>
      <div v-if="!loading" class="servicos-lista">
        <div
          class="row"
          v-for="(servico, index) in servicosImpar"
          :key="servico.id"
        >
          <div class="col-lg servico">
            <div class="servico-img">
              <img :src="require(`../../${servico.img}`)" />
            </div>
            <div class="servico-dados">
              <h5>{{ servico.nome }}</h5>
              <p>{{ servico.descricao }}</p>
            </div>
          </div>
          <div class="col-lg servico">
            <div class="servico-img">
              <img :src="require(`../../${servicosPar[index].img}`)" />
            </div>
            <div class="servico-dados">
              <h5>{{ servicosPar[index].nome }}</h5>
              <p>{{ servicosPar[index].descricao }}</p>
            </div>
          </div>
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
  name: 'NossosServicos',
  data() {
    return {
      servicos: null,
      servicosImpar: null,
      servicosPar: null,
      loading: true,
    };
  },
  methods: {
    async getServicos() {
      this.servicos = await (
        await fetch('https://fakeapi-laboratorio.herokuapp.com/servicos')
      ).json();
      this.loading = false;
    },
  },
  created() {
    this.getServicos();
  },
  watch: {
    servicos() {
      this.servicosImpar = this.servicos.filter(
        (servico) => servico.id % 2 === 1
      );
      this.servicosPar = this.servicos.filter(
        (servico) => servico.id % 2 === 0
      );
    },
  },
};
</script>

<style scoped>
.servicos-lista .row {
  margin-bottom: 30px;
}

.servicos-lista .row:last-of-type {
  margin-bottom: 0;
}

.servico {
  padding: 20px;
  display: grid;
  height: 200px;
  background: white;
  grid-template-columns: 1fr 360px;
  margin-right: 30px;
  box-shadow: 5px 5px 9px -2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  align-items: center;
  justify-items: center;
}

.servico:last-of-type {
  margin-right: 0;
}

.servico img {
  width: 210px;
  border-radius: 5px;
}

.servico-dados {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.servico-dados h5 {
  align-self: center;
  font-size: 1.25rem;
  font-weight: bold;
  color: #1d74c5;
  margin-bottom: 8px;
}

.servico-dados p {
  font-size: 0.875rem;
  color: #1e1e1e;
  margin-bottom: 0;
}

/* Responsivo */

@media only screen and (max-width: 599px) {
  h1.titulo {
    margin: 30px 0;
  }

  .spinner-border.azul {
    margin-bottom: 30px;
  }

  div.servico {
    display: flex;
    flex-direction: column;
    max-width: 300px;
    height: 340px;
    margin: 0 auto 30px auto;
    padding: 10px;
    align-items: center;
    justify-content: center;
  }

  .servico:last-of-type {
    margin: 0 auto 30px auto;
  }

  .servico img {
    max-width: 200px;
    margin: 0;
  }

  .servico-dados {
    justify-content: center;
    text-align: center;
  }

  .servico-dados h5 {
    font-size: 1rem;
    margin: 10px auto;
  }

  .servicos-lista .row {
    margin: 0;
  }
}

@media only screen and (min-width: 600px) and (max-width: 767px) {
  h1.titulo {
    margin: 30px 0;
  }

  .spinner-border.azul {
    margin-bottom: 30px;
  }

  .servico {
    display: grid;
    grid-template-columns: 200px 1fr;
    padding: 10px;
    width: 650px;
    height: 200px;
    margin-bottom: 30px;
    justify-items: center;
    align-items: center;
  }

  .servico-dados {
    justify-content: center;
    text-align: center;
  }

  .servico img {
    max-width: 170px;
    justify-self: center;
    margin: 0;
  }

  .servicos-lista .row {
    margin: 0;
  }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  h1.titulo {
    margin: 30px 0;
  }

  .spinner-border.azul {
    margin-bottom: 30px;
  }

  .servico {
    grid-template-columns: 300px 1fr;
    justify-items: center;
    margin-bottom: 30px;
  }

  .servico-dados {
    justify-content: center;
    text-align: center;
  }

  .servico img {
    width: 210px;
    justify-self: center;
    margin: 0;
  }

  .servico-dados {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .servicos-lista .row {
    margin: 0;
  }
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .servico {
    grid-template-columns: 200px 1fr;
    align-items: center;
    justify-items: center;
  }

  .servico img {
    width: 170px;
    margin-right: 0;
  }
}

@media only screen and (min-width: 1200px) and (max-width: 1399px) {
  .servico {
    grid-template-columns: 250px 1fr;
    justify-items: center;
    margin-bottom: 30px;
  }

  .servico img {
    width: 210px;
    justify-self: center;
    margin: 0;
  }

  .servico-dados {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .servicos-lista .row {
    margin: 0;
  }
}
</style>

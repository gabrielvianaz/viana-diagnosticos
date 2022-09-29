<template>
  <div v-if="!loading" class="container-fluid unidades">
    <h1 class="titulo text-center">Nossas Unidades</h1>
    <div class="container">
      <span @click="voltarSlide" class="slide-control">&#60;</span>
      <div class="unidade-card">
        <div class="row">
          <div class="unidade">
            <div class="unidade-img">
              <img
                v-if="unidades[unidadeExibida]"
                :src="require(`../../${unidades[unidadeExibida].img}`)"
              />
            </div>
            <div v-if="unidades[unidadeExibida]" class="unidade-dados">
              <h4 class="unidade-nome">{{ unidades[unidadeExibida].nome }}</h4>
              <div class="unidade-info">
                <div class="dados-titulo">
                  <img src="@/assets/unidades/endereco.svg" />
                  <p>Endereço</p>
                </div>
                <p class="dados">{{ unidades[unidadeExibida].endereco }}</p>
                <div class="dados-titulo">
                  <img src="@/assets/unidades/telefone.svg" />
                  <p>Telefone</p>
                </div>
                <p class="dados">{{ unidades[unidadeExibida].telefone }}</p>
                <div class="dados-titulo">
                  <img src="@/assets/unidades/whatsapp.svg" />
                  <p>WhatsApp</p>
                </div>
                <p class="dados">{{ unidades[unidadeExibida].whatsapp }}</p>
                <div class="dados-titulo">
                  <img src="@/assets/unidades/horario.svg" />
                  <p>Horário de atendimento</p>
                </div>
                <p class="dados">
                  Segunda a sexta-feira:
                  {{ unidades[unidadeExibida].horarioSegSex }}
                </p>
                <p class="dados">
                  Sábado: {{ unidades[unidadeExibida].horarioSab }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span @click="avancarSlide" class="slide-control">&#62;</span>
    </div>
  </div>
  <div v-else class="container">
    <div class="spinner-border azul" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NossasUnidades',
  data() {
    return {
      animar: false,
      unidadeExibida: 0,
      unidades: null,
      loading: true,
    };
  },
  methods: {
    async getUnidades() {
      this.unidades = await (
        await fetch('https://fakeapi-laboratorio.herokuapp.com/unidades')
      ).json();
      this.loading = false;
    },
    voltarSlide() {
      if (this.unidadeExibida === 0) {
        this.unidadeExibida = this.unidades.length - 1;
      } else {
        this.unidadeExibida--;
      }
      this.animarSlide();
    },
    avancarSlide() {
      if (this.unidadeExibida === this.unidades.length - 1) {
        this.unidadeExibida = 0;
      } else {
        this.unidadeExibida++;
      }
      this.animarSlide();
    },
    animarSlide() {
      this.animar = true;
      setTimeout(() => (this.animar = false), '1000');
    },
  },
  created() {
    this.getUnidades();
  },
};
</script>

<style scoped>
.spinner-border {
  margin-top: 50px;
}

.unidades .container {
  display: grid;
  grid-template-columns: 20px 1fr 20px;
}

.slide-control {
  align-self: center;
  color: #1d74c5;
  font-size: 2.25rem;
  font-weight: bold;
  cursor: pointer;
}

.unidade-card {
  width: 1100px;
  margin: 0 auto;
  box-shadow: 5px 5px 9px -2px rgba(0, 0, 0, 0.25);
}

.unidade {
  display: grid;
  grid-template-columns: 380px 1fr;
}

.unidade-img img {
  height: 350px;
  border-radius: 5px;
}

.unidade-nome {
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: #1d74c5;
  text-transform: uppercase;
  margin-top: 20px;
}

.unidade-nome:after {
  display: block;
  content: '';
  width: 50px;
  height: 5px;
  background: #1d74c5;
  margin: 10px auto;
  margin-bottom: 20px;
}

.unidade-dados {
  border-radius: 5px;
  height: 350px;
  background: white;
}

.unidade-dados p {
  color: #1d74c5;
}

.dados-titulo {
  display: grid;
  grid-template-columns: 20px 1fr;
  align-items: center;
}

.unidade-dados .dados-titulo img {
  width: 16px;
}

.dados-titulo p {
  font-size: 1rem;
  color: #1d74c5;
  font-weight: bold;
  align-self: center;
  margin: 0;
}

.unidade-info {
  margin-left: 50px;
}

.dados {
  margin-bottom: 5px;
}

@media screen and (max-width: 599px) {
  .unidade {
    grid-template-columns: 300px;
  }

  .unidade-card {
    width: 300px;
  }

  .unidade-img img {
    max-width: 100%;
    height: 230px;
  }

  .unidade-dados {
    grid-row: 2;
    height: 400px;
  }

  .unidade-info {
    margin: 0;
    padding: 0 20px;
  }
}

@media screen and (min-width: 600px) and (max-width: 767px) {
  .unidade {
    grid-template-columns: 400px;
  }

  .unidade-card {
    width: 400px;
  }

  .unidade-img img {
    max-width: 100%;
  }

  .unidade-dados {
    grid-row: 2;
    height: 400px;
  }

  .unidade-info {
    margin: 0;
    padding: 0 20px;
  }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
  .unidade {
    grid-template-columns: 500px;
  }

  .unidade-card {
    width: 500px;
  }

  .unidade-img img {
    max-width: 100%;
    height: 380px;
  }

  .unidade-dados {
    grid-row: 2;
    height: 350px;
  }

  .unidade-info {
    margin: 0;
    padding: 0 20px;
  }
}

@media screen and (min-width: 992px) and (max-width: 1199px) {
  .unidade-card {
    width: 800px;
  }

  .unidade-info {
    margin: 0;
    padding: 0 20px;
  }
}

@media screen and (min-width: 1200px) and (max-width: 1399px) {
  .unidade-card {
    width: 1000px;
  }

  .unidade-info {
    margin: 0;
    padding: 0 20px;
  }
}
</style>

<template>
  <div>
    <div v-if="!loading">
      <div
        v-if="examesExibidos"
        class="filtro d-flex align-items-end flex-column"
      >
        <div>
          <label for="filtroExames">Setor:</label>
          <select name="filtroExames" id="filtroExames" v-model="filtro">
            <option value="Todos">Todos</option>
            <option v-for="setor in setores" :key="setor" :value="setor">
              {{ setor }}
            </option>
          </select>
        </div>
      </div>
      <div class="exames-container">
        <div class="exames-exame">
          <div
            v-for="(exame, index) in examesExibidos"
            :key="examesFiltrados[20 * (paginaAtiva - 1) + index].id"
            class="exame"
          >
            <p
              :id="20 * (paginaAtiva - 1) + index"
              @click="abrirModal"
              data-bs-toggle="modal"
              data-bs-target="#modalExames"
            >
              {{ examesFiltrados[20 * (paginaAtiva - 1) + index].nome }}
            </p>
          </div>
        </div>
        <div v-if="examesFiltrados.length" class="botoes">
          <span
            v-for="(paginas, index) in quantidadePaginas"
            :class="{ ativo: paginaAtiva === index + 1 }"
            :key="index + 1"
            :id="index + 1"
            @click="ativarBotao"
          >
            {{ index + 1 }}
          </span>
        </div>
      </div>
      <div
        class="modal fade"
        id="modalExames"
        tabindex="-1"
        aria-labelledby="modalExamesLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modalExamesLabel">
                {{ exameModal.nome }}
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <p><b>Setor:</b> {{ exameModal.setor }}</p>
              <p><b>Material de coleta:</b> {{ exameModal.material }}</p>
              <p><b>Interpretação:</b> {{ exameModal.interpretacao }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="container">
      <div class="spinner-border azul" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListaExames',
  data() {
    return {
      exames: null,
      examesFiltrados: null,
      filtro: 'Todos',
      setores: '',
      paginaAtiva: null,
      quantidadePaginas: null,
      examesExibidos: null,
      exameModal: {
        nome: '',
        setor: '',
        material: '',
        interpretacao: '',
      },
      loading: true,
    };
  },
  methods: {
    async getExames() {
      this.exames = await (
        await fetch('https://fakeapi-laboratorio.herokuapp.com/exames')
      ).json();
      this.paginaAtiva = 1;
      this.definirSetores();
      this.examesFiltrados = this.exames;
      this.quantidadePaginas = Math.ceil(this.examesFiltrados.length / 20);
      this.loading = false;
    },
    ativarBotao() {
      this.paginaAtiva = +event.target.id;
    },
    abrirModal() {
      this.exameModal.nome = this.examesFiltrados[+event.target.id].nome;
      this.exameModal.setor = this.examesFiltrados[+event.target.id].setor;
      this.exameModal.material =
        this.examesFiltrados[+event.target.id].material;
      this.exameModal.interpretacao =
        this.examesFiltrados[+event.target.id].intepretacao;
    },
    definirSetores() {
      this.exames.forEach((exame) => {
        if (!this.setores.includes(exame.setor)) {
          this.setores += `${exame.setor} `;
        }
      });
      this.setores = this.setores
        .split(' ')
        .filter((setor) => !setor === false);
    },
  },
  created() {
    this.getExames();
  },
  watch: {
    paginaAtiva() {
      if (this.examesFiltrados) {
        this.examesExibidos =
          this.examesFiltrados.length - (this.paginaAtiva - 1) * 20 < 20
            ? this.examesFiltrados.length - (this.paginaAtiva - 1) * 20
            : 20;
      }
    },
    filtro() {
      this.paginaAtiva = 1;
      if (this.filtro === 'Todos') {
        this.examesFiltrados = this.exames;
        this.examesExibidos =
          this.examesFiltrados.length - (this.paginaAtiva - 1) * 20 < 20
            ? this.examesFiltrados.length - (this.paginaAtiva - 1) * 20
            : 20;
      } else {
        this.examesFiltrados = this.exames.filter(
          (exame) => exame.setor === this.filtro
        );
      }
      this.quantidadePaginas = Math.ceil(this.examesFiltrados.length / 20);
      if (this.examesFiltrados.length < 20) {
        this.examesExibidos = this.examesFiltrados.length;
      } else {
        if (this.examesFiltrados.length - (this.paginaAtiva - 1) * 20 < 20) {
          this.examesFiltrados.length - (this.paginaAtiva - 1) * 20 < 20;
        } else {
          20;
        }
      }
    },
  },
};
</script>

<style scoped>
.exames .titulo {
  margin-bottom: 0;
}

.exames-container .botoes {
  display: flex;
  text-align: center;
  justify-content: center;
}

.exames-container .botoes span {
  padding: 10px;
  width: 50px;
  border: 3px solid #1d74c5;
  border-radius: 5px;
  margin-right: 10px;
  cursor: pointer;
}

.exames-container .botoes span:hover {
  color: white;
  background: #1d74c5;
}

.exames-container .botoes span.ativo {
  color: white;
  background: #1d74c5;
}

.exames-container {
  background: white;
  border-radius: 5px;
  box-shadow: 5px 5px 9px -2px rgba(0, 0, 0, 0.25);
  margin-bottom: 100px;
  padding-bottom: 50px;
}

.exames-exame {
  padding: 50px 50px 20px 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

.exames-exame .exame {
  display: grid;
  border-left: 3px solid #1d74c5;
  margin: 0 30px 30px 0;
  height: 50px;
}

.exames-exame p {
  text-transform: uppercase;
  align-self: center;
  padding-left: 10px;
}

.exames-exame p:hover {
  color: #1d74c5;
}

.modal-header {
  border: 0;
  font-size: 2rem;
  color: #1d74c5;
  text-transform: uppercase;
  padding-bottom: 0;
}

.modal-header h5 {
  font-weight: bold;
}

.modal-body p {
  margin-bottom: 10px;
  color: #1e1e1e;
}

.filtro {
  margin-bottom: 20px;
  color: #1d74c5;
}

.filtro label {
  font-weight: bold;
  font-size: 1.125rem;
  margin-right: 10px;
  padding: 0;
}
.filtro select {
  padding: 5px;
  border: 3px solid #1d74c5;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  border-radius: 5px;
  background-image: url('@/assets/exames/select.png');
  background-size: auto 70%;
  background-repeat: no-repeat;
  background-position: right 10px center;
  cursor: pointer;
  font-size: 1em;
  color: #1d74c5;
  width: 170px;
}
.filtro select:focus {
  outline: none;
}

/* Responsivo */

@media only screen and (max-width: 767px) {
  .exames-exame {
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .exames-exame p {
    font-size: 0.75rem;
    margin: 0;
  }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .exames-exame {
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .exames-exame p {
    font-size: 1rem;
  }
}
</style>

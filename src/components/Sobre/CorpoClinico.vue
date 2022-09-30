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
    document.title = 'Viana Diagnósticos | Corpo clínico';
  },
};
</script>

<style scoped>
.membro {
  display: grid;
  grid-template-columns: 300px 1fr;
  margin-bottom: 30px;
}

.membro img {
  height: 150px;
  border-radius: 5px;
}

.membro .dados {
  align-self: center;
}

.membro .dados h6 {
  font-weight: bold;
  font-size: 1rem;
  text-transform: uppercase;
}

.membro .dados p {
  margin: 0;
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

.dados h6,
.dados p {
  color: #1e1e1e;
}

.corpo-clinico div:last-child {
  margin-bottom: 0;
}

/* Responsivo */

@media screen and (max-width: 599px) {
  .membro {
    grid-template-columns: 150px 1fr;
  }

  .membro.membro.reverse {
    grid-template-columns: 1fr 150px;
  }

  .membro img {
    max-width: 140px;
    height: auto;
    margin-right: 15px;
    align-self: center;
  }

  .membro.reverse img {
    margin: 0 0 0 15px;
  }

  .membro .dados h6,
  .membro .dados p {
    font-size: 0.875rem;
  }
}

@media screen and (min-width: 600px) and (max-width: 767px) {
  .membro {
    grid-template-columns: 200px 1fr;
  }

  .membro.reverse {
    grid-template-columns: 1fr 200px;
  }

  .membro img,
  .membro.reverse img {
    max-width: 100%;
    height: auto;
  }

  .membro .dados {
    margin-left: 10px;
  }

  .membro.reverse .dados {
    margin: 0 10px 0 0;
  }

  .membro .dados p {
    font-size: 0.875rem;
  }
}
</style>

<template>
  <div>
    <nav class="navbar navbar-expand-lg fixed-top">
      <div class="container">
        <router-link to="/">
          <a href="/" class="navbar-brand">
            <img
              class="logo"
              src="@/assets/logo.png"
              alt="Viana Diagnósticos"
            />
          </a>
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link class="nav-link" to="/sobre">Sobre</router-link>
            <router-link class="nav-link" to="/unidades">Unidades</router-link>
            <router-link class="nav-link" to="/exames">Exames</router-link>
            <router-link class="nav-link" to="/contato">Contato</router-link>
            <button
              class="nav-link resultados"
              data-bs-toggle="modal"
              data-bs-target="#modalResultados"
            >
              Resultados
            </button>
          </div>
        </div>
      </div>
    </nav>
    <ModalResultados></ModalResultados>
  </div>
</template>

<script>
import ModalResultados from './ModalResultados.vue';
export default { name: 'MenuNav', components: { ModalResultados } };
</script>

<style scoped>
nav {
  background: white;
  box-shadow: 5px 5px 9px -2px rgba(0, 0, 0, 0.25);
}

.navbar-collapse {
  flex-grow: 0;
}

a {
  display: inline-block;
  text-decoration: none;
  color: #1e1e1e;
  margin-right: 10px;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  align-self: center;
}

.show a,
.collapsing a {
  align-self: flex-start;
}

a:hover {
  color: #1d74c5;
}

a.router-link-active {
  color: #1d74c5;
  font-weight: bold;
}

.resultados {
  background: white;
  border: 3px solid #1d74c5;
  border-radius: 5px;
  color: #1d74c5;
  text-transform: uppercase;
  font-weight: bold;
  padding: 8px 15px;
  margin-right: 0px;
  width: fit-content;
}

.resultados:hover {
  background: #1d74c5;
  color: white;
}
</style>

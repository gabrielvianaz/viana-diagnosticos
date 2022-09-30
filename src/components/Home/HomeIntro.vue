<template>
  <div class="intro">
    <div class="container d-flex justify-content-center text-center">
      <div class="intro-dados">
        <h1 class="titulo-intro">Excelência em Medicina Diagnóstica</h1>
        <p class="descricao-intro">
          Estamos no mercado há mais de 20 anos, com uma história de muito
          trabalho e dedicação, oferecendo um serviço que segue altos padrões de
          qualidade.
        </p>
        <button class="btn btn-intro" @click="$router.push('sobre')">
          Conheça nossa história
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeIntro',
};
</script>

<style scoped>
.intro {
  font-family: 'Montserrat', sans-serif;
  background: url('@/assets/home/home-intro.png');
  height: 350px;
  color: white;
}

.titulo-intro {
  padding-top: 50px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.25rem;
  position: relative;
  width: 475px;
}

.titulo-intro::after {
  display: block;
  content: '';
  width: 100px;
  height: 5px;
  background: white;
  margin: 10px auto;
}

.descricao-intro {
  margin: 20px auto;
  width: 420px;
  font-size: 1rem;
}

button.btn.btn-intro {
  color: #1d74c5;
  font-size: 1rem;
  font-weight: bold;
  background: white;
  box-shadow: 5px 5px 9px -2px rgba(0, 0, 0, 0.25);
}

button.btn.btn-intro:hover {
  color: white;
  background: #1d74c5;
}

/* Responsivo */

@media screen and (max-width: 449px) {
  .titulo-intro {
    font-size: 1.5rem;
    max-width: 350px;
  }

  .descricao-intro {
    font-size: 0.875rem;
    max-width: 350px;
  }
}

@media only screen and (min-width: 450px) and (max-width: 600px) {
  .titulo-intro {
    font-size: 1.75rem;
    max-width: 350px;
  }

  .descricao-intro {
    font-size: 1rem;
    width: 350px;
  }
}
</style>

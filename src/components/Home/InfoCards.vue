<template>
  <section class="info-cards">
    <div class="container">
      <div class="cards-lista">
        <div class="row">
          <div class="col-lg info-card">
            <div class="card-titulo">
              <img src="@/assets/home/orcamento.svg" alt="" />
              <h5>Realizar Orçamento</h5>
            </div>
            <p>Entre em contato conosco para realizar o seu orçamento</p>
            <button class="btn">Orçamento</button>
          </div>
          <div class="col-lg info-card">
            <div class="card-titulo">
              <img src="@/assets/home/orientacoes.svg" alt="" />
              <h5>Orientações de Exames</h5>
            </div>
            <p>
              Verifique as orientações de preparo e coleta dos nossos exames.
            </p>
            <button class="btn" @click="$router.push('exames')">
              Orientações
            </button>
          </div>
          <div class="col-lg info-card">
            <div class="card-titulo">
              <img src="@/assets/home/resultados.svg" alt="" />
              <h5>Visualizar Resultados</h5>
            </div>
            <p>Visualize os resultados dos exames realizados conosco.</p>
            <button class="btn">Resultados</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'InfoCards',
};
</script>

<style scoped>
.info-cards {
  margin-top: 50px;
}

.info-card {
  padding: 20px;
  background: #1d74c5;
  margin-right: 30px;
  border-radius: 5px;
  display: grid;
  box-shadow: 5px 5px 9px -2px rgba(0, 0, 0, 0.25);
}

.info-card:last-of-type {
  margin-right: 0;
}

.card-titulo {
  display: grid;
  grid-template-columns: 30px 1fr;
  justify-items: center;
}

.card-titulo h5 {
  font-size: 1.25rem;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
}

.info-card p {
  color: white;
  font-size: 1rem;
  margin-top: 10px;
  text-align: center;
}

.info-card button {
  background: white;
  color: #1d74c5;
  font-weight: bold;
  text-transform: uppercase;
  width: 150px;
  margin: 0 auto;
}

.info-card button.btn:hover {
  background: white;
  color: #1e1e1e;
}

/* Responsivo */

@media only screen and (max-width: 767px) {
  .info-cards {
    margin-top: 0px;
  }

  .info-card {
    max-width: 300px;
    margin: 0 auto 20px auto;
  }

  .info-card:last-of-type {
    margin: 0 auto;
  }

  .card-titulo h5 {
    font-size: 1rem;
    align-self: center;
  }

  .info-card p {
    font-size: 0.875rem;
    text-align: center;
  }

  .info-card button {
    font-size: 0.875rem;
  }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .info-cards {
    margin-top: 0px;
  }

  .info-card {
    max-width: 333px;
    margin: 0 auto 30px auto;
  }

  .info-card:first-of-type {
    margin-left: 12px;
  }

  .info-card:nth-of-type(2) {
    margin-right: 12px;
  }

  .info-card:last-of-type {
    margin: 0 auto;
  }

  .card-titulo h5 {
    font-size: 1rem;
    align-self: center;
  }

  .info-card p {
    font-size: 0.875rem;
    text-align: center;
  }

  .info-card button {
    font-size: 0.875rem;
  }
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .card-titulo {
    align-items: center;
  }

  .card-titulo h5 {
    font-size: 1rem;
  }

  .info-card p {
    font-size: 0.875rem;
    text-align: center;
  }

  .info-card button {
    font-size: 0.875rem;
  }
}

@media only screen and (min-width: 1200px) and (max-width: 1399px) {
  .info-card:first-of-type {
    margin-left: 12px;
  }

  .info-card:last-of-type {
    margin-right: 12px;
  }

  .card-titulo h5 {
    font-size: 1.125rem;
  }

  .info-card button {
    font-size: 1rem;
  }
}
</style>

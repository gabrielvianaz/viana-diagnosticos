<template>
  <footer>
    <div class="container">
      <div class="row justify-content-between">
        <div class="central">
          <h4>Central de Atendimento</h4>
          <div class="telefone">
            <h3>77 3424-1506</h3>
          </div>
        </div>
        <div class="copy text-end">
          <p>© 2022 Viana Diagnósticos. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
};
</script>

<style scoped>
footer {
  background: #1d74c5;
  height: 100px;
  position: relative;
  top: 100px;
}

footer .row {
  display: grid;
  grid-template-columns: 350px 1fr;
}

.central {
  background: white;
  width: 350px;
  height: 100px;
  padding: 10px;
  display: grid;
  box-shadow: 5px 5px 9px -2px rgba(0, 0, 0, 0.25);
  align-items: center;
}

.central h4 {
  font-size: 1.5rem;
  font-weight: bold;
  color: #1d74c5;
  text-align: center;
  margin: 0;
}

.central h3 {
  font-size: 2rem;
  font-weight: bold;
  color: #1d74c5;
  text-align: center;
}

.central h3::before {
  position: relative;
  top: 7px;
  margin-right: 5px;
  content: url('@/assets/telefone.svg');
}

.copy {
  align-self: center;
}

.copy p {
  margin: 0;
  font-size: 1rem;
  color: white;
}

/* Responsivo */

@media screen and (max-width: 599px) {
  footer .row {
    grid-template-columns: 150px 1fr;
  }

  .central h4 {
    font-size: 0.875rem;
  }

  .central h3 {
    font-size: 1rem;
  }

  .central h3::before {
    width: 16px;
    height: 16px;
    display: inline-block;
    content: '';
    background: url('@/assets/telefone.svg');
    background-size: 16px 16px;
    top: 2px;
  }

  .copy p {
    font-size: 0.875rem;
  }
}

@media screen and (max-width: 767px) {
  .copy p {
    text-align: left;
  }
}

@media screen and (min-width: 600px) and (max-width: 991px) {
  footer .row {
    grid-template-columns: 200px 1fr;
  }

  .central h4 {
    font-size: 1rem;
  }

  .central h3 {
    font-size: 1.25rem;
  }

  .central h3::before {
    width: 20px;
    height: 20px;
    display: inline-block;
    content: '';
    background: url('@/assets/telefone.svg');
    background-size: 20px 20px;
    top: 4px;
  }
}
</style>

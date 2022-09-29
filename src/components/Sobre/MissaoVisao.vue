<template>
  <div class="missao">
    <h1 class="titulo">Missão, visão e valores</h1>
    <div class="row">
      <div class="col-lg-6">
        <h6>Missão</h6>
        <p>Exercer medicina laboratorial especializada e personalizada.</p>
        <h6>Visão</h6>
        <p>Ser referência em análises clínicas na região Nordeste.</p>
        <h6>Valores</h6>
        <ul>
          <li>Acolhimento</li>
          <li>Inovação</li>
          <li>Credibilidade</li>
          <li>Respeito à vida</li>
        </ul>
      </div>
      <div class="col-lg-6">
        <img src="@/assets/sobre/missao/fachada.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MissaoVisao',
};
</script>

<style scoped>
.missao h6 {
  font-size: 1.125rem;
  font-weight: bold;
}

.missao p,
ul {
  margin: 5px 0 10px 0;
}
.missao ul {
  list-style: none;
  padding: 0;
  margin-bottom: 0;
}
.missao ul li::before {
  content: '';
  width: 8px;
  height: 8px;
  border-radius: 50px;
  background: #1d74c5;
  display: inline-block;
  margin-right: 10px;
}
.missao img {
  max-width: 100%;
}

/* Responsivo */

@media screen and (max-width: 991px) {
  .missao img {
    margin-top: 30px;
  }
}
</style>

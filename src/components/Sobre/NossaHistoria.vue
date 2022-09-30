<template>
  <div class="historia">
    <h1 class="titulo">Nossa História</h1>
    <div class="row">
      <div class="col-lg-6">
        <p>
          Atuamos no mercado de análises clínicas há 20 anos. Com o passar do
          tempo, com base na utilização de novas tecnologias, conseguimos
          automatizar nossos processos e proporcionar resultados mais ágeis e
          confiáveis. Atualmente, somos um laboratório referência no estado da
          Bahia, com excelência técnica e de atendimento. O pensamento inovador
          vem sendo a marca registrada desta empresa que, durante todos esses
          anos, vem investindo boa parte do seu lucro em novos equipamentos e
          metodologias, razão de que se tornou um dos pioneiros na automação
          laboratorial em nosso estado.
        </p>
      </div>
      <div class="col-lg-6">
        <img src="@/assets/sobre/historia/fachada.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NossaHistoria',
  created() {
    document.title = 'Viana Diagnósticos | História';
  },
};
</script>

<style scoped>
.historia img {
  max-width: 100%;
  border-radius: 10px;
}

.historia p {
  color: #1e1e1e;
}

@media screen and (max-width: 599px) {
  .sobre {
    margin-top: 30px;
  }

  .sobre .titulo {
    margin-top: 30px;
  }
}
</style>

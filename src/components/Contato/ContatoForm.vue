<template>
  <form>
    <div class="container">
      <div class="row">
        <div class="col-md">
          <label for="nome">Nome<b>*</b></label>
          <input type="text" name="nome" id="nome" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <label for="telefone">Telefone<b>*</b></label>
          <input type="tel" name="telefone" id="telefone" />
        </div>
        <div class="col-md-6">
          <label for="email">E-mail<b>*</b></label>
          <input type="email" name="email" id="email" />
        </div>
      </div>
      <div class="row">
        <div class="col-md">
          <label for="assunto">Assunto<b>*</b></label>
          <select name="assunto" id="assunto">
            <option disabled selected>Selecione um assunto</option>
            <option>Orçamento</option>
            <option>Dúvida</option>
            <option>Reclamação</option>
            <option>Sugestão</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col-md">
          <label for="mensagem">Mensagem<b>*</b></label>
          <textarea name="mensage" id="mensagem"></textarea>
        </div>
      </div>
      <div class="row">
        <div class="col-md">
          <button>Enviar</button>
        </div>
      </div>
      <p><b>*Campo de preenchimento obrigatório</b></p>
    </div>
  </form>
</template>

<script>
export default {
  name: 'ContatoForm',
};
</script>

<style scoped>
form {
  margin: 0 auto;
}

label {
  display: block;
  margin-bottom: 5px;
}

b {
  color: #1d74c5;
}

input,
select,
textarea {
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  border: 3px solid #1d74c5;
  border-radius: 5px;
  background: transparent;
  padding-left: 10px;
}

input:focus,
select:focus,
textarea:focus {
  outline: none;
}

textarea {
  height: 200px;
  margin-bottom: 15px;
}

button {
  width: 150px;
  height: 40px;
  background: #1d74c5;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  margin-bottom: 20px;
}

@media screen and (min-width: 768px) {
  form {
    width: 730px;
  }
}
</style>

<template>
  <div
    class="modal fade"
    id="modalResultados"
    tabindex="-1"
    aria-labelledby="modalResultadosLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalResultadosLabel">
            Acessar Resultados
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <input type="text" name="login" id="login" placeholder="Login" />
            <input
              type="password"
              name="senha"
              id="senha"
              placeholder="Senha"
            />
          </form>
          <button>Acessar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalResultados',
};
</script>

<style scoped>
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

.modal-body input {
  display: block;
  border: 3px solid #1d74c5;
  margin-bottom: 10px;
  border-radius: 5px;
  width: 100%;
  padding: 5px;
}

.modal-body button {
  border: 3px solid #1d74c5;
  background: white;
  color: #1d74c5;
  font-weight: bold;
  padding: 5px;
  border-radius: 5px;
}

.modal-body input:focus {
  outline: none;
}

.modal-body button:hover {
  background: #1d74c5;
  color: white;
}

.btn-close {
  font-size: 1rem;
}
</style>

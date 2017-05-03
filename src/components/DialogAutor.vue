<template lang="html">
  <div class='dialog-autor' v-if='Object.keys(dados).length > 0'>
    <h3>{{ dados.name }} <small>ID: {{ dados.id }}</small></h3>
    <div class="section">
      <p><strong>E-mail:</strong> {{ dados.email }}</p>
      <p><strong>Telefone:</strong> {{ dados.phone }}</p>
      <p><strong>Website:</strong> <a :href='"http://" + dados.website'>{{ dados.website }}</a></p>
    </div>
    <div class="section">
      <h4>Endereço:</h4>
      <p>{{ dados.address.street }}, {{ dados.address.suite }}<br />
      {{ dados.address.city }}</p>
    </div>
    <div class="section">
      <h4>Empresa:</h4>
      <p>{{ dados.company.name }}<br />
      {{ dados.company.catchPhrase }}</p>
    </div>
    <button type='button' class='btn btn-default' @click='emitEvent'>Emitir evento</button>
  </div>
</template>

<script>
import DialogBase from './jQueryDialogBase.js'

DialogBase.props.dados = {
  type: Object,
  required: true
}
DialogBase.methods.emitEvent = function () {
  this.$emit('button-clicked', this.dados)
}

export default DialogBase
</script>

<style>
.section {
  background-color: #EEE;
  padding: 0.5em;
  margin: 7px 0px;
}
</style>

<template lang="html">
  <jquery-dialog :config='dialogConfig'>
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
  </jquery-dialog>
</template>

<script>
import DialogsComum from './DialogsComum.js'

DialogsComum.props.dados = {
  type: Object,
  required: true
}

export default DialogsComum
</script>

<style>
.section {
  background-color: #EEE;
  padding: 0.5em;
  margin: 7px 0px;
}
</style>

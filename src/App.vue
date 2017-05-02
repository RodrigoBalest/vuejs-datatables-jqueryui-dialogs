<template>
  <div id="app">
    <data-table :dt-config='dtConfig' @ver-autor='verAutor'></data-table>
    <dialog-autor ref='dialogAutor' :dialog-config='dialogConfig' :dados='autorAtual'></dialog-autor>
  </div>
</template>

<script>
import Vue from 'vue'
import DataTable from './components/DataTable.vue'
import DialogAutor from './components/DialogAutor.vue'
import dtConfig from './datatables/home.js'
import dialogConfig from './dialogs/autor.js'

export default {
  name: 'app',
  data () {
    return {
      dtConfig,
      dialogConfig,
      autorAtual: {}
    }
  },
  components: {
    DataTable,
    DialogAutor
  },
  methods: {
    verAutor (rowData, ev) {
      $.get('https://jsonplaceholder.typicode.com/users/' + rowData.userId)
        .done(function (data) {
          this.autorAtual = data
          // Permite que o dialog seja encontrado em this.$refs antes
          // de podermos acessá-lo.
          Vue.nextTick(function () {
            this.$refs.dialogAutor.exibe('Dados do autor')
          }.bind(this))
        }.bind(this))
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 20px;
  box-sizing: border-box;
}
.datatable {
  width: 100%;
  box-sizing: border-box;
}
</style>

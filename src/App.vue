<template>
  <div id="app">
    <data-table :dt-config='dtConfig' @ver-autor='verAutor'></data-table>
  </div>
</template>

<script>
import DataTable from './components/DataTable.vue'
import dtConfig from './datatables/home.js'

export default {
  name: 'app',
  data () {
    return {
      dtConfig
    }
  },
  components: {
    DataTable
  },
  methods: {
    verAutor (rowData, ev) {
      console.debug('verAutor', rowData, ev)
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

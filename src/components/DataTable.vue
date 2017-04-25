<template>
  <table class="table table-bordered datatable"></table>
</template>

<script>
import 'datatables.net'
import 'bootstrap/dist/css/bootstrap.css'
import 'datatables.net-bs/js/dataTables.bootstrap.js'
import 'datatables.net-bs/css/dataTables.bootstrap.css'

export default {
  props: {
    dtConfig: {
      type: Object,
      required: true
    }
  },
  mounted () {
    let vm = this
    // Inicializa a DataTable do componente
    $(vm.$el).DataTable(this.dtConfig)
    // Emite um evento quando um link ou botão for clicado dentro da tabela.
    // O nome do evento é igual ao valor do atributo 'data-action' do item clicado.
    $(vm.$el).on('click', 'a, button', function (ev) {
      ev.preventDefault()
      var $this = $(this)
      if ($this.data('action')) {
        var rowData = $(vm.$el).DataTable().row($this.parents('tr')).data()
        vm.$emit($this.data('action'), rowData, ev)
      }
    })
  }
}
</script>

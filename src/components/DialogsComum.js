import JqueryDialog from './jQueryDialog.vue'

export default {
  props: {
    dialogConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    JqueryDialog
  },
  methods: {
    exibe (titulo) {
      this.$children[0].exibe(titulo)
    }
  }
}

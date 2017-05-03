import 'jquery-ui/ui/widgets/dialog.js'
import 'jquery-ui/themes/base/core.css'
import 'jquery-ui/themes/base/base.css'
import 'jquery-ui/themes/base/theme.css'
import 'jquery-ui/themes/base/dialog.css'

export default {
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  methods: {
    exibe (titulo) {
      this.setUp()
      this.handle.dialog('option', 'title', titulo).dialog('open')
    },
    setUp () {
      if (!this.handle) {
        this.handle = $(this.$el).dialog(this.config)
      }
    }
  }
}

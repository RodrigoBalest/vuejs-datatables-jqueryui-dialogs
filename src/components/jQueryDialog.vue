<template lang="html">
  <div class="dialog">
    <slot></slot>
  </div>
</template>

<script>
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
  mounted () {
    this.handle = $(this.$el).dialog(this.config)
  },
  methods: {
    exibe (titulo) {
      this.handle.dialog('option', 'title', titulo).dialog('open')
    }
  }
}
</script>

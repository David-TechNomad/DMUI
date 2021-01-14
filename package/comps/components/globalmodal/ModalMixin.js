const ModalMixin = {
  props: {
    isVisible: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    active () {
      this.isActive = true
    },
    close () {
      this.$emit('close')
      this.isActive = false
    }
  },

  watch: {
    isVisible (val) {
      this.isActive = val
      if (val) {
        document.body.classList.add('dm--overflow--hidden')
      } else {
        document.body.classList.remove('dm--overflow--hidden')
      }
    }
  },

  mounted () {
    this.$nextTick(() => {
      document.body.appendChild(this.$el)
      if (this.isVisible) {
        this.active()
      }
    })
  },

  beforeDestroy () {
    this.$el.remove()
  }
}

export default ModalMixin

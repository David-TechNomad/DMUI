<template>
  <transition name="fade">
    <div class="dm__popup--wrap" ref="popup">
      <div class="dm__mask" v-show="isShow" :class="isShow?'dm__popup--active':''" @click.stop="close"></div>
      <div class="dm__popup" :class="isShow?'dm__popup--active':''">
        <header class="dm__popup--header" v-if="header">{{header}} <a v-if="cancel" @click.stop="close" class="dm__popup--action" :style="{'color':cancelColor}">{{cancel}}</a></header>
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  name: 'dm-popup',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    header: {
      type: String,
      default: ''
    },
    cancel: {
      type: String,
      default: ''
    },
    cancelColor: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isShow: this.value
    }
  },
  methods: {
    active () {
      this.isShow = true
      this.$emit('input', true)
    },
    close () {
      this.isShow = false
      this.$emit('input', false)
    }
  },
  watch: {
    value (val) {
      this.isShow = val
      if (val) {
        document.body.classList.add('dm--overflow--hidden')
      } else {
        document.body.classList.remove('dm--overflow--hidden')
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      if (this.isShow) {
        this.active()
      }
    })
  },
  destroy () {
    this.close()
  }
}
</script>

<style scoped lang="scss">

</style>

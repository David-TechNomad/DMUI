/* special modal特殊的弹出层，可用于活动专题 */
<template>
  <transition name="fade">
    <div class="dm__dialog--wrap" v-if="isVisible" ref="modal" >
      <div class="dm__mask" @click="maskClose"></div>
      <div class="dm__dialog dm__dialog--special" :style="{'z-index':zIndex}">
        <div class="dm__dialog--bd">
          <slot></slot>
        </div>
        <div class="dm__dialog--ft">
          <div>
            <dm-button @click="close"><i class="dm__icon--close-outline"></i></dm-button>
          </div>
        </div>
      </div>
      
    </div>
  </transition>
</template>

<script>
import dmButton from '../button'
export default {
  name: 'dm-sp-modal',
  components: {
    dmButton
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    zIndex: {
      type: Number,
      default: ''
    },
    maskClosable: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      isVisible: false
    }
  },
  methods: {
    active () {
      this.isVisible = true
    },
    close () {
      this.$emit('close')
    },
    maskClose () {
      if (this.maskClosable) {
        this.close()
      }
    }
  },
  watch: {
    visible (val) {
      this.isVisible = val
      // if (!val && this.isLoading) {
      //   this.isLoading = false
      // }
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
</script>

<style scoped lang="scss">

</style>

<template>
  <transition name="fade">
    <div class="dm__dialog--wrap" v-if="isVisible" ref="modal" >
      <div class="dm__mask" @click="maskClose"></div>
      <div class="dm__dialog" :style="{'z-index':zIndex}">
        <div class="dm__dialog--hd" v-if="dialogTitle">
          <strong class="dm__dialog--title">{{dialogTitle}}</strong>
        </div>
        <div class="dm__dialog--bd">
          <slot></slot>
        </div>
        <div class="dm__dialog--ft">
          <div v-if="type&&type=='alert'">
            <dm-button type="primary" @click="confirm" :style="{'color':color}" long>{{confirmText}}</dm-button>
          </div>
          <div v-else-if="type&&type=='confirm'">
          <dm-button-group class="dm__btn--group" >
            <dm-button v-if="cancelBtn" @click="close">{{cancelText}}</dm-button>
            <dm-button type="primary" v-if="confirmBtn" @click="confirm" :style="{'color':color}">{{confirmText}}</dm-button>
          </dm-button-group>
          </div>
          <div v-else>
            <dm-button type="primary" @click="confirm" :style="{'color':color}" long>{{confirmText}}</dm-button>
          </div>
        </div>
      </div>
      
    </div>
  </transition>
</template>

<script>
import dmButton from '../button'
import dmButtonGroup from '../buttongroup'
export default {
  name: 'dm-modal',
  components: {
    dmButton,
    dmButtonGroup
  },
  props: {
    type: {
      type: String,
      default: 'default'
    },
    visible: {
      type: Boolean,
      default: false
    },
    dialogTitle: {
      type: String,
      default: ''
    },
    zIndex: {
      type: Number,
      default: ''
    },
    confirmText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    color: {
      type: String,
      default: ''
    },
    maskClosable: {
      type: Boolean,
      default: true
    },
    confirmBtn: {
      type: Boolean,
      default: true
    },
    cancelBtn: {
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
      this.isVisible = false
    },
    confirm () {
      this.$emit('confirm')
    },
    maskClose () {
      if (this.maskClosable) {
        this.close()
      // } else {
      //   this.isVisible = false
      }
    }
  },
  watch: {
    visible (val) {
      console.log(val)
      this.isVisible = val
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
</script>

<style scoped lang="scss">

</style>

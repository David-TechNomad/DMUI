<template>
  <transition name="fade">
    <div class="dm__toast--wrap" v-show="isVisible" ref="toast" >
      <div class="dm__mask" v-show="mask"></div>
      <div class="dm__toast" :class='classz' :style='directions'>
        <div v-if="type&&type=='default'" class=" dm__toast--loading">
          <dm-loading width="42" height="42" border-width="8" color="#efefef"></dm-loading>
        </div>
        <div v-else>
          {{content}}
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import ToastMixin from './ToastMixin'
export default {
  mixins: [ToastMixin],
  props: {
    content: String,
    autoClose: {
      type: Boolean,
      default: true
    },
    mask: {
      type: Boolean,
      default: false
    },
    callBack: {
      type: Function,
      default () {}
    },
    type: {
      type: String,
      default: ''
    },
    direction: {
      type: String,
      default: ''
    }
  },
  methods: {
    close () {
      this.$emit('close')
      this.isVisible = false
      this.callBack()
    }
  },
  mounted () {
    setTimeout(() => {
      this.isVisible = true
    }, 100)

    if (this.autoClose) {
      setTimeout(() => {
        this.close()
        setTimeout(() => {
          this.$destroy()
        }, 200)
      }, 3000)
    }
  },
  computed: {
    classz () {
      if (!this.type) {
        return 'dm__toast--text'
      } else {
        return 'dm__toast--loading'
      }
    },
    directions () {
      if (this.direction === 'top') {
        return 'top:20%'
      } else if (this.direction === 'bottom') {
        return 'top:80%'
      } else {
        return 'top:50%'
      }
    }
  }
}
</script>
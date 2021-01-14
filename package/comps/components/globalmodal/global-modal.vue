<template>
  <transition name="fade">
    <div class="dm__dialog--wrap" v-show="isVisible" ref="modal" >
      <div class="dm__mask" @click="maskClose"></div>
      <div class="dm__dialog">
        <div class="dm__dialog--hd">
          <strong class="dm__dialog--title" v-if="title">{{title}}</strong>
        </div>
        <div class="dm__dialog--bd" v-if="type=='prompt'">
          <dm-input v-model="promptValue" :placeholder="placeholder" :readonly="readonly" class="dm__dialog--bd-input"></dm-input>
        </div>
        <div class="dm__dialog--bd" v-else>
          {{content}}
        </div>
        <div class="dm__dialog--ft">
          <div v-if="!type||type=='alert'">
            <dm-button type="primary" @click="confirm" :style="{'color':color}" long>{{confirmText}}</dm-button>
          </div>
          <div v-else-if="type=='confirm'">
          <dm-button-group class="dm__btn--group" >
            <dm-button @click="close">{{cancelText}}</dm-button>
            <dm-button type="primary" @click="confirm" :style="{'color':color}">{{confirmText}}</dm-button>
          </dm-button-group>
          </div>
          <div v-else-if="type=='prompt'">
          <dm-button-group class="dm__btn--group" >
            <dm-button @click="close">{{cancelText}}</dm-button>
            <dm-button type="primary" @click="confirm" :style="{'color':color}">{{confirmText}}</dm-button>
          </dm-button-group>
          </div>
          
        </div>
      </div>
      
    </div>
  </transition>
</template>

<script>
import dmButton from '../button'
import dmButtonGroup from '../buttongroup'
import ModalMixin from './ModalMixin'
export default {
  mixins: [ModalMixin],
  components: {
    dmButton,
    dmButtonGroup
  },
  props: {
    type: {
      type: String,
      default: 'alert'
    },
    value: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    confirmText: {
      type: String,
      default: ''
    },
    cancelText: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    readonly: Boolean,
    maskClosable: {
      type: Boolean,
      default: true
    },
    content: String,
    autoClose: {
      type: Boolean,
      default: false
    },
    callBack: {
      type: Function,
      default () {}
    },
    closeAction: {
      type: Function,
      default () {}
    }
  },
  data () {
    return {
      promptValue: this.value
    }
  },
  methods: {
    close () {
      this.$emit('close')
      this.isVisible = false
      this.closeAction()
      this.destroyed()
    },
    confirm () {
      this.$emit('confirm')
      this.isVisible = false
      if (this.type === 'prompt') {
        if (this.promptValue !== '') {
          this.callBack(this.promptValue)
        }
      } else {
        this.callBack()
      }
      this.destroyed()
    },
    maskClose () {
      if (this.maskClosable) {
        this.close()
      }
    },
    destroyed () {
      setTimeout(() => {
        this.$destroy()
      }, 200)
    }
  },
  mounted () {
    setTimeout(() => {
      this.isVisible = true
    }, 100)

    if (this.autoClose) {
      setTimeout(() => {
        this.close()
      }, 3000)
    }
  }
}
</script>
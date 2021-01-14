<template>
  <transition name="fade">
    <div class="dm__actionsheet--wrap" ref="actionsheet">
      <div class="dm__mask" v-show="isShow" :class="isShow?'dm__actionsheet--active':''" @click.stop="close"></div>
      <div class="dm__actionsheet" :class="isShow?'dm__actionsheet--active':''">
        <header class="dm__actionsheet--header" v-if="header">{{header}}</header>
        <ul>
        <li v-for="(item,index) in itemList" :key="index" @click.stop="itemClick(item)" class="dm__actionsheet--item"><span class="dm__actionsheet--icon" v-if="hasIcon&&item.icon!=''" v-html="item.icon"></span>{{item.text}}</li>
        </ul>
        <a v-if="cancel" @click.stop="close" class="dm__actionsheet--action" :style="{'color':cancelColor}">{{cancel}}</a>
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  name: 'dm-actionsheet',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    itemList: {
      type: Array,
      required: true,
      default: () => {}
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
    },
    hasIcon: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isShow: this.value
    }
  },
  computed: {

  },
  methods: {
    active () {
      this.isShow = true
      this.$emit('input', true)
    },
    close () {
      this.isShow = false
      this.$emit('input', false)
    },
    itemClick (item) {
      this.close()
      if (typeof item.callBack === 'function') {
        item.callBack()
      }
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

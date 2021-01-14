<template>
    <header class="dm__navbar" :style="{'background-color':bgcolor,'color':color}">
      <div class="dm__navbar--left" @click="clickLeft">
        <i class="dm__navbar--icon" :class="leftIcon"></i>
        <span class="dm__navbar--text">{{leftText}}</span>
      </div>
      <div class="dm__navbar--title" v-if="title">
        {{title}}
      </div>
      <div class="dm__navbar--title" v-else>
        <slot></slot>
      </div>
      <div class="dm__navbar--right" @click="clickRight">
        <span class="dm__navbar--text">{{rightText}}</span>
        <i class="dm__navbar--icon" :class="rightIcon"></i>
      </div>
    </header>
</template>

<script>
export default {
  name: 'dm-navbar',
  props: {
    leftText: {
      type: String,
      default: ''
    },
    rightText: {
      type: String,
      default: ''
    },
    leftIcon: {
      type: String,
      default: ''
    },
    rightIcon: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    bgcolor: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    clickLeft (event) {
      this.$emit('left-action', event)
    },
    clickRight (event) {
      this.$emit('right-action', event)
    }
  },
  computed: {
    // computeHref () {
    //   return this.href && this.href !== '' ? this.href : 'javascript:;'
    // },
    // computeActive () {

    // }
  }
}
</script>

<style scoped lang="scss">

</style>

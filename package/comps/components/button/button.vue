<template>
    <button 
        class="dm__btn"
        @click="handleClick"
        :style="{backgroundColor: bgColor, color: color, 'border-color':borderColor}"
        :class="[
        'dm__btn--'+type,
        {'is-plain': plain, 'is-round': round, 'is-long': long, 'dm__btn--block': block, 'no-radius': noRadius},
        iconClass,
        buttonSize ? 'dm-button--' + buttonSize : '',
        ]"
        :disabled="disabled"
    >
        <i :class="icon" v-if="icon"></i>
        <i class="dm__icon--loading" v-if="loading && !icon"></i>
        <!-- <span><slot></slot></span> -->
        <slot></slot>
    </button>
</template>

<script>

export default {
  name: 'dm-button',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    long: Boolean,
    loading: {
      type: Boolean,
      default: false
    },
    noRadius: {
      type: Boolean,
      default: false
    },
    bgColor: {
      type: String,
      default: ''
    },
    borderColor: {
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
    size: String,
    block: Boolean,
    disabled: Boolean,
    plain: Boolean,
    round: Boolean
  },
  methods: {
    handleClick (event) {
      if (this.disabled) return
      this.$emit('click', event)// 传播方法名为click，你也可以自定义其他名字
    }
  },
  computed: {
    iconClass () {
      if (this.icon !== '') return 'dm__hasIconBtn'
    },
    buttonSize() {
      return this.size;
    },
  }
}
</script>

<style scoped lang="scss">

</style>

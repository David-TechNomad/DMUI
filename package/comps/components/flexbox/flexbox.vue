<template>
    <div class="dm__flexbox" :class="directionClass">
      <slot></slot>
    </div>
</template>

<script>

export default {
  name: 'dm-flexbox',
  props: {
    direction: {
      type: String,
      default: 'horizontal'
    }
  },
  computed: {
    directionClass () {
      return this.direction === 'vertical' ? 'dm__flex--vertical' : ''
    }
  }
}
</script>

<style scoped lang="scss">

</style>

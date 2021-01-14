<template>
    <div class="dm__flex--item" @click="handleClick">
        <slot></slot>
    </div>
</template>

<script>

export default {
  name: 'dm-flexbox-item',
  methods: {
    handleClick (event) {
      this.$emit('click', event)
    }
  }
}
</script>

<style scoped lang="scss">

</style>

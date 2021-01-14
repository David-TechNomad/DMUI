<template>
    <div class="dm__grids" :class="'dm__grids--'+row">
      <slot></slot>
    </div>
</template>

<script>

export default {
  name: 'dm-grids',
  props: {
    row: {
      type: String,
      default: '4'
    }
  }
}
</script>

<style scoped lang="scss">

</style>

<template>
    <div :class="[['dm__skeleton--']+type, ['dm__skeleton--']+animate]" :style="{'width':width,'height':height}"></div>
</template>

<script>

export default {
  name: 'dm-skeleton',
  props: {
    type: {
      type: String,
      default: 'bar'
    },
    animate: {
      type: String,
      default: 'opacity'
    },
    width: [ String ],
    height: [ String ]
  },
  computed: {
    animateClass () {
      if (this.animate !== '') return 'dm__skeleton--' + this.animate
    }
  }
}
</script>

<style scoped lang="scss">

</style>

<template>
    <a :href="computeHref" @click="gridAciton" class="dm__grid">
        <div class="dm__grid--icon"><slot name='icon'></slot></div>
        <div class="dm__grid--text"><slot name='text'></slot></div>
    </a>
</template>

<script>

export default {
  name: 'dm-grid',
  props: {
    href: [ String ]
  },
  methods: {
    gridAciton () {
      this.$emit('click')
    }
  },
  computed: {
    computeHref () {
      return this.href && this.href !== '' ? this.href : 'javascript:;'
    }
  }
}
</script>

<style scoped lang="scss">

</style>

<template>
    <div class="dm__seamlessscroll--item" @click="itemAciton"><slot></slot></div>
</template>

<script>
    export default {
      name: 'dm-seamlessscroll-item',
      mounted () {
        // this.$parent.init()
      },
      methods: {
        itemAciton (event) {
          this.$emit('click', event)
        }
      }
    }
</script>

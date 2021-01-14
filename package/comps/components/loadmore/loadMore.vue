<template>
    <div 
        class="dm__loadMore"
        :style="{color: color}"
        :class="[
        {'dm__loadmore--line is-no-data':noData}
        ]"
        @click="loadMoreAction"
    >   
        <i v-if="icon && !noData" class="dm__icon--loading"></i>
        <span class="dm__loadmore--tips"><slot>加载更多</slot></span>
    </div>
</template>

<script>

export default {
  name: 'dm-loadmore',
  props: {
    color: {
      type: String,
      default: ''
    },
    icon: {
      type: Boolean,
      default: false
    },
    noData: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    loadMoreAction () {
      this.$emit('action')
    }
  }
}
</script>

<style scoped lang="scss">

</style>

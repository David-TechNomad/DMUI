<template>
    <div class="dm__steps dm__steps--horizontal">
      <div class="dm__steps--items">
        <div class="dm__step" 
        :class="['dm__step--'+direction,
        {'dm__step--process':step==index,
        'dm__step--finish':step>index}]" 
        v-for="(stepItem,index) in stepList" 
        :stepItem="stepItem" :key="index">
          <div class="dm__step--circle-container">
            <i v-if="index==step" class="dm__icon--checked"></i>
            <i v-else class="dm__step--circle"></i>
          </div>
          <div class="dm__step--title">
            {{stepItem}}
          </div>
          <div class="dm__step--line">
          </div>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'dm-step',
  props: {
    step: {
      type: Number,
      default: 0
    },
    stepList: {
      type: Array,
      default: () => {}
    },
    direction: {
      type: String,
      default: 'horizontal'
    }
  },
  data () {
    return {
      nowStep: ''
    }
  }
}
</script>

<style scoped lang="scss">
  
</style>

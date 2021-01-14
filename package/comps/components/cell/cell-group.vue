<template>
    <div class="dm__cell--box">
        <slot name="top"></slot>
        <div class="dm__cell">
            <div class="dm__cell--title" v-if="title">{{title}}</div>
            <slot></slot>
        </div>
        <slot name="bottom"></slot>
    </div>
</template>

<script>
export default {
  name: 'dm-cell-group',
  props: {
    title: String
  }
}
</script>
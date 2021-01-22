<template>
  <a
    class="dm-tab-item"
    :style="$parent.value === id ? activeStyle : {}"
    @click="onItemClicked"
  >
    <div class="dm-tab-item-icon" v-if="$parent.fixBottom">
      <slot name="icon"></slot>
    </div>
    <div class="dm-tab-item-label"><slot></slot></div>
  </a>
</template>

<script>
export default {
  name: "DmTabItem",
  computed: {
    activeStyle() {
      return {
        color: this.$parent.activeColor,
      };
    },
  },
  data() {
    return {
      id: (this.$parent.$children.length || 1) - 1,
    };
  },
  methods: {
    onItemClicked() {
      this.$parent.$emit("input", this.id);
    },
  },
};
</script>

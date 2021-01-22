<template>
  <div class="dm-tab">
    <dm-tabbar v-model="selectedId" v-bind="options">
      <dm-tab-item v-for="(item, index) in items" :key="index">
        <span v-if="options.fixBottom && item.icon" slot="icon">
          <i :class="item.icon"></i>
        </span>
        <span>{{ item[labelKey] }}</span>
      </dm-tab-item>
    </dm-tabbar>
  </div>
</template>

<script>
import DmTabbar from "./tabbar";
import DmTabItem from "./tab-item";

export default {
  name: "DmSlideMenu",
  components: {
    DmTabbar,
    DmTabItem,
  },
  props: {
    value: {
      type: Number,
      default: 0,
    },
    items: {
      type: Array,
      default() {
        return [];
      },
    },
    options: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      selectedId: this.value,
    };
  },
  computed: {
    labelKey() {
      return this.options.labelKey || "label";
    },
  },
  watch: {
    value(value) {
      this.selectedId = value;
    },
    selectedId(value) {
      this.$emit("input", value);
      this.$emit("change", this.items[value], value);
    },
  },
};
</script>
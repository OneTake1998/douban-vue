<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle()">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  components: {},
  props: {
    path: {
      type: String
    },
    activeColor: {
      type: String,
      default: "#42BD55"
    }
  },
  data() {
    return {
    };
  },
  methods: {
    itemClick() {
      if (this.path != this.$route.path) this.$router.replace(this.path);
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    }
  }
};
</script>
<style  scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 12px;
}
.tab-bar-item img {
  height: 24px;
  width: 24px;
  margin-top: 3px;
  vertical-align: middle;
}
</style>
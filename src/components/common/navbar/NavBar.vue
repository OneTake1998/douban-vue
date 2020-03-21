<template>
  <div class="nav-bar">
    <div class="out-side-left">
      <div class="left">
        <slot name="left"></slot>
      </div>
      <div class="center">
        <slot name="center"></slot>
      </div>
      <div class="right">
        <slot name="right"></slot>
      </div>
    </div>
    <div class="out-side-right">
      <slot name="out-side-right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  components: {},
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style scoped>
.nav-bar {
  line-height: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  background-color: var(--color-main);
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.2);
  padding-right: 8px;
}
.out-side-left {
  background-color: white;
  height: 32px;
  display: flex;
  align-items: center;
  flex: 1;
  border-radius: 16px;
  margin-left: 8px;
  margin-right: 8px;
  padding-left: 16px;
  padding-right: 16px;
  color: #bfbfbf;
}

.center {
  flex: 1;
  text-align: start;
  margin-left: 8px;
  font-size: var(--font-size);
}

.left,
.right {
  height: 32px;
}

.left img,
.right img {
  height: 22px;
  width: 22px;
}
.out-side-right img {
  height: 30px;
  width: 30px;
  vertical-align: middle;
}
</style>
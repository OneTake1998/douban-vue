<!--  -->
<template>
  <div>
    <nav-bar>
      <div slot="left">
        <img slot="item-icon" src="~assets/img/navbar/search.svg" alt />
      </div>
      <div slot="center">用十本书了解我</div>
      <div slot="right">
        <img slot="item-icon" src="~assets/img/navbar/saoyisao.svg" alt />
      </div>
      <div slot="out-side-right">
        <img slot="item-icon" src="~assets/img/navbar/message.svg" alt />
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "MainNavBar",
  components: {
    NavBar
  },
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
</style>
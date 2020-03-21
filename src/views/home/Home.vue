<template>
  <div id="home">
    <main-nav-bar />

    <el-tabs class="home-tabs" v-model="activeName" @tab-click="handleClick" tab-position="top">
      <el-tab-pane label="动态" name="first">动态</el-tab-pane>
      <el-tab-pane label="推荐" name="second">推荐</el-tab-pane>
    </el-tabs>
  </div>
</template>


<script>
import MainNavBar from "components/content/mainNavBar/MainNavBar";
export default {
  name: "Home",
  components: {
    MainNavBar
  },
  data() {
    return {
      input: "message",
      activeName: "first"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
<style >
#home .el-tabs__item.is-active {
  color: var(--color-main);

}
#home .el-tabs__item{
  font-size: 16px;
}
#home .el-tabs__nav-wrap::after {
  height: 1px;
}
#home .el-tabs__active-bar {
  background-color: var(--color-main);
}
#home .el-tabs__nav-scroll {
  display: flex;
  justify-content: center;
  font-size: 18px;
}
</style>
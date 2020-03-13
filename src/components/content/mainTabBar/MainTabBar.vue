<template>
  <div id="tab-bar">
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-icon" src="~assets/img/tabbar/homepage.svg" alt />
        <img slot="item-icon-active" src="~assets/img/tabbar/homepage_fill.svg" alt />
        <div slot="item-text">首页</div>
      </tab-bar-item>

      <tab-bar-item path="/note">
        <img slot="item-icon" src="~assets/img/tabbar/collection.svg" alt />
        <img slot="item-icon-active" src="~assets/img/tabbar/collection_fill.svg" alt />
        <div slot="item-text">书影音</div>
      </tab-bar-item>

      <tab-bar-item path="/group">
        <img slot="item-icon" src="~assets/img/tabbar/service.svg" alt />
        <img slot="item-icon-active" src="~assets/img/tabbar/service_fill.svg" alt />
        <div slot="item-text">小组</div>
      </tab-bar-item>

      <tab-bar-item path="/fair">
        <img slot="item-icon" src="~assets/img/tabbar/manage.svg" alt />
        <img slot="item-icon-active" src="~assets/img/tabbar/manage_fill.svg" alt />
        <div slot="item-text">市集</div>
      </tab-bar-item>

      <tab-bar-item path="/personal">
        <img slot="item-icon" src="~assets/img/tabbar/people.svg" alt />
        <img slot="item-icon-active" src="~assets/img/tabbar/people_fill.svg" alt />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  },
  data() {
    return {};
  }
};
</script>
<style  scoped>
</style>
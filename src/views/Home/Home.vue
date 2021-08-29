<template>
  <div class="home">
    <HomeHead :isHome="true" />
    <div class="demoMain">
      <HomeSideBar :barData="sideBarData" />
      <div class="demoRight">
        <keep-alive>
          <router-view /> 
        </keep-alive>
      </div>
    </div>
    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HomeHead from "@/components/h-Component/h-head.vue";
import HomeSideBar from "@/components/h-Component/h-sideBar.vue";
import HomeFoot from "@/components/h-Component/h-footer.vue";
@Component({
  components: {
    HomeHead,
    HomeSideBar,
    HomeFoot
  },
})
export default class Home extends Vue {
  private readonly sideBarData = {
    username: "Lnevan",
    itemArray: [
      {
        itemName: "资产标识",
        itemLink: "capitalIdentify",
      },
      {
        itemName: "资产查询",
        itemLink: "capitalQuery",
      },
    ],
  };
}
</script>
<style lang="scss">
.demoMain {
  width: 100%;
  box-sizing: border-box;
  padding-left: 50px;
  display: flex;
  justify-content: flex-start;
  .demoRight {
    box-sizing: border-box;
    padding-top: 60px;
  }
}
</style>
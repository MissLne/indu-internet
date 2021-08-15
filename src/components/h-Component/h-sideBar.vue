<template>
  <div id="h-sideBar">
    <div class="username">欢迎登录：{{ barData.username }}</div>
    <div class="sidebar">
      <div class="animation" :style="{top: animation + 'px'}"></div>
      <router-link
        class="barItem"
        v-for="(item, index) in barData.itemArray"
        :key="index"
        :to="item.itemLink"
        :style="{color: (fontC === index? '#fff' : '#333')}"
        tag="div"
        @click.native="clickHandle(index)"
        >{{ item.itemName }}</router-link
      >
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
class Item {
  itemName: string = "";
  itemLink: string | object = "";
}
interface BarData {
  username: string;
  itemArray: Array<Item> | undefined;
}

@Component({
  components: {},
})
export default class HomeSideBar extends Vue {
  @Prop({}) barData: BarData | undefined;

  private animation: number = 0
  private fontC: number = 0


  clickHandle(index: number): void{
    this.animation = 99 * index
    this.fontC = index
  }
}
</script>
<style lang="scss">
#h-sideBar {
  box-sizing: border-box;
  width: 370px;
  .username {
    width: 100%;
    height: 60px;
    line-height: 60px;
    color: #444;
    font-weight: bold;
    font-size: 23px;
  }
  .sidebar {
    position: relative;
    .barItem {
      width: 270px;
      height: 80px;
      margin-bottom: 19px;
      font-size: 23px;
      text-align: center;
      line-height: 80px;
      border-radius: 15px;
      cursor: pointer;
      transition: all .25s;
    }
    .animation {
      position: absolute;
      width: 270px;
      height: 80px;
      background: #39ace5;
      z-index: -1;
      border-radius: 15px;
      transition: all .25s;
      box-shadow: 0px 6px 14px 0px rgba(0, 0, 0, 0.16);
    }
  }
}
</style>
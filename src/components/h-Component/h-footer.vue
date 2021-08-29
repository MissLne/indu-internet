<template>
  <div id="homeFoot" :class="{ pellucidity: !isHome }">
    <div class="slot"></div>
    <div class="footer">
      <img src="@/assets/images/logo-with-lines.png" />
      <p>
        企业数字资产管理系统（V1.0.0）指导单位:中国信息通信研究院 京ICP备:XXXX号
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  components: {},
})
export default class HomeFoot extends Vue {
  @Prop({}) isHome!: Boolean;
}
</script>
<style lang="scss">
#homeFoot {
  .slot {
    width: 100%;
    height: 100px;
  }
  .footer {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    img {
      margin-bottom: 4px;
      width: 83%;
    }
    p {
      box-shadow: 0px -6px 14px 0px rgba(0, 0, 0, 0.2);
      box-sizing: border-box;
      width: 100%;
      height: 80px;
      background: #39ace5;
      color: #fff;
      font-size: 17px;
      line-height: 80px;
      text-align: center;
    }
  }
}
.pellucidity {
  opacity: 0.7;
}
</style>
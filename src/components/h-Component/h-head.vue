<template>
  <div id="homeHead" :class="{ pellucidity: !isHome }">
    <div class="head">
      <div class="head-left">
        <div class="container">
          <img src="@/assets/images/logowhite.png"/>
          <div class="content">
            <p>工业互联网标识解析</p>
            <p>三级标识节点管理系统</p>
          </div>
        </div>

        <div v-if="isHome">标识管理</div>
      </div>

      <div class="head-right" v-if="isHome">
        <div>登录</div>
        <img src="@/assets/images/User name_drop down.png" />
      </div>
    </div>

    <div class="footer">
      <img src="@/assets/images/logo-with-lines.png"/>
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
export default class HomeHead extends Vue {
  @Prop({}) isHome!: Boolean;
}
</script>
<style lang="scss">
#homeHead {
  // @font-face {
  //   font-family: "logosmall";
  //   src: url("@/assets/font/logosmall.svg");
  // }
  box-sizing: border-box;
  width: 100%;
  .head {
    box-sizing: border-box;
    width: 100%;
    height: 99px;
    padding: 0 78px;
    background: #39ace5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    .head-left {
      width: 599px;
      height: 99px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      > div:nth-of-type(2) {
        background: #91d2f2;
        width: 160px;
        height: 99px;
        text-align: center;
        line-height: 99px;
        font-size: 23px;
      }
      .container {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        img {
          width: 52px;
          height: 55.5px;
          margin-right: 16px;
        }
        .content {
          text-align: center;
        }
        p:nth-of-type(1) {
          margin-bottom: 5px;
          font-weight: bold;
          font-size: 23px;
        }
        p:nth-of-type(2) {
          font-weight: bold;
          font-size: 17px;
        }
      }
    }
    .head-right {
      box-sizing: border-box;
      width: 160px;
      height: 99px;
      padding: 0 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      div {
        font-size: 23px;
        width: 90px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
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
      // height: 55.5px;
    }
    p {
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
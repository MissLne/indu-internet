<template>
  <div id="homeHead" :class="{ pellucidity: !isHome }">
    <div class="head">
      <div class="cover" v-if="isUser" @click="closeUser"></div>
      <div class="head-left">
        <div class="container">
          <img src="@/assets/images/logowhite.png" />
          <div class="content">
            <p>工业互联网标识解析</p>
            <p>三级标识节点管理系统</p>
          </div>
        </div>

        <div v-if="isHome">标识管理</div>
      </div>

      <div class="head-right" v-if="isHome">
        <div>登录</div>
        <img
          src="@/assets/images/User name_drop down.png"
          style="cursor: pointer"
          @click.stop="user"
        />
        <div class="layout" v-if="isLayout">
          <p>确定退出登录？</p>
          <div>
            <div @click="closeUser">取消</div>
            <div @click="sure">确定</div>
          </div>
        </div>
        <div class="user" v-if="isUser">
          <div>
            <img src="@/assets/images/homefont/Personal.png" />
            <p>个人中心</p>
          </div>
          <div @click="layout">
            <img src="@/assets/images/homefont/Logout.png" />
            <p>退出登录</p>
          </div>
        </div>
      </div>
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

  private isUser: boolean = false;
  private isLayout: boolean = false;
  user(): void {
    this.isUser = true;
  }
  closeUser(): void {
    this.isUser = false
    this.isLayout = false
  }
  layout(): void {
    this.isUser = false
    this.isLayout = true
  }

}
</script>
<style lang="scss">
#homeHead {
  box-sizing: border-box;
  z-index: 1000;
  width: 100%;
  .head {
    .cover {
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }
    box-sizing: border-box;
    width: 100%;
    height: 99px;
    padding: 0 78px 0 50px;
    background: #39ace5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    box-shadow: 0px 6px 14px 0px rgba(0, 0, 0, 0.2);
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
      position: relative;
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
      .user {
        z-index: 2;
        position: absolute;
        top: 105px;
        right: 0;
        width: 160px;
        height: 100px;
        font-size: 20px;
        background: #6ac1ec;
        border-radius: 10px;
        box-shadow: 0px -2px 14px 0px rgba(0, 0, 0, 0.16);
        display: flex;
        flex-direction: column;
        z-index: 102;
        > div {
          img {
            width: 20px;
            height: 20px;
            margin-right: 6px;
          }
          width: 160px;
          flex-grow: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }
        animation: user .5s;
      }
      @keyframes user {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      @keyframes layout {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      .layout {
        animation: layout .5s;
        position: absolute;
        top: 105px;
        right: 0;
        width: 216px;
        height: 135px;
        box-sizing: border-box;
        padding: 27px 0 21px 0;
        color: #fff;
        font-size: 20px;
        background: #5ebceb;
        border-radius: 10px;
        box-shadow: 0px -2px 14px 0px rgba(0, 0, 0, 0.16);
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        > div {
          width: 216px;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          > div {
            width: 87px;
            height: 46px;
            font-size: 17px;
            text-align: center;
            line-height: 46px;
            cursor: pointer;
          }
          > div:nth-of-type(1) {
            border-radius: 5px 0 0 5px;
            background: #39ace5;
          }
          > div:nth-of-type(2) {
            border-radius: 0 10px 10px 0;
            background: #91d2f2;
          }

        }
      }
    }
  }
}
.pellucidity {
  opacity: 0.7;
}
</style>
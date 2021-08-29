<template>
  <div id="addlist">
    <div class="bg" :class="closeBox? 'closebg' : ''"></div>
    <!-- <img class="bg" src="@/assets/images/homefont/Shutdown.png"/> -->
    <div class="container" :class="closeBox? 'closeBox' : ''">
      <div class="header">
        <p>资产标识管理</p>
        <img src="@/assets/images/homefont/Shutdown.png" @click="close"/>
      </div>
      <div class="bodyer">
        <div class="left">
          <div v-for="(item, index) in inputList" :key="index">
            <p>{{ item.name }}</p>
            <input :placeholder="item.text" />
          </div>
        </div>
        <div class="right">
          <div>
            <p>登记日期</p>
            <el-date-picker type="date" placeholder="选择日期" />
          </div>
          <div>
            <p>资产图片</p>
            <img src="@/assets/images/addpicture.png" />
          </div>
        </div>
      </div>
      <div class="footer">
        <div @click="close">取消</div>
        <div @click="save">保存</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
class ListItem {
  public name: string = "";
  public text: string = "";
}
@Component({
  components: {},
})
export default class Addlist extends Vue {
  private closeBox: boolean = false
  private inputList: Array<ListItem> = [
    {
      name: "资产标识",
      text: "请输入资产标识",
    },
    {
      name: "资产名称",
      text: "请输入资产名称",
    },
    {
      name: "资产描述",
      text: "请输入资产描述",
    },
    {
      name: "资产来源",
      text: "请输入资产来源",
    },
    {
      name: "规格说明",
      text: "请输入规格说明",
    },
  ];

  private close() : void {
    this.closeBox = true
    setTimeout(() => {
      this.closeBox = false
    },2000)
    this.$emit("close")
  }
  private save() : void {
    this.$emit("close")
  }

}
</script>
<style lang="scss">
 #addlist {
  .bg {
    background: #000;
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: -1;
    opacity: 0.4;
    z-index: 100;
    animation: mybg 2s;
  }
  .closebg {
    animation: closebg 2s;
  }
  @keyframes closebg {
    0% {
       top: 0;
    }
    100% {
       top: -2000px;
    }
  }
  @keyframes mybg {
    0% {
       top: -2000px;
    }
    100% {
       top: 0;
    }
  }
  .container {
    background: #EAEAEA;
    z-index: 100;
    box-shadow: 0px 6px 14px 0px rgba(0, 0, 0, 0.16);
    border-radius: 10px;
    color: #fff;
    width: 1500px;
    height: 700px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    animation: mycontainer 2s;
  }
  .closeBox {
    animation: closeBox 2s;
  }
  @keyframes closeBox {
    0% {
       top: 50%;
    }
    100% {
       top: -2000px;
    }
  }
  @keyframes mycontainer {
    0% {
       top: -2000px;
    }
    100% {
       top: 50%;
    }
  }

  .header {
    box-sizing: border-box;
    border-radius: 10px 10px 0 0;
    width: 100%;
    height: 60px;
    padding: 0 29px 0 50px;
    font-size: 23px;
    font-weight: bold;
    background: #39ace5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 31px;
      height: 31px;
      cursor: pointer;
    }
  }
  .bodyer {
    width: 100%;
    box-sizing: border-box;
    padding-left: 119px;
    height: 420px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 50px;
    border-radius: 10px;
    .left {
      height: 420px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      margin-right: 100px;
      div {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        p {
          width: 130px;
          height: 52px;
          background: #39ace5;
          border-radius: 10px 0 0 10px;
          text-align: center;
          line-height: 52px;
          font-size: 20px;
        }
        input {
          box-sizing: border-box;
          width: 520px;
          height: 52px;
          border: 2px solid #39ace5;
          padding-left: 25px;
          background: transparent;
          border-radius: 0 10px 10px 0;
          outline: none;
          font-size: 20px;
          color: #39ace5;
        }
        input::-webkit-input-placeholder {
          font-size: 20px;
          color: #39ace5;
        }
      }
    }
    .right {
      height: 192px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-direction: column;
      div {
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }
      > div:nth-of-type(2) {
        align-items: flex-start;
        p {
          border-radius: 10px;
        }
      }
      p {
        width: 130px;
        height: 52px;
        background: #39ace5;
        border-radius: 10px 0 0 10px;
        text-align: center;
        line-height: 52px;
        font-size: 20px;
      }
      .el-input__inner::-webkit-input-placeholder {
          
          font-size: 16px;
          color: #39ace5;
        }
      .el-input__inner {
        width: 196px;
        height: 44px;
        border: 2px solid #39ace5;
        background: transparent;
        border-radius: 0 10px 10px 0;
      }
      img {
        width: 100px;
        height: 100px;
        margin-left: 20px;
        cursor: pointer;
      }
    }
  }
  .footer {
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    padding-right: 30px;
    margin-top: 88px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    div {
      box-sizing: border-box;
      width: 90px;
      height: 52px;
      border-radius: 10px;
      text-align: center;
      line-height: 52px;
      font-size: 20px;
      cursor: pointer;
      border: 2px solid #39ace5;
    }
    > div:nth-of-type(1) {
      color: #39ace5;
      margin-right: 30px;
    }
    > div:nth-of-type(2) {
      background: #39ace5;
    }
  }
}
</style>
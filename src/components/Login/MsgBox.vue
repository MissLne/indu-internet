<template>
  <div class="msg-box" v-show="isShow" :style="{ 'color': isSucceed ? '#008000' : '#8B0000' }">
    <img src="@/assets/images/msg-box/succeed.png" class="pic" v-if="isSucceed">
    <img src="@/assets/images/msg-box/error.png" class="pic" v-else>
    {{showMsg}}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {},
})
export default class MsgBox extends Vue{
  private showMsg: String = '';
  private isSucceed: Boolean = false;
  private isShow: Boolean = false;
  public showBox(succeed: Boolean, msg: String) {
    this.isSucceed = succeed;
    this.showMsg = msg;
    this.isShow = true;
    setTimeout(() => {
      this.isShow = false;
    }, 1000)
  }
}
</script>

<style lang="scss" scoped>
  .msg-box {
    display: flex;
    align-items: center;
    position: fixed;
    top: 50%;
    left: 50%;
    height: 80px;
    padding: 0 40px 0 20px;
    background-color: rgb(192, 229, 248);
    font: bold 30px Microsoft YaHei;
    border-radius: 20px;
    transform: translate(-50%, -50%);
    .pic {
      margin-right: 25px;
    }
  }
</style>
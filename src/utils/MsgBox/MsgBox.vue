<template>
  <div class="msg-box" :style="{ 'color': boxData.color, 'background-color': boxData.bgColor }">
    <img :src="boxData.picSrc" class="pic">
    {{boxData.showMsg}}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
interface BoxData {
  color: string,
  showMsg: string,
  picSrc: string,
  bgColor?: string,
}
@Component({})
export default class MsgBox extends Vue {
  public boxData: BoxData = { color: '', showMsg: '', picSrc: '' }
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
    background-color: #C0E5F8;
    font: bold 30px Microsoft YaHei;
    border-radius: 20px;
    box-shadow: 0px 6px 14px 0px rgba(0, 0, 0, 0.2);
    transform: translate(-50%, -50%);
    animation: 
      move 0.5s ease-out forwards,
      move 0.3s ease-in forwards reverse 1.2s;
    .pic {
      margin-right: 25px;
    }
  }
  @keyframes move {
    0% {
      transform: translate(-50%, calc(-50% + 30px));
      opacity: 0;
    }
    100% {
      transform: translate(-50%, -50%);
      opacity: 1;
    }
  }
</style>
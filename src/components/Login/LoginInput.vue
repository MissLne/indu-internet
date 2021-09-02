<template>
  <div class="login-input">
    <!-- <div>{{model}} {{inputData}}</div> -->
    <input
      class="input"
      :type="isPW && !isShowPW && haveData ? 'password' : 'text'"
      :style="{ '--width': width }"
      :class="{ 'active': isActive, 'have-data': haveData, 'wrong': isWrong }"
      v-model="inputData"
      @focus="onFocus"
      @blur="onBlur"
      @change="inputListeners.change"
    >
    <span class="wrong-msg" v-show="isWrong">{{verifyCodeWrong ? '验证码错误' : holder}}</span>

    <img :src="picSrc" class="left">
    <svg v-if="isPW" width="26" height="26" class="right" @click="onShowPW">
      <path d="M 0 13 Q 13 -6, 26 13" class="eye" :class="{ 'eye-close': isShowPW }"/>
      <path d="M 0 13 Q 13 32, 26 13" class="eye"/>
      <circle cx="13" cy="13" r="4" class="eyeball" :class="{ 'eyeball-close': isShowPW }"/>
    </svg>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Model } from 'vue-property-decorator';
@Component({
  components: {},
})
export default class LoginInput extends Vue {
  @Model('change') model!: String;
  @Prop() readonly isPW!: Boolean;
  @Prop() readonly width!: Number;
  @Prop() readonly holder!: String;
  @Prop() readonly picSrc!: String;
  // 输入框边框与文字
  private inputData: String = this.holder; // input内的数据
  private isActive: Boolean = false; // 用于 onFocus 边框绿色
  private haveData: Boolean = false; // 用于 输入框有内容时 字体变色
  public isWrong: Boolean = false; // 用于 输入框为空时 边框红色、提示字
  public verifyCodeWrong: Boolean = false; // 用于 验证码错误提示字
  private onFocus(): void {
    this.isWrong = false, this.verifyCodeWrong = false;
    this.isActive = true;
    this.haveData = true;
    if (this.inputData === this.holder) {
      this.inputData = '';
    }
  }
  private onBlur(): void {
    this.isActive = false;
    if (this.inputData === '') {
      this.inputData = this.holder;
      this.haveData = false;
    }
  }
  // 将外层的input监听器送进来
  private get inputListeners() {
    const vm = this;
    return Object.assign({}, this.$listeners, {
      change(event: any) {
        vm.$emit('change', event.target.value);
      }
    })
  }
  // 密码框显示隐藏
  private isShowPW: Boolean = false;
  onShowPW() {
    this.isShowPW = !this.isShowPW;
  }
}
</script>

<style lang="scss" scoped>
  .login-input {
    display: inline-block;
    position: relative;
    vertical-align: top;
    .input {
      box-sizing: border-box;
      width: calc(var(--width) * 1px);
      height: 58px;
      border: 4px solid rgba(255, 255, 255, 0.3);
      padding: 0 20px 0 76px;
      margin-bottom: 30px;
      background-color: transparent;
      font: 20px Microsoft YaHei;
      color: rgba(255, 255, 255, 0.5);
      border-radius: 20px;
      outline: none;
      transition: border 0.5s ease-in-out;
    }
    .have-data {
      color: rgb(255, 255, 255);
    }
    .active {
      border-color: rgba(0, 255, 0, 0.5);
    }
    .wrong {
      border-color: rgba(255, 0, 0, 0.5);
    }
    .wrong-msg {
      position: absolute;
      bottom: 8px;
      left: 0px;
      color: rgba(255, 0, 0, 0.5);
    }
    .left {
      position: absolute;
      top: 16px;
      left: 27px;
    }
    .right {
      position: absolute;
      top: 16px;
      right: 27px;
      transition: all 1s;
      .eye {
        fill: none;
        stroke: rgba(255, 255, 255, 0.5);
        stroke-width: 3;
        stroke-linecap: round;
        transition: all 0.5s;
      }
      .eyeball {
        fill: none;
        stroke: rgba(255, 255, 255, 0.5);
        stroke-width: 3;
        stroke-linecap: round;
        stroke-dasharray: 25;
        transition: all 0.5s;
        transform-box: fill-box;
        transform-origin: center;
        transform: rotate(90deg);
      }
      .eye-close {
        d: path("M 0 13 Q 13 32, 26 13");
        transition-delay: 0.2s;
      }
      .eyeball-close {
        stroke-dashoffset: 25;
      }
    }
  }

</style>

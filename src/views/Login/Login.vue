<template>
  <div id="login">
    <MsgBox ref="msgBox"/>
    <HomeHead :isHome="false"/>
    <div class="login-wrap" :style="{ '--wrap-height': isSpread ? '500' : '120' }">
      <div class="title" @click="spreadWrap">登录</div>
      <!-- <div>{{formData}}</div> -->
      <form class="form" :style="{ 'opacity': isSpread ? '1' : '0' }">
        <LoginInput
          ref="userName"
          :isPW="false" :width="376" :holder="'请输入用户名'"
          :picSrc="require('@/assets/images/login-input/userName.png')"
          v-model="formData.userName"
        />
        <LoginInput
          ref="password"
          :isPW="true" :width="376" :holder="'请输入密码'"
          :picSrc="require('@/assets/images/login-input/password.png')"
          v-model="formData.password"
        />
        <LoginInput
          ref="verifyCode"
          :isPW="false" :width="228" :holder="'请输入验证码'"
          :picSrc="require('@/assets/images/login-input/verifyCode.png')"
          v-model="formData.verifyCode"
        />
        <img :src="verifyCodeSrc" alt="" class="code-pic" @click="changeCode">
        <button class="submit" @click.prevent="loginClick">登录</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import HomeHead from "@/components/h-Component/h-head.vue"
import LoginInput from "@/components/Login/LoginInput.vue"
import MsgBox from "@/components/Login/MsgBox.vue"
@Component({
  components: {
    HomeHead,
    LoginInput,
    MsgBox
  },
})
export default class Login extends Vue {
  // 按钮伸展
  private isSpread: Boolean = false;
  private spreadWrap () {
    this.isSpread = !this.isSpread;
    // (this.$refs.msgBox as MsgBox).showBox(true, '登陆成功!');
    // (this.$refs.msgBox as MsgBox).showBox(false, '用户名错误或密码错误!');
  }
  // 表单信息
  private formData: { [key: string]: string } = {
    "userName": '',
    "password": '',
    "verifyCode": ''
  }
  private loginClick(): void {
    let loginDto = this.formData;

    let cancel = false;
    for (const x in loginDto) {
      if (loginDto[x] === '') { 
        (this.$refs[x] as LoginInput).isWrong = true;
        cancel = true;
      }
    }
    if (cancel) return;
    
    (this as any).$axios.post("/industrial-internet/api/login", loginDto, {
      Headers: { 'Content-Type': 'application/json' }
    })
    .then((res: any) => {
      res = res.data;
      switch(res.code) {
        case 200: // 成功
          localStorage.setItem('token', res.data.token);
          this.$router.push({ name: 'home' });
          (this.$refs.msgBox as MsgBox).showBox(true, '登陆成功!');
          break;
        case 10007: // 验证码错误
          (this.$refs.verifyCode as LoginInput).isWrong = true;
          (this.$refs.verifyCode as LoginInput).verifyCodeWrong = true;
          break;
        case -2: // 用户名或密码错误
          (this.$refs.msgBox as MsgBox).showBox(false, '用户名错误或密码错误!');
          break;
        
        default:
          (this.$refs.msgBox as MsgBox).showBox(false, '未知错误,请稍后重试!');
      }
    })
  }
  // 获取验证码
  private verifyCodeSrc: String = '';
  private changeCode(): void {
    (this as any).$axios.get('/industrial-internet/api/getVerifyCode', { responseType: 'arraybuffer' })
    .then((res: any) => {
      this.verifyCodeSrc = 'data:image/png;base64,' + btoa(new Uint8Array(res.data).reduce((data, byte) => data + String.fromCharCode(byte), ''));
    })
  }
  // 生命周期函数
  created() {
    this.changeCode()
  }
}
</script>

<style lang="scss">
#login {
  background-color: yellowgreen;
  .login-wrap {
    overflow: hidden; 
    width: 580px;
    height: calc(var(--wrap-height) * 1px);
    margin: calc(50vh - 100px - var(--wrap-height) / 2 * 1px) auto;
    /* height: 120px;
    margin: 520px auto;
    height: 500px;
    margin: 330px auto; */
    background: rgba(255, 255, 255, 0.2);
    text-align: center;
    box-shadow: 0px 6px 14px 0px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    border-radius: 40px;
    transition: all ease 0.5s;
    .title {
      width: 82px;
      height: 40px;
      margin: 42px auto 35px;
      font: bold 40px/1 Microsoft YaHei;
      color: #FFFFFF;
    }
    .form {
      margin: 0 102px;
      transition: opacity 0.5s;
      .code-input {
        display: inline-block;
        width: 228px;
        vertical-align: top;
      }
      .code-pic {
        display: inline-block;
        width: 138px;
        height: 58px;
        margin-left: 10px;
      }
      .submit {
        width: 376px;
        height: 78px;
        border: 0;
        background-color: #91D2F2;
        font: 36px/78px Microsoft YaHei;
        color: #FFFFFF;
        box-shadow: 0px 6px 14px 0px rgba(0, 0, 0, 0.1);
        border-radius: 40px;
      }
    }
  }
}
</style>

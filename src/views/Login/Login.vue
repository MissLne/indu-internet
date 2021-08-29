<template>
  <div id="login">
    ouo
    <button @click="loginClick">登录</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({
  components: {},
})
export default class Login extends Vue {
  loginClick(): void {
    (this as any).$axios.git("/api/industrial-internet/assets/delete/1")
  }
}
</script>

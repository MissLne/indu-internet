<template>
  <div id="prompt" :class="content.class">
    <img :src="font"/>
    <p>{{content.text}}</p>
  </div>
</template>
<script lang="ts">
import { Component, Vue ,Prop } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Prompt extends Vue {
  @Prop({}) content!: any
  private font: string = ""
  private imgUrl: any = [
    require("@/assets/images/homefont/successfully.png"),
    require("@/assets/images/homefont/Tip_Missing.png"),
    require("@/assets/images/homefont/error.png"),
  ];
  created() {
    // console.log(this.content.type);
    
    // this.font = this.imgUrl[this.content.type]
    // console.log(this.font);
    
  }
}
</script>
<style lang="scss">
#prompt {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  height: 80px;
  padding: 0 44px 0 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
  border-radius: 20px;
  img {
    margin-right: 25px;
    width: 44px;
    height: 44px;
  }
}
.success {
  color: #008000;
  background: #B5FFB5;
}
.tipMissing {
  color: #B05800;
  background: #C0E5F8;
}
.error {
  color: #8B0000;
  background: #FFB5B5;
}
</style>

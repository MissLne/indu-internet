<template>
  <div id="square">
    <div class="title">
      <img src="@/assets/images/homefont/Tip_Missing.png" />
      <p>确认删除</p>
    </div>
    <p>确定删除88.236.900001/a01吗？，删除后不可恢复！</p>
    <div class="btn">
      <div @click="cancel">取消</div>
      <div @click="sure">确定</div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Square extends Vue {
  @Prop({}) private deleteItem!: any
  cancel() {
    this.$emit("cancelDelete",{sure: 0})
  }
  sure() {
    console.log(this.deleteItem);
    // (this as any).$axios.get(`/api/industrial-internet/assets/delete/${this.deleteItem.identification}`)
    // .then((res: any) => {
      this.$emit("cancelDelete",{sure: 1})
    // })
  }
}
</script>
<style lang="scss">
#square {
  z-index: 999;
  width: 723px;
  height: 262px;
  box-sizing: border-box;
  color: #b05800;
  font-size: 30px;
  border-radius: 20px;
  background: rgba(84, 121, 140, 0.9);
  padding: 18px 25px;
  position: fixed;
  left: 50%;
  top: 50%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  transform: translate(-50%, -50%);
  > p {
    margin-left: 69px;
    overflow: wrap;
  }
  .title {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    img {
      width: 44px;
      height: 44px;
      margin-right: 25px;
    }
  }
  .btn {
    width: 100%;
    color: #fff;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    div {
      width: 100px;
      height: 52px;
      text-align: center;
      line-height: 52px;
      cursor: pointer;
    }
    > div:nth-of-type(1) {
      background: #39ACE5;
      border-radius: 10px 0 0 10px;
    }
    > div:nth-of-type(2) {
      background: #91D2F2;
      border-radius: 0 10px 10px 0;
    }
  }
}
</style>

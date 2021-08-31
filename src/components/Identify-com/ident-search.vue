<template>
  <div id="identSearch">
    <div class="searchTitle">
      <img src="@/assets/images/homefont/search.png"/>
      <p>搜索条件</p>
    </div>
    <div class="input-btn">
      <div class="input-box">
        <div>
          <p>资产名称：</p>
          <el-input placeholder="请输入内容" v-model="searchCtx.name"></el-input>
        </div>
        <div>
          <p>登记日期：</p>
          <el-date-picker type="date" placeholder="选择日期" v-model="searchCtx.date"> </el-date-picker>
        </div>
      </div>
      <div class="btn-box">
        <div @click="reset">重置</div>
        <div @click="search">搜索</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";


@Component({
  components: {},
})
export default class IdentSearch extends Vue {
  public searchCtx: any = {
    date: "",
    name: ""
  }
  reset(): void {
    this.searchCtx.date = ""
    this.searchCtx.name = ""
    // this.bus.$emit('reset')
  }
  search(): void {
    this.$store.commit("SET_SEARCH",this.searchCtx)
  }
}
</script>
<style lang="scss">
  #identSearch {
  box-sizing: border-box;
  width: 1450px;
  height: 180px;
  padding: 19px 0 42px 15px;
  background: #ffffff;
  box-shadow: 0px 6px 14px 0px rgba(0, 0, 0, 0.16);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  .searchTitle {
    width: 127px;
    color: #39ACE5;
    font-size: 23px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 28px;
      height: 28px;
    }
  }
  .input-btn {
    width: 100%;
    box-sizing: border-box;
    padding: 0 90px 0 124px;
    margin-top: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .input-box {
    width: 914px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 20px;
      color: #333;
      white-space:nowrap;
    }
    .el-input__inner {
      width: 300px;
      height: 52px;
    }
  }
  .btn-box {
    width: 222px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      width: 96px;
      height: 52px;
      border-radius: 10px;
      font-size: 20px;
      color: #fff;
      text-align: center;
      line-height: 52px;
      cursor: pointer;
    }
    div:nth-of-type(1) {
      background: #FFCC00;
    }
    div:nth-of-type(2) {
      background: #39ACE5;
    }
  }
}
</style>
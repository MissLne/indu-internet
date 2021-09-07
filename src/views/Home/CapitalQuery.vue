<template>
  <div id="capital-query">
    <div class="query-box">
      <div class="box-title">
        <img src="@/assets/images/capital-query/title.png" class="img inline">资产查询
      </div>
      <div class="input-box">
        <input type="text" placeholder="请输入标识" class="input inline" v-model="queryData" @keypress="onPress">
        <div class="btn-query inline" @click="query">查询</div>
        <div class="btn-reset inline" @click="reset">重置</div>
      </div>
    </div>

    <div class="detail-box" v-if="!nodeData">
      <div class="left inline">
        <div class="pic">假装有图</div>  
        <div class="param-box">
          <h3 class="title">产品参数</h3>
          <div class="param">假装有参数</div>
        </div>
      </div>
      <div class="right inline">
        <ul>
          <li v-for="(value, key, index) in nodeItems" :key="value + index">
            <span class="item-name inline">{{itemTitles[index]}}</span>
            <span class="item-value inline">{{key + ':  ' + value}}</span>
          </li>
        </ul>
        <div class="qr-code-box">
          <h3 class="title">制造商官方微信公众号</h3>
          <div class="qr-code">假装有二维码</div>
        </div>
        <div class="website-box">
          <h3 class="title inline">制造商官方网址：</h3>（公司网址）
        </div>
      </div>

      <div class="brief-box">
        <h3 class="title">公司简介</h3>
        <div class="brief">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto minus itaque illum accusantium non delectus magni quibusdam ipsam deserunt provident harum modi nesciunt quos, consequuntur dicta! Deleniti minima explicabo laborum!</div>
      </div>

      <div class="address-box">
        <h3 class="title inline">制造商地址：</h3>
        广东省广州市番禺区小谷围街道……
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import Msg from "@/utils/MsgBox/Msg"

interface NodeItems {
  identifyCode: string;
  name: string;
  productionDate: string;
  manufacturer: string;
}

@Component({})
export default class CapitalQuery extends Vue {
  private queryData: string = '';
  private nodeData: object | null = null;
  private nodeItems: NodeItems = {
    identifyCode: '123',
    name: '123',
    productionDate: '123',
    manufacturer: '123',
  }
  private readonly itemTitles: Array<string> = ['标识码', '产品名称', '生产日期', '制造商'];
  query(): void {
    if (this.queryData === '') {
      Msg.error('标识不能为空!');
      return;
    }

    (this as any).$axios.get(`/industrial-internet/assets/query/${this.queryData}`)
    .then((res: any) => {
      console.log(res)
    }, (err: any) => {
      console.log(err)
    })
  }
  reset(): void {
    this.queryData = '';
  }
  onPress(e: KeyboardEvent): void {
    if (e.code === 'Enter') this.query();
  }
}
</script>

<style lang="scss">
  #capital-query {
    $theme-color: #39ACE5;
    min-height: 1220px;
    margin-bottom: 80px;
    background: url("../../assets/images/logomid.png") 292px 292px no-repeat;
    font-size: 20px;
    .query-box {
      overflow: hidden;
      width: 1450px;
      height: 180px;
      background-color: #fff;
      border-radius: 20px;
      box-shadow: 0px 6px 14px 0px rgba(0, 0, 0, 0.16);
      .box-title {
        margin: 16px 0 20px 15px;
        color: $theme-color;
        font-size: 23px;
        line-height: 28px;
        .img {
          margin-right: 7px;
        }
      }
      .input-box {
        margin-left: 50px;
        .input {
          outline: none;
          box-sizing: border-box;
          width: 980px;
          height: 52px;
          border: 2px solid #999999;
          padding: 0 13px;
          font-size: inherit;
          border-radius: 10px;
          transition: all 0.5s ease-out;
          &:focus {
            border-color: $theme-color;
            box-shadow: 0px 0px 6px -2px $theme-color;
          }
        }
        .btn-query,
        .btn-reset {
          width: 96px;
          height: 50px;
          line-height: 52px;
          text-align: center;
          color: #fff;
          border-radius: 10px;
          cursor: pointer;
        }
        .btn-query {
          margin-left: 50px;
          --lightness: 56%;
          background-color: hsl(200, 77%, var(--lightness));
          &:active {
            --lightness: 51%;
          }
        }
        .btn-reset {
          margin-left: 30px;
          --lightness: 50%;
          background-color: hsl(48, 100%, var(--lightness));
          &:active {
            --lightness: 48%;
          }
        }
      }
    }
    .detail-box {
      box-sizing: border-box;
      width: 1450px;
      padding: 55px 75px;
      margin-top: 20px;
      background-color: #fff;
      border-radius: 20px;
      box-shadow: 0px 6px 14px 0px rgba(0, 0, 0, 0.16);
      .left {
        width: 600px;
        .pic {
          width: 100%;
          height: 400px;
          border-radius: 10px;
        }
        .param-box {
          margin-top: 34px;
          .param {
            width: 100%;
            height: 198px;
            margin-top: 12px;
            background-color: $theme-color;
            border-radius: 10px;
          }
        }
      }
      .right {
        width: 650px;
        margin-left: 50px;
        ul li {
          box-sizing: border-box;
          overflow: hidden;
          width: 100%;
          height: 54px;
          border: 2px solid $theme-color;
          margin-bottom: 40px;
          background-color: $theme-color;
          border-radius: 10px;
          $list-height: 50px;
          .item-name {
            width: 130px;
            height: 100%;
            color: #fff;
            font-weight: 700;
            line-height: $list-height;
            text-align: center;
            cursor: default;
          }
          .item-value {
            box-sizing: border-box;
            width: calc(100% - 130px);
            height: 100%;
            padding: 0 25px;
            background-color: #fff;
            color: $theme-color;
            line-height: $list-height;
            border-radius: 0 10px 10px 0;
          }
        }
        .qr-code-box {
          margin-top: 4px;
          .qr-code {
            width: 200px;
            height: 198px;
            margin-top: 8px;
          }
        }
        .website-box {
          margin-top: 44px;
        }
      }
      .brief-box {
        margin-top: 34px;
        .brief {
          width: 100%;
          margin-top: 12px;
        }
      }
      .address-box {
        margin-top: 43px;
      }
      h3.title { // 通用小标题
        font-weight: 700;
        cursor: default;
      }
    }
  }
  .inline {
    display: inline-block;
    vertical-align: top;
  }
</style>
<template>
  <div id="table">
    <div class="table-box">
      <div class="t-head">
        <div>
          <img src="@/assets/images/homefont/list.png" />
          <p>标识列表</p>
        </div>
        <div>
          <div style="margin-right: 35px" @click="addlist">
            <img src="@/assets/images/homefont/add.png" />
            <p>添加</p>
          </div>
          <div>
            <img src="@/assets/images/homefont/import.png" />
            <p>导入</p>
          </div>
        </div>
      </div>
      <el-table
        :data="tableData"
        stripe
        style="width: 100%"
        :cell-style="{ 'text-align': 'center' }"
        :header-cell-style="{
          color: '#fff',
          background: '#39ACE5',
          'text-align': 'center',
        }"
      >
        <el-table-column prop="identification" label="资产标识">
        </el-table-column>
        <el-table-column prop="name" label="资产名称"> </el-table-column>
        <el-table-column prop="describe" label="资产描述"> </el-table-column>
        <el-table-column prop="source" label="资产来源"> </el-table-column>
        <el-table-column prop="explain" label="规格说明"> </el-table-column>
        <el-table-column prop="date" label="登记日期"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <div class="clickBtn">
              <p @click="handleToDetail(scope.row)" style="color: #6767C6;">详情</p>
            <p @click="handleToUpdate(scope.row)" style="color: #6767C6;">修改</p>
            <p @click="handleToDelete(scope.row)" style="color: #C66767;">删除</p>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="t-table">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
        :page-size="5"
        layout="prev, pager, next"
        :total="total"
      >
      </el-pagination>
      <div class="t-btn">
        <input v-model="currentPage2" @focus="foucs" @blur="blur"/>
        <div @click="jumpPage" class="sure">确定</div>
      </div>
    </div>
    <HomeFoot :isHome="true"></HomeFoot>
    <Prompt :content="proContent" v-if="false"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import HomeFoot from "@/components/h-Component/h-footer.vue";
import Prompt from "@/components/prompt.vue";
import { State, Getter, Mutation, Action } from "vuex-class";
class TableItem {
  private identification: string = "";
  private name: string = "";
  private describe: string = "";
  private source: string = "";
  private explain: string = "";
  private date: string = "";
}
@Component({
  components: {
    HomeFoot,
    Prompt
  },
})
export default class Table extends Vue {
  @Getter("homesearch") getSearch: any;
  @Watch("getSearch",{deep: true}) search(){
    console.log("嘤嘤嘤")
  }
  private tableData: Array<TableItem> = [];

  private currentPage1: number | string = 1;
  private currentPage2: number | string = "点击输入页码";
  private total: number = 0;
  private totalnum: any[] = [];
  private proContent: object = {
    type: 1,
    text: "导入成功！",
    class: "tipMissing"
  }
  private list = [
    {
      identification: "88.236.1/a01-000000000001",
      name: "ouo",
      describe: "可爱温柔小姐姐",
      source: "1",
      explain: "可爱温柔小姐姐",
      date: "2021-08-01",
    },
    {
      identification: "88.236.900001/a01-000000000001",
      name: "QAQ",
      describe: "可爱温柔小姐姐",
      source: "2",
      explain: "可爱温柔小姐姐",
      date: "2021-08-01",
    },
    {
      identification: "88.236.900001/a01-000000000001",
      name: "Lnevan",
      describe: "可爱温柔小姐姐",
      source: "3",
      explain: "可爱温柔小姐姐",
      date: "2021-08-01",
    },
    {
      identification: "88.236.900001/a01-000000000001",
      name: "Lnevan",
      describe: "可爱温柔小姐姐",
      source: "4",
      explain: "可爱温柔小姐姐",
      date: "2021-08-01",
    },
    {
      identification: "88.236.900001/a01-000000000001",
      name: "Lnevan",
      describe: "可爱温柔小姐姐",
      source: "5",
      explain: "可爱温柔小姐姐",
      date: "2021-08-01",
    },
    {
      identification: "88.236.900001/a01-000000000001",
      name: "Lnevan",
      describe: "可爱温柔小姐姐",
      source: "6",
      explain: "可爱温柔小姐姐",
      date: "2021-08-01",
    },
    {
      identification: "88.236.900001/a01-000000000001",
      name: "Lnevan",
      describe: "可爱温柔小姐姐",
      source: "7",
      explain: "可爱温柔小姐姐",
      date: "2021-08-01",
    },
    {
      identification: "88.236.900001/a01-000000000001",
      name: "Lnevan",
      describe: "可爱温柔小姐姐",
      source: "8",
      explain: "可爱温柔小姐姐",
      date: "2021-08-01",
    },
    {
      identification: "88.236.900001/a01-000000000001",
      name: "Lnevan",
      describe: "可爱温柔小姐姐",
      source: "9",
      explain: "可爱温柔小姐姐",
      date: "2021-08-01",
    },
    {
      identification: "88.236.900001/a01-000000000001",
      name: "Lnevan",
      describe: "可爱温柔小姐姐",
      source: "10",
      explain: "可爱温柔小姐姐",
      date: "2021-08-01",
    },
    {
      identification: "88.236.900001/a01-000000000001",
      name: "Lnevan",
      describe: "可爱温柔小姐姐",
      source: "11",
      explain: "可爱温柔小姐姐",
      date: "2021-08-01",
    },
    {
      identification: "88.236.900001/a01-000000000001",
      name: "Lnevan",
      describe: "可爱温柔小姐姐",
      source: "12",
      explain: "可爱温柔小姐姐",
      date: "2021-08-01",
    },
    {
      identification: "88.236.900001/a01-000000000001",
      name: "Lnevan",
      describe: "可爱温柔小姐姐",
      source: "13",
      explain: "可爱温柔小姐姐",
      date: "2021-08-01",
    },
  ];
  private searchCtx: {} = this.$store.state.homeSearch
  async mounted() {
    this.total = this.list.length;
    this.tableData = this.lala(5, 1);
    // this.tableData = this.list
  }
  addlist() {
    this.$emit("addList")
  }
  handleToDelete(data: object):void {
    console.log(data)
  }
  handleToDetail(data: object):void {
    console.log(data)
  }
  handleToUpdate(data: object):void {
    console.log(data)
  }
  lala(pageSize: number, pageNum: number) {
    let number: number = Math.ceil(this.list.length / pageSize);

    for (let i = 0; i < number; i++) {
      let temp: any[] = [];
      for (let j = 0; j < pageSize; j++) {
        temp.push(this.list.shift());
      }
      this.totalnum.push(temp);
    }
    console.log(this.totalnum);
    return this.totalnum[pageNum - 1];
  }
  initData(pagenum: number | string): void {
    // this.tableData = this.totalnum[pagenum - 1];
  }
  foucs() {
    this.currentPage2 = ""
  }
  blur() {
    if(this.currentPage2 == "") this.currentPage2 = "点击输入页码"
  }
  jumpPage(): void {
    this.currentPage1 = this.currentPage2;
    this.handleCurrentChange();
  }
  handleCurrentChange(): void {
    this.initData(this.currentPage1);
  }
}
</script>
<style lang="scss">
#table {
  // filter: blur(20px);
  margin-top: 10px;
  .clickBtn {
    display: flex;
    justify-content: space-around;
    align-items: center;
    p {
      cursor: pointer;
    }
  }
  .table-box {
    width: 1450px;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0px 6px 14px 0px rgba(0, 0, 0, 0.16);
  }
  .t-head {
    font-size: 23px;
    width: 100%;
    height: 60px;
    box-sizing: border-box;
    padding: 0 80px 0 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      cursor: pointer;
    }
    > div:nth-of-type(1) {
      color: #39ace5;
    }
    img {
      width: 22px;
      height: 22px;
      margin-right: 5px;
    }
  }
  .t-table {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .t-btn {
      display: flex;
    justify-content: flex-end;
    align-items: center;
    }
    input {
      width: 164px;
      height: 50px;
      border-radius: 10px 0 0 10px;
      border: none;
      background: #9BD5F1;
      text-align: center;
      color: #dbebf3;
      font-size: 19px;
      outline: none;
    }
    .sure {
      width: 88px;
      height: 50px;
      background: #39ACE5;
      color: #fff;
      font-size: 19px;
      text-align: center;
      line-height: 50px;
      border-radius: 0 10px 10px 0;
      cursor: pointer;
    }
  }
  z-index: -1;
}
.el-table--striped .el-table__body tr.el-table__row--striped td {
  background: #91d2f2 !important;
}
.el-table th,
.el-table tr {
  height: 50px;
}
</style>
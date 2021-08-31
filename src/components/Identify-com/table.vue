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
        <el-table-column prop="handle" label="资产标识">
        </el-table-column>
        <el-table-column prop="name" label="资产名称"> </el-table-column>
        <el-table-column prop="note" label="资产描述"> </el-table-column>
        <el-table-column prop="source" label="资产来源"> </el-table-column>
        <el-table-column prop="specifications" label="规格说明"> </el-table-column>
        <el-table-column prop="builddate" label="登记日期"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <div class="clickBtn">
              <Square
                v-if="isDelete"
                :deleteItem="scope.row"
                @cancelDelete="cancelDelete($event)"
              />
              <p @click="handleToDetail(scope.row)" style="color: #6767c6">
                详情
              </p>
              <p @click="handleToUpdate(scope.row)" style="color: #6767c6">
                修改
              </p>
              <p @click="isDelete = true" style="color: #c66767">删除</p>
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
        <input v-model="currentPage2" @focus="foucs" @blur="blur" />
        <div @click="jumpPage" class="sure">确定</div>
      </div>
    </div>
    <HomeFoot :isHome="true"></HomeFoot>
    <Prompt :content="proContent" v-if="isPrompt" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import moment from "moment";
import { State, Getter, Mutation, Action } from "vuex-class";

import HomeFoot from "@/components/h-Component/h-footer.vue";
import Square from "./square.vue";
import Addlist from "./add.vue";
import Prompt from "@/components/prompt.vue";

class TableItem {
  private handle: string = "";
  private name: string = "";
  private note: string = "";
  private source: string = "";
  private specifications: string = "";
  private builddate: string = "";
}

@Component({
  components: {
    HomeFoot,
    Prompt,
    Square,
    Addlist,
  },
})
export default class Table extends Vue {
  @Getter("homesearch") getSearch: any;
  @Watch("getSearch", { deep: true }) search() {
    let str = moment(this.getSearch.date)
      .format("YYYY-MM-DD hh:mm:ss")
      .slice(0, 10);
    console.log(this.getSearch);
    (this as any).$axios
      .post("/api/industrial-internet/assets/getAssetBy", {
        buildDate: str,
        name: this.getSearch.name,
      })
      .then((res: any) => {});
  }
  private tableData: Array<TableItem> = [];
  private isDelete: boolean = false;
  private isPrompt: boolean = false;
  private currentPage1: number | string = 1;
  private currentPage2: number | string = "点击输入页码";
  private total: number = 0;
  private totalnum: any[] = [];
  private proContent: object = {
    type: 1,
    text: "导入成功！",
    class: "tipMissing",
  };
  private list = [
    {
      handle: "88.236.1/a01-000000000001",
      name: "ouo",
      note: "可爱温柔小姐姐",
      source: "1",
      specifications: "可爱温柔小姐姐",
      builddate: "2021-08-01",
    },
    {
      handle: "88.236.1/a01-000000000001",
      name: "ouo",
      note: "可爱温柔小姐姐",
      source: "1",
      specifications: "可爱温柔小姐姐",
      builddate: "2021-08-01",
    },
    {
      handle: "88.236.1/a01-000000000001",
      name: "ouo",
      note: "可爱温柔小姐姐",
      source: "1",
      specifications: "可爱温柔小姐姐",
      builddate: "2021-08-01",
    },
    {
      handle: "88.236.1/a01-000000000001",
      name: "ouo",
      note: "可爱温柔小姐姐",
      source: "1",
      specifications: "可爱温柔小姐姐",
      builddate: "2021-08-01",
    },
    {
      handle: "88.236.1/a01-000000000001",
      name: "ouo",
      note: "可爱温柔小姐姐",
      source: "1",
      specifications: "可爱温柔小姐姐",
      builddate: "2021-08-01",
    },
    {
      handle: "88.236.1/a01-000000000001",
      name: "ouo",
      note: "可爱温柔小姐姐",
      source: "1",
      specifications: "可爱温柔小姐姐",
      builddate: "2021-08-01",
    },
    {
      handle: "88.236.1/a01-000000000001",
      name: "ouo",
      note: "可爱温柔小姐姐",
      source: "1",
      specifications: "可爱温柔小姐姐",
      builddate: "2021-08-01",
    },
    {
      handle: "88.236.1/a01-000000000001",
      name: "ouo",
      note: "可爱温柔小姐姐",
      source: "1",
      specifications: "可爱温柔小姐姐",
      builddate: "2021-08-01",
    },
    {
      handle: "88.236.1/a01-000000000001",
      name: "ouo",
      note: "可爱温柔小姐姐",
      source: "1",
      specifications: "可爱温柔小姐姐",
      builddate: "2021-08-01",
    },
    {
      handle: "88.236.1/a01-000000000001",
      name: "ouo",
      note: "可爱温柔小姐姐",
      source: "1",
      specifications: "可爱温柔小姐姐",
      builddate: "2021-08-01",
    },
    {
      handle: "88.236.1/a01-000000000001",
      name: "ouo",
      note: "可爱温柔小姐姐",
      source: "1",
      specifications: "可爱温柔小姐姐",
      builddate: "2021-08-01",
    },
    {
      handle: "88.236.1/a01-000000000001",
      name: "ouo",
      note: "可爱温柔小姐姐",
      source: "1",
      specifications: "可爱温柔小姐姐",
      builddate: "2021-08-01",
    }
  ];
  private searchCtx: {} = this.$store.state.homeSearch;

  private isUpdate: boolean = false;
  async mounted() {
    this.total = this.list.length;
    this.tableData = this.lala(5, 1);
    // this.tableData = this.list
  }
  addlist() {
    this.$emit("addList",{isUpdate: 0});
  }
  cancelDelete(e: any): void {
    this.isDelete = false;
    if (e.sure === 1) {
      this.proContent = {
        type: 0,
        text: "删除成功！",
        class: "success",
      };
      this.isPrompt = true;
      setTimeout(() => {
        this.isPrompt = false;
      }, 3000);
    }
  }
  handleToDetail(data: object): void {
    console.log(data);
  }
  handleToUpdate(data: object): void {
    this.$emit("addList", { ...data, isUpdate: 1 });
    // this.isUpdate = true
    // console.log(data);
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
    this.tableData = this.totalnum[pagenum - 1];
  }
  foucs() {
    this.currentPage2 = "";
  }
  blur() {
    if (this.currentPage2 == "") this.currentPage2 = "点击输入页码";
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
      background: #9bd5f1;
      text-align: center;
      color: #dbebf3;
      font-size: 19px;
      outline: none;
    }
    .sure {
      width: 88px;
      height: 50px;
      background: #39ace5;
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
<template>
  <div id="capitalIdentify">
    <IdentSearch/>
    <Table @addList="addList($event)"/>
    <Addlist v-if="isAdd" @close="close" :updateData="updateData"/>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import IdentSearch from "@/components/Identify-com/ident-search.vue";
import Table from "@/components/Identify-com/table.vue";
import Addlist from "@/components/Identify-com/add.vue";

@Component({
  components: {
    IdentSearch,
    Table,
    Addlist
  },
})
export default class CapitalIdentify extends Vue {
  private isAdd: boolean = false
  private updateData: unknown = {}
  private addList(data: unknown):void {
    this.updateData = data
    // console.log(data);
    
    this.isAdd = true
  }
  private close(): void {
    setTimeout(() => {
      this.isAdd = false
    },1000)
  }
}
</script>
<style lang="scss">
</style>
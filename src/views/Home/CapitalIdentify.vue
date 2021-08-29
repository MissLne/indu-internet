<template>
  <div id="capitalIdentify">
    <IdentSearch/>
    <Table @addList="addList"/>
    <Addlist v-if="isAdd" @close="close"/>
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
  private addList():void {
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
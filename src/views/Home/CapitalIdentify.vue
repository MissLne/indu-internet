<template>
  <div id="capitalIdentify">
    <IdentSearch/>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import IdentSearch from "@/components/Identify-com/ident-search.vue";

@Component({
  components: {
    IdentSearch
  },
})
export default class CapitalIdentify extends Vue {
}
</script>
<style lang="scss">

</style>
<template>
  <div class="home">
    <HomeHead :isHome="true"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HomeHead from '@/components/h-Component/h-head.vue'
@Component({
  components: {
    HomeHead
  },
})
export default class Home extends Vue {}
</script>

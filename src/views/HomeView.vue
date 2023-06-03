<template>
  <div class="home" style="display: inline-flex; width: 99vw; height: 88vh">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <HotMap />

    <PoiRanking />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HotMap from "@/components/HotMap.vue"; // @ is an alias to /src
import PoiRanking from "@/components/PoiRanking.vue";

@Options({
  components: {
    HotMap,
    PoiRanking,
  },
})
export default class HomeView extends Vue {}
</script>
<style scoped lang="scss">
.home {
  background-color: #fffafa;
}
</style>

<template>
  <v-app id="app">
    <v-content>
      <DataTable />
      <Visualizer />
      <FloorPlan />
      <FloorPlan1 />
      <FloorPlan2 />
      <FloorPlan4 />
    </v-content>
  </v-app>
</template>

<script>
import DataTable from "@/components/DataTable.vue";
import Visualizer from "@/components/Visualizer.vue";
import FloorPlan from "@/components/FloorPlan.vue";
import FloorPlan1 from "@/components/FloorPlan1.vue";
import FloorPlan2 from "@/components/FloorPlan2.vue";
import FloorPlan4 from "@/components/FloorPlan4.vue";

export default {
  name: "App",
  components: {
    DataTable,
    Visualizer,
    FloorPlan,
    FloorPlan1,
    FloorPlan2,
    FloorPlan4
  },
  data: () => ({})
};
</script>

<style>
</style>

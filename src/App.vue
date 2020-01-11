<template>
  <v-app id='app'>
    <v-content>
      <DataTable/>
      <FloorPlan/>
    </v-content>
  </v-app>
</template>

<script>
import DataTable from '@/components/DataTable.vue';
import FloorPlan from '@/components/FloorPlan.vue';

export default {
  name: 'App',
  components: {
    DataTable,
    FloorPlan,
  },
  data: () => ({
  }),
};
</script>

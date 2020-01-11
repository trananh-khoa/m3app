<template>
  <v-app id='app'>
    <v-content>
      <DataTable/>
      <Visualizer/>
    </v-content>
  </v-app>
</template>

<script>
import DataTable from '@/components/DataTable.vue';
import Visualizer from '@/components/Visualizer.vue';

export default {
  name: 'App',
  components: {
    DataTable,
    Visualizer,
  },
  data: () => ({
  }),
};
</script>

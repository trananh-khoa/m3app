<template>
  <v-container class='visualizer-card' fluid>
    <v-row>
      <v-col cols=4>
        <SuspectList @update='selectedSuspect=$event'/>
      </v-col>
      <v-col cols=8>
        <SuspectDataList :selectedSuspect='selectedSuspect'/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SuspectList from '@/components/SuspectList.vue';
import SuspectDataList from '@/components/SuspectData.vue';

export default {
  name: 'visualizer',
  data: () => ({
    selectedSuspect: '',
  }),
  components: {
    SuspectList,
    SuspectDataList,
  },
};
</script>

<style scoped>
</style>

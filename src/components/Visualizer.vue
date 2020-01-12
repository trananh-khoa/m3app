<template>
  <v-container class='visualizer-card' fluid>
    <v-row>
      <v-col cols=6>
        <v-row>
          <v-col class='col-top'>
            <SuspectList @update='selectedSuspect=$event'/>
          </v-col>
        </v-row>
        <v-row>
          <v-col class='col-bottom'>
            <SuspectDataList :selectedSuspect='selectedSuspect'/>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols=6>
        <SuspectLocations/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SuspectList from '@/components/SuspectList.vue';
import SuspectLocations from '@/components/SuspectLocations.vue';
import SuspectDataList from '@/components/SuspectData.vue';

export default {
  name: 'visualizer',
  data: () => ({
    selectedSuspect: '',
  }),
  components: {
    SuspectList,
    SuspectLocations,
    SuspectDataList,
  },
};
</script>

<style scoped>
.col-top {
  padding-top: 0;
}

.col-bottom {
  padding-bottom: 0;
}
</style>

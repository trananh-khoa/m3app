<template>
  <v-card raised>
    <v-card-title>Floor Plan</v-card-title>
    <v-container class='floor-plan-container'>
      <v-container
        class='floor-plan'
        :style="{'background-image': `url(${require('../assets/floor-plan.svg')})`}">
      </v-container>
    </v-container>
  </v-card>
</template>

<script>
// import getSuspectList from '@/utils/suspect-list';
// const SUSPECT_LIST = getSuspectList();

export default {
  data: () => ({
  }),
  name: 'suspectLocations',
  props: ['suspect'],
};
</script>

<style scoped>
.floor-plan {
  background-size: 100%;
  height: 725px;
}

.floor-plan-container {
  background: #F3F3F3;
}
</style>

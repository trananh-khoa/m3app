<template>
  <v-card raised>
    <v-card-title>Current Suspect</v-card-title>
    <v-container>
      <v-select
        :items="items"
        label="Select Suspect"
        v-model='selectedSuspect'
        @change="$emit('update', selectedSuspect);"
      ></v-select>
    </v-container>
  </v-card>
</template>

<script>
import getGuestList from '@/utils/visualizer-data';

export default {
  data: () => ({
    selectedSuspect: '',
    items: getGuestList(),
  }),
};
</script>

<style>

</style>

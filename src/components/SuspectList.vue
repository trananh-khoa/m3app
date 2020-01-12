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
import getGuestList from '@/utils/suspect-list';

export default {
  data: () => ({
    selectedSuspect: 'None',
    items: getGuestList(),
  }),
};
</script>

<style>

</style>

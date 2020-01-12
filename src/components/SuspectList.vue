<template>
  <v-card class ='suspectlist-data' raised>
    <v-select
        :items="items"
        label="Select Suspect"
      ></v-select>
  </v-card>
</template>

<script>
import getGuestList from '@/utils/visualizer-data';

export default {
  data: () => ({
    items: getGuestList(),
  }),
};
</script>

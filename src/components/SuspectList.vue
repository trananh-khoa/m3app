<template>
  <v-card class ='suspectlist-data' raised>
    <v-select
        :items="items"
        label="Read-only"
      ></v-select>
  </v-card>
</template>

<script>
import getGuestList from '@/constants/visualizer-data'
export default {
  data:() => ({
    items: getGuestList(),
  })
};
</script>


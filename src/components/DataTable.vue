<template>
  <v-card class='datatable-card' raised>
    <v-card-title>
      Raw Data
      <v-spacer></v-spacer>
      <v-text-field
        v-model='search'
        dense
        label='Search'
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      dense
      fixed-header
      multi-sort
      :headers='headers'
      :items='items'
      :search='search'
    >
    </v-data-table>
  </v-card>
</template>

<script>
import convertToDataTableJSON from '@/utils/datatable';
import data from '@/constants/data';

const HEADERS = [
  { text: 'Date (dd/mm/yyyy h:m:s)', value: 'date' },
  { text: 'Guest ID', value: 'guestID' },
  { text: 'Device', value: 'device' },
  { text: 'Device ID', value: 'deviceID' },
  { text: 'Event', value: 'event' },
];

export default {
  name: 'datatable',
  data: () => ({
    headers: HEADERS,
    items: convertToDataTableJSON(data),
    search: '',
  }),
};
</script>

<style scoped>
.datatable-card {
  margin: 12px;
}
</style>

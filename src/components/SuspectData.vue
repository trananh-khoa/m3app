<template>
  <v-card class='datatable-card' raised>
    <v-card-title>Suspect Data: {{suspect}}</v-card-title>
    <v-data-table
      dense
      disable-sort
      disable-pagination
      disable-filtering
      fixed-header
      height='250px'
      hide-default-footer
      item-key='date'
      single-select
      show-select
      :headers='headers'
      :items='items'
      v-model='selected'
    >
    </v-data-table>
  </v-card>
</template>

<script>
import convertToDataTableJSON from '@/utils/datatable';
import getSuspectData from '@/utils/suspect-data';

const HEADERS = [
  { text: 'Date (dd/mm/yyyy h:m:s)', value: 'date' },
  { text: 'Device', value: 'device' },
  { text: 'Device ID', value: 'deviceID' },
  { text: 'Event', value: 'event' },
];

export default {
  name: 'suspectData',
  data: () => ({
    headers: HEADERS,
    selected: [],
  }),
  props: {
    suspect: { type: String, default: 'None' },
  },
  computed: {
    items() {
      return convertToDataTableJSON(getSuspectData(this.suspect));
    },
  },
};
</script>

<style>

</style>

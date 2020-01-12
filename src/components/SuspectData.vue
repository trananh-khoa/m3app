<template>
  <v-card raised>
    <v-card-title>Suspect Data: {{selectedSuspect}}</v-card-title>
    <v-container>
      <v-data-table
        dense
        disable-sort
        disable-pagination
        disable-filtering
        fixed-header
        height='543px'
        item-key='date'
        hide-default-footer
        single-select
        show-select
        :headers='headers'
        :items='items'
        v-model='selected'
      >
      </v-data-table>
    </v-container>
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
    selectedSuspect: { type: String, default: 'None' },
  },
  computed: {
    items() {
      return convertToDataTableJSON(getSuspectData(this.selectedSuspect));
    },
  },
};
</script>

<style>

</style>

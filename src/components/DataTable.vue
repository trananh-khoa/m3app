<template>
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-header>Raw Data</v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-card class='datatable-card' flat>
          <v-card-title>
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
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>

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
  margin: 24px 12px 0 12px;
}
</style>

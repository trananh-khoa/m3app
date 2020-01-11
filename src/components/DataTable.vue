<template>
  <v-data-table
    dense
    :headers='headers'
    :items='items'
  >
  </v-data-table>
</template>

<script>
import convertToDataTableJSON from '@/utils/datatable';
import data from '@/constants/data';

const HEADERS = [
  { text: 'Date (dd/mm/yyyy h:m)', value: 'date' },
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
  }),
};
</script>

<style>

</style>

<template>
  <v-card raised>
    <v-card-title>Suspect Data: {{selectedSuspect}}</v-card-title>
    <v-data-table
      dense
      disable-sort
      disable-pagination
      disable-filtering
      fixed-header
      height="500px"
      item-key="date"
      hide-default-footer
      single-select
      show-select
      :headers="headers"
      :items="items"
      v-model="selected"
      @change="onCheckboxChange"
    >
      <!---->
    </v-data-table>
  </v-card>
</template>

<script>
// import Data from "@/constants/data";
import convertToDataTableJSON from "@/utils/datatable";
import getSuspectData from "@/utils/suspect-data";

const HEADERS = [
  { text: "Date (dd/mm/yyyy h:m:s)", value: "date" },
  { text: "Device", value: "device" },
  { text: "Device ID", value: "deviceID" },
  { text: "Event", value: "event" }
];

//   const keys = Object.keys(Data);

//   $("#input-id").on("mouseclick", function() {
//     const location = "";
//     for (let a in keys) {
//       if (keys[a] == getSuspectData[key]) {
//         location = keys[a]["device-id"];
//         break;
//       }
//     }

//     $("area #" + location + "").style("outline-style", "solid");
//   });

// const Map = function() {};

export default {
  name: "suspectData",
  data: () => ({
    headers: HEADERS,
    selected: [],
    location: ""
  }),
  props: {
    selectedSuspect: { type: String, default: "None" }
  },
  computed: {
    items() {
      return convertToDataTableJSON(getSuspectData(this.selectedSuspect));
    }
  },
  methods: {
    onCheckboxChange() {
      // Map();
      // const keys = Object.keys(Data);
      // keys.forEach(a => {
      //   if (keys[a] === getSuspectData[key]) {
      //     this.location = keys[a]["device-id"];
      //   }
      // });
      // console.log(this.location);
    }
  }
};
</script>

<style>
</style>

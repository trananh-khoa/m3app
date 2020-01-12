<template>
  <v-card raised>
    <v-card-title>Floor Plan</v-card-title>
    <v-container class='floor-plan-container'>
      <v-container
        class='floor-plan'
        :style="{'background-image': `url(${require('../assets/floor-plan.svg')})`}"
      >
        <Room
          :key='room.key'
          v-for='room in rooms'
          :x='room.x'
          :y='room.y'
          :width='room.width'
          :height='room.height'
          :suspects='room.suspects'
          :isSuspect='room.isSuspect'
        />
      </v-container>
    </v-container>
  </v-card>
</template>

<script>
import Room from '@/components/Room.vue';
import { getSuspectLocations, buildRoomParameters } from '@/utils/suspect-locations';

export default {
  computed: {
    rooms() {
      return (this.suspectData) ? buildRoomParameters(getSuspectLocations(
        this.suspectData, this.suspectData.guestID,
      )) : [];
    },
  },
  data: () => ({
  }),
  name: 'suspectLocations',
  components: {
    Room,
  },
  props: ['suspectData'],
};
</script>

<style scoped>
.floor-plan {
  background-size: 100%;
  height: 725px;
  width: 642px;
  position: relative;
}

.floor-plan-container {
  background: #F3F3F3;
  overflow-x: auto;
}
</style>

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
        />
      </v-container>
    </v-container>
  </v-card>
</template>

<script>
// import getSuspectList from '@/utils/suspect-list';
// const SUSPECT_LIST = getSuspectList();
import Room from '@/components/Room.vue';

const ROOM_DRAW = {
  L1_110: {
    x: 107, y: 98, width: 105, height: 166,
  },
  L1_100: {
    x: 216, y: 98, width: 160, height: 118,
  },
  L1_101: {
    x: 381, y: 98, width: 85, height: 15,
  },
  L1_151: {
    x: 381, y: 118, width: 85, height: 85,
  },
  L1_155: {
    x: 471, y: 98, width: 85, height: 105,
  },
  L1_ELEVATORS: {
    x: 260, y: 220, width: 76, height: 44,
  },
  L1_AP1_2: {
    x: 381, y: 208, width: 174, height: 55,
  },
  L1_150: {
    x: 562, y: 208, width: 39, height: 55,
  },
  L1_130: {
    x: 107, y: 269, width: 105, height: 104,
  },
  L1_105: {
    x: 216, y: 269, width: 160, height: 104,
  },
  L1_152: {
    x: 381, y: 269, width: 56, height: 104,
  },
  L1_154: {
    x: 442, y: 269, width: 56, height: 104,
  },
  L1_156: {
    x: 504, y: 269, width: 53, height: 49,
  },
  L1_156B: {
    x: 504, y: 323, width: 53, height: 49,
  },
};

export default {
  data: () => ({
    rooms: Object.keys(ROOM_DRAW).map(key => ({
      key,
      ...ROOM_DRAW[key],
    })),
  }),
  name: 'suspectLocations',
  components: {
    Room,
  },
  props: ['suspect'],
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

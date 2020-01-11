<template>
  <div>
    <SuspectList/>
    <SuspectDataList/>
  </div>
</template>

<script>
import SuspectList from '@/components/SuspectList.vue';
import SuspectDataList from '@/components/SuspectData.vue';

export default {
  name: 'visualizer',
  components: {
    SuspectList,
    SuspectDataList,
  },
};
</script>

<style>

</style>

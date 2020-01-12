<template>
  <div :style='styleObject'>
    <div class='div-suspect' v-for='suspect in suspects' :key='suspect'>{{suspect}}</div>
  </div>
</template>

<script>
export default {
  name: 'room',
  computed: {
    styleObject() {
      return {
        position: 'absolute',
        left: `${this.x}px`,
        top: `${this.y}px`,
        width: `${this.width}px`,
        height: `${this.height}px`,
        borderRadius: '4px',
        background: this.isSuspect ? 'rgba(0, 0, 255, 0.25)' : 'rgba(255, 0, 0, 0.25)',
      };
    },
  },
  props: ['x', 'y', 'width', 'height', 'suspects', 'isSuspect'],
};
</script>

<style>
.div-suspect {
  color: black;
}
</style>

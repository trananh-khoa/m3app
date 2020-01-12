<template>
  <div class='d-flex' :style='styleObject'>
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
        background: 'rgba(255, 0, 0, 0.25)',
      };
    },
  },
  props: ['x', 'y', 'width', 'height'],
};
</script>

<style>

</style>

<template>
    <div v-if="showText" class="responsive-text">
        <p>This is a responsive paragraph that appears on smaller screens.</p>
    </div>
</template>
  
<script lang="ts">
  export default {
    name: 'ResponsiveText',
    data() {
      return {
        showText: false
      };
    },
    mounted() {
      this.handleResize();
      window.addEventListener('resize', this.handleResize);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.handleResize);
    },
    methods: {
      handleResize() {
        this.showText = window.innerWidth <= 776;
      }
    }
  }
  </script>
  
<style scoped>
.responsive-text {
    color: white;
    text-align: center;
    padding: 20px;
    background-color: #4A3859;
}
</style>
  
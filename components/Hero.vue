<template>
  <div class="hero">
    <div class="container">
      <div class="column">
        <h1>Column 1</h1>
        <p>This is the first column of text...</p>
      </div>
      <div class="column column-2">
        <h1>Column 3</h1>
        <p>This is the second column of text...</p>
      </div>
    </div>
  </div>
  <responsive-text v-if="isMobile"></responsive-text>
</template>

<script lang="ts">
import ResponsiveText from "./ResponsiveHeroText.vue"

export default {
  components: {
    ResponsiveText
  },
  data() {
    return {
      screenWidth: window.innerWidth
    };
  },
  computed: {
    isMobile() {
      return this.screenWidth <= 776;
    }
  },
  mounted() {
    window.addEventListener('resize', this.updateScreenWidth);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateScreenWidth);
  },
  methods: {
    updateScreenWidth() {
      this.screenWidth = window.innerWidth;
    }
  }
}
</script>

<style scoped>
  .hero {
    height: 100vh;
    background-image: linear-gradient(180deg, #943f33, #b86242, #ffaf52);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }

  .column {
    flex: 1;
    min-width: 300px;
    margin: 10px;
  }
  .column-2 {
    display: block;
  }

  @media (max-width: 776px) {
    .column-2 {
      display: none;
    }
    .column {
      flex: 0 0 100%;
    }
  }
</style>
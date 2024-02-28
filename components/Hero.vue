<template>
  <div class="hero-wrapper">
    <div class="container">
      <div class="column column-1">
        <img :src="sign_empty" class="svgStyle" alt="Bitcamp sign" />
      </div>
      <div class="column column-2">
        <responsive-text v-if="!isMobile"></responsive-text>
        <!-- <Slideshow v-if="!isMobile" class="slide" /> -->
      </div>
    </div>

    <div class="hero">
      <img
        class="foilage-large"
        src="~/assets/images/background/heroFoilage.svg"
      />
    </div>
  </div>
  <responsive-text
    v-if="isMobile"
    :style="{ backgroundColor: '#4A3859' }"
    :slideshow="true"
  ></responsive-text>
</template>

<script setup lang="ts">
import ResponsiveText from './ResponsiveHeroText.vue';

import sign_empty from '../assets/images/bitcamp-sign/sign_full.min.svg';

import { ref } from 'vue';

const counter = ref(0);
function incrementCounter() {
  counter.value++;
}
setInterval(incrementCounter, 250);
</script>

<script lang="ts">
export default {
  components: {
    ResponsiveText,
  },
  data() {
    return {
      screenWidth: 1000,
    };
  },
  computed: {
    isMobile() {
      return this.screenWidth <= 776;
    },
  },
  mounted() {
    this.screenWidth = window.innerWidth;
    window.addEventListener('resize', this.updateScreenWidth);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateScreenWidth);
  },
  methods: {
    updateScreenWidth() {
      this.screenWidth = window.innerWidth;
    },
  },
};
</script>

<style scoped lang="scss">
.hero-wrapper {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 15rem;

  @media (max-width: 1000px) {
    padding-bottom: 7em;
  }
  @media (max-width: 776px) {
    padding-bottom: 0em;
    margin-bottom: 0px;
  }
}
.hero {
  position: absolute;
  background-image: linear-gradient(180deg, #943f33, #b86242, #ffaf52);
  top: 0;
  left: 0;
  width: 100%;
  height: 95%;

  @media (max-width: 1000px) {
    height: 80%;
  }

  @media (max-width: 776px) {
    height: 100%;
  }
}
.space {
  height: 300px;
}
.container {
  display: flex;
  flex-wrap: wrap;
  max-width: min(100%, 1300px);
  margin: 0 auto;
  padding-top: 7%;
}

.column {
  flex: 1;
  min-width: 300px;
  margin: 10px;
  display: flex;
  z-index: 1;
}

.slide {
  margin: auto;
  // position: relative;
  margin-top: 2rem;
}
.column-1 {
  // padding-top: 4rem;
}

.column-2 {
  display: block;
  padding-top: 3rem;
}

.svgStyle {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  // display: block;
  // position: absolute;
}

.foilage-large {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  object-fit: cover;
  transform: translate(0, 23%);
  z-index: 0;
}

@media (max-width: 776px) {
  .column-2 {
    display: none;
  }

  .column {
    flex: 0 0 100%;
    margin: 0;
  }
}
</style>

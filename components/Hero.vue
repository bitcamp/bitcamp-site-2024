<template>
  <div class="hero-wrapper">
    <div class="container">
      <div class="column column-1">
        <img v-for="(image, index) in preloadedImages" :src="image.src" class="svgStyle"
         :style="{ display: index === currentFrame ? 'inline-block' : 'none' }"
         alt="Bitcamp sign" />
      </div>
      <div class="column column-2">
        <responsive-text v-if="!isMobile"></responsive-text>
        <!-- <Slideshow v-if="!isMobile" class="slide" /> -->
      </div>
    </div>
    
    <div class="hero">
      <img class="foilage-large" src="~/assets/images/background/heroFoilage.svg" />
    </div>
  </div>
  <responsive-text v-if="isMobile" :style="{ backgroundColor: '#4A3859'}" :slideshow=true></responsive-text>
</template>

<script setup lang="ts">
import ResponsiveText from "./ResponsiveHeroText.vue"

import sign_empty from '../assets/images/bitcamp-sign/sign_empty.webp';
import sign_full from '../assets/images/bitcamp-sign/sign_full.webp';
import sign_1 from '../assets/images/bitcamp-sign/sign_1.webp';
import sign_2 from '../assets/images/bitcamp-sign/sign_2.webp';
import sign_3 from '../assets/images/bitcamp-sign/sign_3.webp';
import sign_4 from '../assets/images/bitcamp-sign/sign_4.webp';
import sign_5 from '../assets/images/bitcamp-sign/sign_5.webp';
import sign_6 from '../assets/images/bitcamp-sign/sign_6.webp';
import sign_7 from '../assets/images/bitcamp-sign/sign_7.webp';
import sign_8 from '../assets/images/bitcamp-sign/sign_8.webp';
import sign_9 from '../assets/images/bitcamp-sign/sign_9.webp';
import sign_10 from '../assets/images/bitcamp-sign/sign_10.webp';
import sign_11 from '../assets/images/bitcamp-sign/sign_11.webp';
import sign_12 from '../assets/images/bitcamp-sign/sign_12.webp';
import sign_13 from '../assets/images/bitcamp-sign/sign_13.webp';
import sign_14 from '../assets/images/bitcamp-sign/sign_14.webp';
import sign_15 from '../assets/images/bitcamp-sign/sign_15.webp';
import sign_16 from '../assets/images/bitcamp-sign/sign_16.webp';
import sign_17 from '../assets/images/bitcamp-sign/sign_17.webp';

import { ref } from 'vue';

const counter = ref(0);
function incrementCounter() {
  counter.value++;
}
setInterval(incrementCounter, 250);

let imagesList = [
  sign_2,
  sign_3,
  sign_4,
  sign_5,
  sign_6,
  sign_7,
  sign_8,
  sign_9,
  sign_10,
  sign_11,
  sign_12,
  sign_13,
  sign_14,
  sign_15,
  sign_16,
  sign_17,
  sign_1,
  sign_full,
  sign_full,
  sign_empty,
  sign_empty,
  sign_full,
  sign_full,
];

// const signSrc = computed(() => imagesList[counter.value % imagesList.length]);
const currentFrame = computed(() => counter.value % imagesList.length);

let preloadedImages: HTMLElement[] = [];

const preloadImages = () => {
  // Map over imagesList and preload each image
  preloadedImages = imagesList.map(imageURL => {
    const img = new Image();
    img.src = imageURL;
    return img;
  });
}
onMounted(preloadImages);
  
</script>

<script lang="ts">
export default {
  components: {
    ResponsiveText
  },
  data() {
    return {
      screenWidth: 1000
    };
  },
  computed: {
    isMobile() {
      return this.screenWidth <= 776;
    }
  },
  mounted() {
    this.screenWidth = window.innerWidth;
    window.addEventListener('resize', this.updateScreenWidth);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateScreenWidth);
  },
  methods: {
    updateScreenWidth() {
      this.screenWidth = window.innerWidth;
    },
  }
}
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
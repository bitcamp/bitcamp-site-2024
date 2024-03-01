<template>
  <div class="slideshow-wrapper">
    <img class="slideshow-frame" src="~/assets/images/background/slideshow-background.svg" alt="Slideshow Frame" />
    <img class="slideshow-front" src="~/assets/images/background/slideshow-front.svg" alt="Slideshow Front" />
    <!-- <SlideshowCard class="slideshow-card" year="2023" theme="Find Your Frontier" /> -->
    <Carousel class="slideshow-card" wrapAround autoplay="3000" transition="1000" pauseAutoplayOnHover>
      <Slide key="1">
        <SlideshowCard path="slideshow/slide-1.svg" />
      </Slide>
      <Slide key="2">
        <SlideshowCard path="slideshow/slide-2.svg" />
      </Slide>
      <Slide key="3">
        <SlideshowCard path="slideshow/slide-3.svg" />
      </Slide>
      <Slide v-for="i in 17" :key="i+3">
        <SlideshowCard :path="`slideshow/slide-${i+3}.JPG`" />
      </Slide> 

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
  
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
}
</script>

<style scoped>
.slideshow-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}

.slideshow-frame {
  width: 75%;
  /* height: 100%; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%);
  z-index: 0;
}
.slideshow-front {
  width: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  z-index: 20;
}

.slideshow-card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -68%);
  width: 70%;
}
</style>
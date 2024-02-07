<template>
  <div class="slideshow-wrapper">
    <img class="slideshow-frame" src="~/assets/images/background/slideshow-background.svg" alt="Slideshow Frame" />
    <img class="slideshow-front" src="~/assets/images/background/slideshow-front.svg" alt="Slideshow Front" />
    <SlideshowCard class="slideshow-card" year="2023" theme="Find Your Frontier" />
  </div>
</template>

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
}
</style>
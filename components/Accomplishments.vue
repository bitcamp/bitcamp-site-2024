<template>
  <img
    class="slideshowframe"
    src="~/assets/images/tracks/slideshowframe.svg"
    alt="Slideshow Frame Photo"
  />
</template>

<script lang="ts">
export default {
  name: 'AccomplishmentsSection',
};
</script>

<style scoped lang="scss">
.slideshowframe {
  position: absolute;
  z-index: 99999;
  bottom: 10;
  right: 60%;
  transform: translateX(120%) translateY(-50%);
  flex-shrink: 0;
  width: calc(40% - 10px);
  min-width: 430px;

  @media (min-width: 576px) and (max-width: 767.8px) {
    width: 50%;
    transform: translateX(calc(65% - 5px)) translateY(-40%);
  }

  @media (min-width: 768px) and (max-width: 1199.98px) {
    width: calc(45% - 2px);
    top: 10;
    transform: translateX(72%) translateY(-40%);
  }

  @media (max-width: 576px) {
    width: calc(80% - 10px);
    top: 10;
    transform: translateX(61.5%) translateY(-40%);
  }
}
</style>

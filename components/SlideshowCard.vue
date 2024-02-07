<template>
  <div class="slide" :style="{
      backgroundImage: `url('_nuxt/assets/images/${path}')`,
      
    }">
    <a href="#">
    </a>
  </div>
</template>

<script lang="ts">
export default {
  name: 'EventCard',
  props: {
    path: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: false,
    },
    theme: {
      type: String,
      required: false,
    },
    text: {
      type: String,
      required: false,
    }
  },
};
</script>

<style scoped>
.slide {
  width: 100%;
  aspect-ratio: 10 / 7;
  text-align: left;
  background-size: cover !important;
}

.event-text {
  position: absolute;
  bottom: 0;
  padding: 0px 0px 40px 40px;
}

.event-text-only {
  margin: 0px 60px 0 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.event-text h3 {
  font-family: Avenir;
  font-weight: 900;
}


</style>

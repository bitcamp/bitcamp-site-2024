<template>
  <div v-if="year" class="event" :style="{
      backgroundImage: `url('_nuxt/assets/images/thumbnails/${year}-thumb.jpg')`,
    }">
    <a :href="`https://${year}.bit.camp`">
      <div class="filler">
        <div class="event-text">
          <h3>{{ year }}</h3>
          <div class="event-theme">{{ theme }}</div>
        </div>
      </div>
    </a>
  </div>
  <div v-else class="event">
    <div class="event-text-only">
      <div class="event-theme">Explore Our<br>Past Events</div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'EventCard',
  props: {
    year: {
      type: Number,
      required: false,
    },
    theme: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: false,
    }
  },
};
</script>

<style scoped>
.event {
  width: 70%;
  aspect-ratio: 10 / 7;

  text-align: left;

  background-size: cover !important;
  /* !important so we don't have to repeat*/
  box-shadow: 0px, 0px, 20px, 0px rgba(0, 0, 0, 0.2);
  /* position: relative; */

  z-index: 10;
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

.event-theme {
  font-family: Aleo;
  font-weight: bold;
  font-size: 1rem;
}

.filler {
  width: 100%;
  height: 100%;

  transition: 0.4s;
}

.filler:hover {
  background: rgba(203, 242, 255, 0.3);
  /* #cbf2ff with 0.3 opacity */
  transition: 0.4s;
}

/* mobile view */
@media (max-width: 768px) {
  .event-text {
    padding: 0px 0px 25px 25px;
  }

  .event-text-spacing {
    padding: 0px;
  }
}

</style>

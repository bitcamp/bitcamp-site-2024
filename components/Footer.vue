<template>
  <footer>
    <img class="footer-image" src="~/assets/images/background/footer.png" />
  </footer>
</template>

<script lang="ts">
export default {
  name: 'FooterComponent',
};
</script>

<script setup lang="ts"></script>

<style scoped>
footer {
  position: relative;
  box-sizing: border-box;
  width: 100vw;
  color: white;
  font-size: 1.125rem;
  line-height: 1.4;
}

.footer-image {
  display: block;
  width: 100vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.footer-text {
  position: absolute;
  text-align: center;
  margin: auto;
  left: 0;
  right: 0;
  bottom: 5vw;
}

a {
  color: white;
}

@media (max-width: 768px) {
  .footer-text {
    font-size: min(3vw, 1.125rem);
  }
  .links-1,
  .links-2 {
    display: block;
  }
  .links-separator {
    display: none;
  }
}
</style>

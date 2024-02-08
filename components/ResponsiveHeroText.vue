<template>
  <div v-if="showText" class="responsive-text">
    <img class="registerSign" src="../assets/images/background/registerSign.svg" alt="Register Now" />
    <div class="header-text" >
      Bitcamp is a place for exploration. <br /><br />
      You will have 36 hours to delve into your curiosities, learn
      something new, and make something awesome. With world-class mentors
      and 1,000+ fellow campers, you're in for an amazing time. Whether
      you're a seasoned hacker or completely new to the world of hacking,
      we'll have something for you.
      <br /><br />
      If you're ready for an adventure, we'll see you by the campfire!
    </div>
    <RegisterButton text="REGISTER" link="https://register.bit.camp/" />
    <div class="slideshow-wrapper">
      <Slideshow class="r-slide" />
    </div>
  </div>
</template>
  
<script lang="ts">
  export default {
    name: 'ResponsiveText',
    props: {
      slideshow: Boolean,
    },
    data() {
      return {
        showText: true
      };
    },
  }
  </script>
  
<style scoped lang="scss">
.responsive-text {
  color: white;
  text-align: left;
  padding: 20px;
  @media (max-width: 776px) {
    margin-bottom: 20rem;
  }
}
.header-text {
  font-size: 1.2rem;
  position: relative;
  margin-bottom: 2rem;
  font-family: 'Aleo';
  font-size: 1rem;
  padding: 0 5%;
}
.registerSign {
  margin-left: auto;
  margin-right: auto;
  width: 16rem;
  display: block;
  padding: 3% 0;
}
.slideshow-wrapper {
  margin: auto;
  /* padding-top: 15rem; */
  width: 95%;
  height: 10px;

  @media (max-width: 776px) {
    width: 95%;
    margin-top: 6rem;
    height: 150px;
  }

}
.r-slide {
  /* position: absolute; */
  transform: translateY(25vw);

  @media (min-width: 2000px) {
    transform: translateY(15vw);
  }

  @media (max-width: 1000px) {
    transform: translateY(20vw);
  }

  @media (max-width: 776px) {
    transform: translateY(15vw);
  }

}
</style>
  
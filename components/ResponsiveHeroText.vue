<template>
  <div v-if="showText" class="responsive-text">
    <!-- <img class="registerSign" src="~/assets/images/background/applications-open.svg" alt="Applications Now Open!" /> -->
    <div class="header-text">
      
      <!-- <p class="special-text">Come celebrate Bitcamp’s 10th anniversary with us on</p>
      <p class="conference-date">April 19-21, 2024</p> -->
      <div class="body-text">
        <div class="video-container">
          <iframe v-if = "timeToSwitch > 0" src="https://www.youtube.com/embed/FjA5MnqMjsc?autoplay=1&mute=1" frameborder="0"></iframe>
          <iframe v-else src="https://www.youtube.com/embed/dsejpmSpyQs?autoplay=1&mute=1"></iframe>
        </div>
        <!-- <span style="line-height: 2.5;">Bitcamp is a place for exploration...</span>
        <br>
        <div>
          You have 36 hours to explore, learn, and create with world-class mentors and over 1,000 participants. Whether you're a 
          seasoned hacker or new to it all, there's something for everyone.
        </div>
        <br>
        <span>If you're ready for an adventure, we'll see you by the campfire!</span> -->
      </div>
    </div>
    <!-- <RegisterButton text="REGISTER" link="https://register.bit.camp/" /> -->

    
    
    <div id="mission" class="slideshow-wrapper">
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

      const now = new Date();
      const closing = new Date("2024-04-21T14:00:00.000Z");

      return {
        showText: true,
        timeToSwitch: closing.getTime() - now.getTime(),
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

    .video-container {
      position: relative;
      overflow: hidden;
      width: 40vw;
      height: 23vw;

      @media (max-width: 776px) {
        width: 90vw;
        height: 48vw
      }

  }

  .video-container iframe {
      width: 100%;
      height: 100%;
      border: none;
  }

}



.header-text {
  font-size: 1.2rem;
  position: relative;
  margin-bottom: 2rem;
  font-family: 'Aleo';
  font-size: 1rem;
  // padding: 0 7%;
  padding: 0 5%;

  @media (max-width: 776px) {
    padding: 0 0;
  }
  font-weight: 400;

  .special-text{
    line-height: 1.8;
    font-size: 1.125rem;
    color: #FEF7D2;
    font-weight: 700;
  }

  .conference-date{
    padding-top: 0.2rem;
    font-size: 1.5rem;
    color: #FEF7D2;
    font-weight: 700;
  }
  
  // .body-text{
  //   padding-right: 98px;
  // }

}
.registerSign {
  margin-left: auto;
  margin-right: auto;
  width: 26rem;
  display: block;
  // margin-right: 7.5rem;
  margin-bottom: 0.5rem;
  padding: 0 0;

  @media (max-width: 1000px) {
    width: 23rem;
  }
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

.body-text {
  margin-top: 0.5rem;
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
  
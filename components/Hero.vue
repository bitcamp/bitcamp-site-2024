<template>
  <div id="hero" class="section">
    <div class="main-header">
      <div class="img-container">
        <img :src="signSrc" class="svgStyle" alt="dn" />
      </div>
      <div class="right-side-information">
        <div class="register-information">
          <img class="register" src="../assets/images/background/registerSign.svg" alt="Register Now" />
          <div class="header-text">
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
        </div>
        <div class="slideshowframe-container">
          <img class="slideshowframe" src="~/assets/images/background/10yearsign.svg" alt="Slideshow Frame Photo" />
        </div>
      </div>
    </div>
    <div class="hero-image-wrapper">
      <img class="background-large" src="../assets/images/background/bgElements.svg" alt="Background image" />
      <img class="mobile_img" src="../assets/images/background/mobilebg.svg" alt="deez" />
      <img class="mobile_img_add" src="../assets/images/background/mobilebgadd.svg" alt="nuts" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'HeroComponent',
};
</script>

<script setup lang="ts">
defineProps<{
  link?: string;
}>();

import sign_empty from '../assets/images/bitcamp-sign/sign_empty.svg';
import sign_full from '../assets/images/bitcamp-sign/sign_full.svg';
import sign_1 from '../assets/images/bitcamp-sign/sign_1.svg';
import sign_2 from '../assets/images/bitcamp-sign/sign_2.svg';
import sign_3 from '../assets/images/bitcamp-sign/sign_3.svg';
import sign_4 from '../assets/images/bitcamp-sign/sign_4.svg';
import sign_5 from '../assets/images/bitcamp-sign/sign_5.svg';
import sign_6 from '../assets/images/bitcamp-sign/sign_6.svg';
import sign_7 from '../assets/images/bitcamp-sign/sign_7.svg';
import sign_8 from '../assets/images/bitcamp-sign/sign_8.svg';
import sign_9 from '../assets/images/bitcamp-sign/sign_9.svg';
import sign_10 from '../assets/images/bitcamp-sign/sign_10.svg';
import sign_11 from '../assets/images/bitcamp-sign/sign_11.svg';
import sign_12 from '../assets/images/bitcamp-sign/sign_12.svg';
import sign_13 from '../assets/images/bitcamp-sign/sign_13.svg';
import sign_14 from '../assets/images/bitcamp-sign/sign_14.svg';
import sign_15 from '../assets/images/bitcamp-sign/sign_15.svg';
import sign_16 from '../assets/images/bitcamp-sign/sign_16.svg';
import sign_17 from '../assets/images/bitcamp-sign/sign_17.svg';

import { ref } from 'vue';

const counter = ref(0);
function incrementCounter() {
  counter.value++;
}
setInterval(incrementCounter, 250);

// let imagesList: string[] = [];
// for (let m = 0; m < 17+8; m++) {
//   // if (m < 17) {
//   //   imagesList.push(require(`~/assets/images/bitcamp-sign/sign_${m+1}.svg`))
//   // } else if ([17, 18, 21, 22].includes(m)) {
//   //   imagesList.push(require(`~/assets/images/bitcamp-sign/sign_full.svg`))
//   // } else {
//   //   imagesList.push(require(`~/assets/images/bitcamp-sign/sign_empty.svg`))
//   // }
//   imagesList.push(sign_full);
// }
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

const signSrc = computed(() => imagesList[counter.value % imagesList.length]);
</script>

<style scoped lang="scss">
#hero {
  display: flex;
  position: relative;
  justify-content: center;
  padding-top: 10%;
  // z-index: 100;
  width: auto;
  height: fit-content;
}

.hero-image-wrapper {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  // overflow: hidden;
  background-image: linear-gradient(180deg, #943f33, #b86242, #ffaf52);
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 100% 100%;

  @media (min-width: 768px) and (max-width: 1040px) {
    height: 90vh;
  }

  // @media (min-width: 576px) and (max-width: 768px) {
  //   height: 75vh;
  // }

  @media (max-width: 768px) {
    height: 80vh;
  }
}

.background-large {
  width: 100%;
  z-index: 0;
  padding-top: 31.5rem;
  background-position: fixed;
  background-repeat: no-repeat;

  @media (min-width: 768px) and (max-width: 1040px) {
    padding-top: 30rem;
  }

  // @media (min-width: 576px) and (max-width: 767.8px) {
  //   padding-top: 27rem;
  // }

  @media (max-width: 768px) {
    display: none;
  }
}

.mobile_img {
  @media (min-width: 768px) {
    display: none;
  }

  @media (max-width: 768px) {
    top: 69%;
    position: relative;
    z-index: 0;
    width: 100%;
    background-attachment: fixed;
    min-width: 20rem;
  }
}

.mobile_img_add {
  @media (min-width: 768px) {
    display: none;
  }

  @media (min-width: 672px) and (max-width: 768px) {
    top: 13%;
    position: relative;
    z-index: 100;
    width: 100%;
    height: 190%;
    background-attachment: fixed;
    min-width: 20rem;
  }

  @media (min-width: 576px) and (max-width: 672px) {
    top: 11%;
    position: relative;
    z-index: 100;
    width: 100%;
    height: 190%;
    background-attachment: fixed;
    min-width: 20rem;
  }

  @media (min-width: 430px) and (max-width: 576px) {
    top: -13%;
    position: relative;
    z-index: 100;
    width: 100%;
    height: 190%;
    background-attachment: fixed;
    min-width: 20rem;
  }

  @media (max-width: 430px) {
    top: -7%;
    position: relative;
    z-index: 100;
    width: 100%;
    height: 190%;
    background-attachment: fixed;
    min-width: 20rem;
  }
}

.register {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
  max-width: 20rem;

  @media (min-width: 768px) and (max-width: 1040px) {
    width: 60%;
  }

  @media (min-width: 576px) and (max-width: 767.8px) {
    width: 60%;
  }

  @media (max-width: 576px) {
    width: 60%;
  }
}

.header-text {
  font-size: 1.2rem;
  margin-top: 2rem;
  position: relative;
  margin-bottom: 2rem;
  font-family: 'Aleo';

  @media (min-width: 768px) and (max-width: 1040px) {
    font-size: 1rem;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    font-size: 0.8rem;
    z-index: 420;
  }

  @media (max-width: 576px) {
    font-size: 0.6rem;
    z-index: 420;
  }
}

.main-header {
  margin-inline: 4rem;
  display: flex;
  flex-direction: row;

  height: 55rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
  }
}

.register-information {
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 420;
}

.img-container {
  width: 40%;
  margin-right: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-bottom: 5rem;

  @media (max-width: 768px) {
    margin-right: 0rem;
    width: 100%;
  }
}

.svgStyle {
  width: 38rem;
  display: flex;
  padding-bottom: 5rem;
  z-index: 1;
  position: relative;

  @media (min-width: 1276px) and (max-width: 1512px) {
    width: 35rem;
  }

  @media (min-width: 1040px) and (max-width: 1276px) {
    width: 31rem;
  }

  @media (min-width: 904px) and (max-width: 1040px) {
    width: 27rem;
  }

  @media (min-width: 768px) and (max-width: 904px) {
    width: 23rem;
  }

  // @media (min-width: 672px) and (max-width: 768px) {
  //   width: 19rem;
  // }

  // @media (min-width: 576px) and (max-width: 672px) {
  //   width: 16rem;
  // }

  @media (max-width: 768px) {
    width: 27rem;
    margin-bottom: 9rem;
  }
}

.right-side-information {
  width: 60%;
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 18rem;

  @media (min-width: 768px) and (max-width: 1040px) {
    padding-top: 8rem;
  }

  @media (min-width: 672px) and (max-width: 768px) {
    margin-left: 0rem;
    width: 100%;
    margin-top: -100%;
  }

  @media (min-width: 576px) and (max-width: 672px) {
    margin-left: 0rem;
    width: 100%;
    margin-top: -120%;
  }

  @media (min-width: 430px) and (max-width: 576px) {
    margin-left: 0rem;
    width: 100%;
    margin-top: -140%;
  }

  @media (max-width: 430px) {
    margin-left: 0rem;
    width: 90%;
    margin-top: -137%;
  }
}

.slideshowframe {
  width: 100%;
  margin-top: 4rem;
}

.slideshowframe-container {
  position: relative;
  z-index: 200;
  margin-bottom: 15rem;
}
</style>
<template>
  <div id="hero" class="section">
    <div class="hero-image-wrapper">
      <img class="background" alt="Background image" />
    </div>

    <div class="header">
      <img
        class="register"
        src="../assets/images/background/registerSign.svg"
        alt="Register Now"
      />
      <div class="header-content">
        <div class="flex">
          <div class="header-text-container">
            <h2>
              Bitcamp is a place for exploration. <br /><br />
              You will have 36 hours to delve into your curiosities, learn
              something new, and make something awesome. With world-class
              mentors and 1,000+ fellow campers, you're in for an amazing time.
              Whether you're a seasoned hacker or completely new to the world of
              hacking, we'll have something for you.
              <br /><br />
              If you're ready for an adventure, we'll see you by the campfire!
            </h2>
          </div>
          <div class="header-button-container">
            <Button
              class="neon-button"
              text="REGISTER"
              link="https://register.bit.camp/"
              size="medium"
              neon="true"
              color="#d8a84a"
            />
            <img
              class="slideshowframe"
              src="~/assets/images/background/10yearsign.svg"
              alt="Slideshow Frame Photo"
            />
          </div>
        </div>
      </div>
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
</script>

<style scoped lang="scss">
#hero {
  display: flex;
  height: calc(130vh + 25vh);
  justify-content: center;
  padding: 10% 0%;
  z-index: 10000;

  @media (max-width: 576px) {
    margin-bottom: 0rem !important;
  }
}

.hero-image-wrapper {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-image: linear-gradient(180deg, #943f33, #b86242, #ffaf52);
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 100% 100%;

  @media (max-width: 576px) {
    top: 0;
    width: 100%;
  }
  .background {
    content: url('../assets/images/background/bgElements.svg');
    width: 100%;
    position: absolute;
    bottom: calc(-15% - 20px);
  }
}

.header {
  width: 660px;
  height: 500px;
  box-sizing: border-box;
  backdrop-filter: blur(0px);
  border-radius: 10px;
  padding: 2.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
  margin-right: 12%;
  color: white;

  .register {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: calc(50% - 5px);
    min-width: 200px;
  }
  .header-content {
    width: 550px;

    h2 {
      padding: 2.4rem 0;
      font-size: 18px;
      font-weight: normal;
      font-weight: 700;
    }

    .header-button-container {
      width: 100%;
      display: flex;
      justify-content: center;

      .neon-button {
        display: block;
        margin-left: auto;
        margin-right: auto;
      }
    }

    .slideshowframe {
      position: absolute;
      bottom: -110%;
      width: calc(100% + 50%);
      max-width: calc(100% + 10%);
    }
  }
}

.flex {
  display: flex;
  flex-direction: column;
}
.header-text-container {
  order: 1;
}
.header-button-container {
  order: 2;
}
.slideshowframe {
  order: 3;
}

@media (min-width: 1025px) and (max-width: 1280px) {
  #hero {
    height: 200vh;
  }

  .hero-image-wrapper {
    width: 100%;
    position: absolute;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  #hero {
    height: 110vh;
  }

  .hero-image-wrapper {
    height: 100vh;
    .background {
      width: fit-content;
      position: absolute;
      bottom: calc(0% - 14%);
    }
  }
  .header {
    .header-content {
      .slideshowframe {
        bottom: -100% !important;
        max-width: fit-content !important;
      }
    }
  }
}

@media only screen and (max-width: 864px) {
  .header {
    width: 65%;
    height: fit-content;
    flex-direction: column;
    padding: 3rem;
    margin-left: 10%;

    .header-content {
      width: 130%;
      margin-top: 2rem;
      text-align: center;
      .slideshowframe {
        bottom: -70% !important;
      }
      .header-button-container {
        width: fit-content;
        margin: 0 auto;

        & :deep(.button) {
          width: 130px !important;
        }
      }
    }
  }
}

@media (max-width: 500px) {
  #hero {
    height: 190vh;
  }
  .header {
    .register {
      margin-top: calc(180% + 30px) !important;
    }
  }
  .header-text-container {
    order: 3;
    h2 {
      margin-right: -17% !important;
      margin-left: -15% !important;
      margin-top: calc(110% + 5vh);
      text-align: left;
      font-weight: 400 !important;
    }
  }
  .header-button-container {
    order: 1;
  }
  .slideshowframe {
    order: 2;
    max-width: 680px !important;
    bottom: calc(20% - 1vw) !important;
  }
  .hero-image-wrapper {
    height: 220vh;
    .background {
      width: 100%;
      position: absolute;
      bottom: calc(44.5% + 30px);
      content: url('../assets/images/background/mobilebg.svg');
    }
  }
}

@media only screen and (max-width: 500px) {
  #hero {
    height: 158vh;
  }
  .header-text-container {
    order: 2;
    h2 {
      margin-right: -30% !important;
      margin-left: -25% !important;
      text-align: left;
      font-size: 12px !important;
      font-weight: 400 !important;
    }
  }
  .header-button-container {
    order: 1;
    .neon-button {
      transform: scale(0.8);
    }
  }
  .header {
    .register {
      transform: translate(0px, 20px);
      margin-top: calc(200% + 50%) !important;
      min-width: 200px !important;
    }
  }

  .header-content {
    margin: 10%;
  }
  .hero-image-wrapper {
    height: 180vh;
    .background {
      transform: scaleY(1.2);
      width: 100%;
      position: absolute;
      bottom: calc(50% + 5px);
      content: url('../assets/images/background/mobilebg.svg');
    }
  }
  .slideshowframe {
    order: 2;
    max-width: 380px !important;
    top: 87vh !important;
  }
  /*
  .header-text-container {
    order: 2;
  }
  .header-button-container {
    order: 1;
  }
  .hero-image-wrapper {
    top: 0;
    width: 100%;
    height: 150vh;
    background-size: 150% 113% !important;
    background-image: url('../assets/images/background/mobilebg.svg'),
      linear-gradient(180deg, #943f33, #b86242, #ffaf52) !important;
  }

  .header {
    width: 100%;
    margin-left: -60px;
    margin-right: auto;

    .background {
      max-width: 80%;
      width: auto;
      height: auto;
      display: block;
      margin: 0 auto;
    }

    .header-content {
      margin: 20% auto 0;
      .background {
        width: 80% !important;
      }
    }

    .header-text-container {
      text-align: left;
      font-size: 12px !important;
      padding-top: 50% !important;
      font-weight: 400 !important;
      display: block !important;
    }
    */
}
</style>

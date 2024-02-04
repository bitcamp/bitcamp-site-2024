<template>
  <div id="hero" class="section">
    <div class="hero-image-wrapper">
      <img src="../assets/images/background/bgElements.svg" />
    </div>

    <div class="header">
      <div class="header-content">
        <img
          src="../assets/images/background/registerSign.svg"
          alt="Register Now"
        />
        <h2>
          Bitcamp is a place for exploration. <br /><br />
          You will have 36 hours to delve into your curiosities, learn something
          new, and make something awesome. With world-class mentors and 1,000+
          fellow campers, you're in for an amazing time. Whether you’re a
          seasoned hacker or completely new to the world of hacking, we’ll have
          something for you.
          <br /><br />
          If you're ready for an adventure, we'll see you by the campfire!
        </h2>
        <div class="header-button-container">
          <Button
            class="neon-button"
            text="REGISTER"
            link="https://register.bit.camp/"
            size="medium"
            neon="true"
            color="#d8a84a"
          />
        </div>
        <h2 class="mobile">
          Bitcamp is a place for exploration. <br /><br />
          You will have 36 hours to delve into your curiosities, learn something
          new, and make something awesome. With world-class mentors and 1,000+
          fellow campers, you're in for an amazing time. Whether you’re a
          seasoned hacker or completely new to the world of hacking, we’ll have
          something for you.
          <br /><br />
          If you're ready for an adventure, we'll see you by the campfire!
        </h2>
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
  justify-content: center;
  padding: 9% 0;

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
    width: 200%;
  }
  img {
    width: 100%;
    position: absolute;
    bottom: calc(-7% - 30px);
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
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
  margin-right: 100px;
  color: white;

  img {
    max-height: 100%;
  }

  .header-content {
    width: 550px;

    img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 40%;
    }

    h2 {
      padding: 2.4rem 0;
      font-size: 18px;
      font-weight: normal;
      font-weight: 700;
    }

    .mobile {
      display: none;
    }

    .header-button-container {
      width: 100%;
      display: flex;
      justify-content: space-between;

      .neon-button {
        display: block;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
}

@media (min-width: 481px) and (max-width: 767px) {
  .hero-image-wrapper {
    img {
      width: 100%;
      position: absolute;
      bottom: calc(8% - 30px);
    }
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .hero-image-wrapper {
    img {
      width: 100%;
      position: absolute;
      bottom: calc(13% - 30px);
    }
  }
}

@media (min-width: 1025px) and (max-width: 1280px) {
  .hero-image-wrapper {
    img {
      width: 100%;
      position: absolute;
      bottom: calc(7% - 30px);
    }
  }
}

@media only screen and (max-width: 864px) {
  .header {
    width: 65%;
    height: fit-content;
    flex-direction: column;
    padding: 3rem;

    img {
      max-width: 150px;
      width: 100%;
      margin: 0 auto;
    }

    .header-content {
      width: 100%;
      margin-top: 2rem;
      text-align: center;

      .header-button-container {
        width: fit-content;
        flex-direction: column;
        margin: 0 auto;
        gap: 0.75rem;

        & :deep(.button) {
          width: 130px !important;
        }
      }
    }
  }
}

@media only screen and (max-width: 480px) {
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
    margin-left: auto;
    margin-right: auto;

    img {
      max-width: 80%;
      width: auto;
      height: auto;
      display: block;
      margin: 0 auto;
    }

    .header-content {
      margin: 140% auto 0;
      .neon-button {
        transform: scale(0.7);
      }
      img {
        width: 80% !important;
        transform: scale(0.7);
      }
    }
    h2 {
      display: none;
    }

    .mobile {
      text-align: left;
      font-size: 12px !important;
      padding-top: 50% !important;
      font-weight: 400 !important;
      display: block !important;
    }
  }
}
</style>

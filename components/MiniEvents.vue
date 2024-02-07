<template>
  <div id="mini-events" class="section">
    <div class="mini-events-header">
      <img
        src="~/assets/images/mini-events/mini-events-banner.svg"
        alt="Mini Events Banner with Bus"
      />
      <img
        class="img-overlay"
        src="~/assets/images/mini-events/mini-events.svg"
        alt="Mini Events Text"
      />
    </div>

    <div class="mini-events-container">
      <article class="card">
        <img
          src="~/assets/images/mini-events/color-war.svg"
          alt="Colorwar Photo"
        />
        <div class="text">
          <h1>Colorwar</h1>
          <p>
            <span class="colorwar-word"><b>Colorwar</b></span> is a rapid-fire
            live-design competition and one of the highlights of Bitcamp.
            Compete in our online design challenge for a chance to draw in front
            of a live audience at Bitcamp for some cool prizes!
          </p>
        </div>
        <span class="button-wrap">
          <Button
            text="Learn More"
            link="https://bitcmp.medium.com/calling-all-creatives-for-colorwar-443f19759cc2"
            size="xl"
            color="#5EB9BA"
          />
        </span>
      </article>
      <article class="card">
        <img
          src="~/assets/images/mini-events/design-den.svg"
          alt="Design Den Photo"
        />
        <div class="text">
          <h1>Design Den</h1>
          <p>
            Need help designing your hack during Bitcamp? Stop by Design Den,
            and Bitcamp’s design team will help you work on your hack’s user
            interface and user experience. It’s like office hours, but for
            design 😎
          </p>
        </div>
        <span class="button-wrap">
          <Button
            text="Watch on YouTube"
            link="https://www.youtube.com/watch?v=jjP1iaQka9Y&ab_channel=Bitcamp"
            size="xl"
            color="#5EB9BA"
          />
        </span>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
#mini-events {
  text-align: center;
  box-sizing: border-box;
  background-color: #f6ebcc;
  backdrop-filter: blur(35px);
  color: black;
  margin: auto auto;
}

#mini-events-title {
  margin-bottom: 1rem;
  color: black;
}

.mini-events-header {
  position: relative;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 100%;
  height: auto;
  overflow: show;
}

.mini-events-header img {
  width: 100%;
  height: auto;
}

.img-overlay {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(50%);
  /*width: 30%;
  max-width: 30%;*/
  height: auto;

  @media (max-width: 767.8px) {
    width: 0%;
    max-width: 360px;
    bottom: 20px;
  }

  @media (min-width: 768px) and (max-width: 1199.98px) {
    // width: 30%;
    max-width: 400px;
    bottom: 20px;
  }

  @media (min-width: 1200px) {
    width: 30%;
    max-width: 30%;
    bottom: 35px;
  }
}

.colorwar-word {
  color: #ff7040;
}

.mini-events-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;

  margin: 0 auto;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: calc(33.33% - 30px);
  margin: 15px;
  margin-bottom: 50px;
  padding-top: 70px;

  img {
    max-width: 100%;
    margin-bottom: 15px;
  }

  .text {
    margin: 5px;
    flex: 1;
  }

  .button-wrap {
    margin-top: 2rem;
  }

  .text h1 {
    margin-bottom: 15px;
    color: black;
  }

  Button {
    margin-top: 100px;
  }

  @media (min-width: 576px) and (max-width: 767.8px) {
    width: calc(50% - 30px);

    .text {
      margin: 0px;
    }
  }

  @media (min-width: 768px) and (max-width: 1199.98px) {
    width: calc(50% - 30px);

    .text {
      margin: 5px;
    }
  }

  @media (min-width: 1200px) {
    padding-top: 100px;

    .text {
      width: 405px;
    }
  }

  @media (max-width: 576px) {
    width: 100%;
    margin: 20px;

    .text {
      margin: 0px;
    }
  }
}
</style>

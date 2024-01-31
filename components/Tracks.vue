<template>
  <div id="tracks" class="section">
    <div class="tracks-container">
      <article class="card">
        <img
          class="tracks-sign"
          src="~/assets/images/tracks/tracks.svg"
          alt="Tracks Sign Photo"
        />
      </article>
      <article class="card">
        <img
          class="tracks-image"
          src="~/assets/images/tracks/general.svg"
          alt="General Track Photo"
        />
        <div class="text">
          <h1>General Track</h1>
          <p>
            For any and all hackers! Build the perfect hack using hardware,
            software, and collaboration with other tech-lovers, design thinkers,
            and students - all skill and experience levels are welcome!
          </p>
        </div>
      </article>
      <article class="card">
        <img
          class="tracks-image"
          src="~/assets/images/tracks/quantum.svg"
          alt="Quantum Track Photo"
        />
        <div class="text">
          <h1>Quantum Track</h1>
          <p>
            Hackers will delve into the field of quantum computing with
            exclusive mentors, sponsors, and workshops! Hackers will use their
            knowledge of Python and other computing skills on educational and
            interactive Quantum Track activities. If you've been a previous
            participant of the Quantum track, there will be new, challenging
            prompts for you to tackle!
          </p>
        </div>
      </article>
      <article class="card">
        <img
          class="tracks-image"
          src="~/assets/images/tracks/ml.svg"
          alt="Machine Learning Track Photo"
        />
        <div class="text">
          <h1>Machine Learning Track</h1>
          <p>
            If you're wowed by recent AI advancements like ChatGPT, then this is
            the track for you! We will expand upon specialized learning
            experiences by hosting a series of workshops with content related to
            building and hosting ML models, unsupervised learning, and
            discussions of recent AI advancements.
          </p>
        </div>
      </article>
      <article class="card">
        <img
          class="tracks-image"
          src="~/assets/images/tracks/quantum.svg"
          alt="Quantum Track Photo"
        />
        <div class="text">
          <h1>App Dev Track</h1>
          <p>
            Ever wondered how to turn your innovative app idea into a reality?
            Ready to turn your concepts into cutting-edge applications? One of
            our new tracks - we'll introduce you to different aspects of
            development including the software development life cycle,
            development tools such as Flutter, and full-stack development
            through access to exclusive workshops and mentors as you work on
            your hack!
          </p>
        </div>
      </article>
      <article class="card">
        <img
          class="tracks-image"
          src="~/assets/images/tracks/ml.svg"
          alt="Machine Learning Track Photo"
        />
        <div class="text">
          <h1>Cybersecurity Track</h1>
          <p>
            One of our newest tracks! Explore the realm of cybersecurity and
            understand various aspects of the field through interactive
            workshops that include discussions of web vulnerabilities,
            real-world applications of combating security weaknesses, and
            ethical decision-making.
          </p>
        </div>
      </article>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'TracksComponent',
};
</script>

<style scoped lang="scss">
#tracks {
  padding-top: 20%;
  padding-bottom: 5%;
  background-color: #f6ebcc;
  position: relative;
  z-index: 10;
}

.tracks-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  width: 70%;
  margin: 0 auto;

  @media (min-width: 576px) and (max-width: 767.8px) {
    padding-top: 90px;
    width: 90%;
  }

  @media (min-width: 768px) and (max-width: 1199.98px) {
    padding-top: 100px;
  }

  @media (max-width: 576px) {
    width: 90%;
  }
}
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: calc(33.33% - 30px);
  margin: 15px;
  margin-bottom: 15px;

  .tracks-sign {
    width: calc(140% - 5px);
    margin-top: -150px;
    margin-right: 40px;
  }
  .tracks-image {
    width: 117px;
    height: 118px;
    max-width: 100%;
    margin-bottom: 20px;
  }

  .text {
    color: #000;
    margin: 5px;
    font-size: 16px;
    flex: 1;
  }

  .text h1 {
    color: #000;
    margin-bottom: 15px;
    font-size: 24px;
  }

  @media (min-width: 576px) and (max-width: 767.8px) {
    width: calc(50% - 30px);

    .text {
      margin: 0px;
    }

    .tracks-sign {
      width: calc(120% - 5px);
      margin-right: 0px;
    }
  }

  @media (min-width: 768px) and (max-width: 1199.98px) {
    width: calc(50% - 30px);
    .text {
      margin: 5px;
    }

    .tracks-sign {
      width: calc(130% - 5px);
      min-width: 350px;
    }
  }

  @media (max-width: 576px) {
    width: 100%;
    margin: 20px;

    .text {
      margin: 0px;
    }

    .tracks-sign {
      width: 300px;
      transform: translateX(0) translateY(-20%);
    }
  }
}
</style>

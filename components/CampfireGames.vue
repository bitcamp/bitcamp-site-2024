<template>
  <div id="campfire-games" class="section">
    <div id="sign-info">
      <img
        class="campfire-games"
        src="../assets/images/campfire-games/cfg-sign.svg"
        alt="Campfire Games"
      />

      <p id="cfg-blurb">
        The Campfire Games is a way to learn, grow, and build with the Bitcamp
        Community. At the start of this year's event, you will join one of three
        teams based on your personality and interests &mdash; joining forces
        with hackers from around the world! By winning unique challenges,
        attending workshops, and participating in mini-events, you'll rack up
        points for your team. At the end of Bitcamp, members of the winning team
        will receive limited edition Bitcamp Apparel.
        <br /><br />Find your community, develop your team identity, and
        collaborate on something bigger than yourself: <br />#AllAboutTheJourney
      </p>
    </div>

    <div id="teams-div">
      <div class="team-section">
        <img
          class="team-picture red-marshie"
          src="../assets/images/marshies/motorcyclist.svg"
          alt="Red marshie"
        />
        <h3 class="team-title red">Red Team</h3>
        <p class="team-blurb">
          The red team is <strong class="red">passionate</strong> and
          <strong class="red">fiery</strong>! Their emotion is their strength in
          handling whatever comes their way.
        </p>
      </div>
      <div class="team-section">
        <img
          class="team-picture"
          src="../assets/images/marshies/car-driver.svg"
          alt="Blue marshie"
        />
        <h3 class="team-title blue">Blue Team</h3>
        <p class="team-blurb">
          The blue team is <strong class="blue">rational</strong> and
          <strong class="blue">clear-headed</strong>. Their curiosity and
          intelligence are some of their greatest assets in understanding and
          exploring the world around them.
        </p>
      </div>
      <div class="team-section">
        <img
          class="team-picture"
          src="../assets/images/marshies/van-driver.svg"
          alt="Green marshie"
        />
        <h3 class="team-title green">Green Team</h3>
        <p class="team-blurb">
          The green team is
          <strong class="green">adaptable</strong>&mdash;always
          <strong class="green">growing</strong> and thriving in new and
          challenging circumstances.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
#campfire-games {
  width: 85%;
  /* height: 300px; */
  box-sizing: border-box;
  align-items: center;
  text-align: center;
  margin: auto;
  color: white;
  position: relative;
  margin-bottom: 10px;
  padding-top: 100px;
}

#cfg-blurb {
  padding-bottom: 20px;
  text-align: left;
  padding-top: 4.5rem;
  max-width: 700px;
  padding-right: 2vw;
  padding-left: 70px;
  color: black
}

#teams-div {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  justify-content: center;
  padding-top: 10vh;
}

#sign-info {
  display: flex;
}

.section-title {
  margin-bottom: 1rem;
}

.team-section {
  width: 30%;
  text-align: center;
}

.team-title {
  padding-bottom: 25px;
}

img {
  height: 400px;
  margin: auto;
  border-color: red;
  padding-right: 1rem;
  padding-left: 1rem;
  max-width: 500px;
  width: 90%;
}

.team-title {
  padding-top: 15px;
  font-size: 1.5rem;
}

.team-picture {
  max-width: 400px;
}
.team-picture.red-marshie {
  width: 65%;
}

.team-blurb {
  color: black;
}

@media screen and (min-width: 992px) and (max-width: 1200px) {
  .team-picture {
    width: 25vw;
  }
  .team-picture.red-marshie {
    width: 19vw;
  }
}

@media (min-width: 1900px) {
  #cfg-blurb {
    padding-right: 10vw;
  }

  .campfire-games {
    margin-left: 20vw;
    margin-right: 5vw;
  }
}

@media only screen and (max-width: 1000px) {
  .team-section {
    width: 100%;
    padding-bottom: 5rem;
  }

  #sign-info {
    display: flex;
    flex-wrap: wrap;
  }

  #cfg-blurb {
    max-width: 100vw;
  }

  .team-picture {
    width: 60vw;
  }

  .team-picture.red-marshie {
    width: 35vw;
  }
}

@media only screen and (max-width: 768px) {
  .team-picture.red-marshie {
    width: 50vw;
  }
}

@media only screen and (max-width: 576px) {
  .team-picture {
    width: 70vw;
  }
  .team-picture.red-marshie {
    width: 60vw;
  }
}

.blue {
  color: #70b0d1;
}

.red {
  color: #ff3e46;
}

.green {
  color: #58c77b;
}
</style>

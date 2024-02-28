<template>
  <div id="campfire-games" class="section">
    <div id="sign-info">
      <img
        class="campfire-games"
        src="../assets/images/campfire-games/campfire_all.min.svg"
        alt="Bitcamp sign"
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
          src="../assets/images/marshies/red-marshie.svg"
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
          src="../assets/images/marshies/blue-marshie.svg"
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
          src="../assets/images/marshies/green-marshie.svg"
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
  // padding-top: 100px;
}

#cfg-blurb {
  padding-bottom: 20px;
  text-align: left;
  padding-top: 4.5rem;
  max-width: 50%;
  padding-right: 2%;
  padding-left: 2%;
  color: black;
}

.campfire-games {
  // height: 300px;
  margin: auto;
  padding-right: 1rem;
  padding-left: 1rem;
  max-width: 500px;
  width: 100%;
}

#teams-div {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  justify-content: center;
  // padding-top: 10vh;
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
  margin-top: 70px;
}

.team-title {
  padding-bottom: 25px;
}

// img {
//   height: 300px;
//   margin: auto;
//   border-color: red;
//   padding-right: 1rem;
//   padding-left: 1rem;
//   max-width: 500px;
//   width: 90%;
// }

.team-title {
  // padding-top: 15px;
  font-size: 1.5rem;
}

.team-picture {
  max-width: 400px;
  height: 250px;
  border-color: red;
  padding-right: 1rem;
  padding-left: 1rem;
  max-width: 500px;
  width: 90%;
}

.team-picture.red-marshie {
  width: 65%;
}

.team-blurb {
  color: black;
}

@media (min-width: 1900px) {
  #cfg-blurb {
    padding-right: 10%;
  }

  .campfire-games {
    margin-left: 20%;
    margin-right: 5%;
  }
}

@media screen and (min-width: 992px) and (max-width: 1200px) {
  #campfire-games {
    // width: 25%;
  }

  #cfg-blurb {
    max-width: 52%;
    padding-left: 5%;
    padding-right: 0%;
  }

  // .team-picture {
  //   width: 25%;
  // }
  // .team-picture.red-marshie {
  //   width: 19%;
  // }
}

@media only screen and (max-width: 1000px) {
  #campfire-games {
    margin-top: 150px;
  }

  .team-section {
    width: 100%;
    margin-top: 0px;
    // padding-bottom: 5rem;
  }

  #sign-info {
    display: flex;
    flex-wrap: wrap;
  }

  #cfg-blurb {
    max-width: 100%;
    padding-bottom: 5rem;
    padding-top: 2.5rem;
    // max-width: 50%;
    padding-right: 0px;
    padding-left: 0px;
  }

  .team-picture {
    width: 50%;
  }

  .team-picture.red-marshie {
    width: 37%;
  }
}

@media only screen and (max-width: 768px) {
  #cfg-blurb {
    padding-bottom: 3rem;
  }

  .team-picture {
    width: 80%;
  }

  .team-picture.red-marshie {
    width: 55%;
  }
}

@media only screen and (max-width: 576px) {
  .team-section {
    margin-top: -20px;
  }

  .team-title.blue {
    margin-top: -30px;
  }

  .team-title.green {
    margin-top: -30px;
  }

  .campfire-games {
    width: 100%;
  }

  .team-picture {
    width: 70%;
  }

  .team-picture.red-marshie {
    width: 60%;
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

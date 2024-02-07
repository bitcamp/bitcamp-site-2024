<template>
  <div v-if="showText" class="responsive-text">
    <img class="registerSign" src="../assets/images/background/registerSign.svg" alt="Register Now" />
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
</template>
  
<script lang="ts">
  export default {
    name: 'ResponsiveText',
    data() {
      return {
        showText: true
      };
    },
  }
  </script>
  
<style scoped>
.responsive-text {
  color: white;
  text-align: left;
  padding: 20px;
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
  width: 35%;
  display: block;
  padding: 3% 0;
}

</style>
  
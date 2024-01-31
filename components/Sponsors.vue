<template>
  <div id="sponsors" class="section">
    <img class="sponsor-image" src="~/assets/images/background/sponsors.svg" />
    <div class="sponsor-container">
      <template v-for="sponsor in sponsors" :key="sponsor.name">
        <SponsorCard :name="sponsor.name" :url="sponsor.url" />
      </template>
    </div>
    <div class="footer-text">
      <div class="links">
        <span class="links-1">
          <a href="http://mlh.io/code-of-conduct" target="_blank"
            >MLH Code of Conduct</a
          >
          | <a href="/sponsor" target="_blank">Sponsor Us</a></span
        >
        <span class="links-separator"> | </span>
        <span class="links-2">
          <a href="/brand.pdf" target="_blank">Brand Guidelines</a> |
          <a href="mailto:hello@bit.camp">Contact Us</a>
        </span>
      </div>
      <div class="copyright">
        Copyright &copy; 2019 - 2023 Bitcamp. All Rights Reserved.
      </div>
    </div>
    <transition name="fade">
      <div id="pagetop" class="fixed right-0 bottom-0" @click="toTop">
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none"
             stroke="#2f3136"
             stroke-width="1" stroke-linecap="square" stroke-linejoin="round">
          <path d="M18 15l-6-6-6 6"/>
        </svg>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
export default {
  name: 'SponsorsSection',
};
</script>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface Sponsor {
  name: string;
  amount: number;
  url: string;
}

const sponsors: Sponsor[] = [
  {
    name: '1517',
    amount: 1000,
    url: 'https://www.1517fund.com/',
  },
  {
    name: 'ACES',
    amount: 1000,
    url: 'https://aces.umd.edu/',
  },
  {
    name: 'Bloomberg',
    amount: 7000,
    url: 'https://www.bloomberg.com/',
  },
  {
    name: 'Bloomberg Industry Group',
    amount: 4000,
    url: 'https://www.bloombergindustry.com/careers/',
  },
  {
    name: 'BSOS',
    amount: 1000,
    url: 'https://bsos.umd.edu/',
  },
  {
    name: 'Capital One',
    amount: 4000,
    url: 'https://www.capitalone.com/',
  },
  {
    name: 'Cipher Tech',
    amount: 7000,
    url: 'https://www.ciphertechsolutions.com/',
  },
  {
    name: 'Clark School of Engineering',
    amount: 15000,
    url: 'https://eng.umd.edu/',
  },
  {
    name: 'Cockroach Labs',
    amount: 8000,
    url: 'https://www.cockroachlabs.com/',
  },
  {
    name: 'Dingman Center',
    amount: 1000,
    url: 'https://www.rhsmith.umd.edu/centers-initiatives/dingman-center',
  },
  {
    name: 'Fannie Mae',
    amount: 7000,
    url: 'https://www.fanniemae.com/',
  },
  {
    name: 'Geico',
    amount: 4000,
    url: 'https://www.geico.com',
  },
  {
    name: 'IonQ',
    amount: 6000,
    url: 'https://ionq.com/',
  },
  {
    name: 'iSchool',
    amount: 1000,
    url: 'https://ischool.umd.edu/',
  },
  {
    name: 'JHU APL',
    amount: 4000,
    url: 'https://www.jhuapl.edu/',
  },
  {
    name: 'LTS',
    amount: 4000,
    url: 'https://www.ltsnet.net/',
  },
  {
    name: 'M&T Bank',
    amount: 4000,
    url: 'https://www3.mtb.com/careers/technology-careers',
  },
  {
    name: 'SEE',
    amount: 8045.55,
    url: 'https://www.see.umd.edu/',
  },
  {
    name: 'Smith School of Business',
    amount: 2500,
    url: 'https://www.rhsmith.umd.edu/',
  },
  {
    name: 'Textron',
    amount: 1000,
    url: 'https://www.textron.com/',
  },
  {
    name: 'UMD CS Department',
    amount: 39900,
    url: 'https://www.cs.umd.edu/',
  },
  {
    name: 'UMD CMNS',
    amount: 39900,
    url: 'https://cmns.umd.edu/',
  },
  {
    name: 'UMIACS',
    amount: 39900,
    url: 'https://www.umiacs.umd.edu/',
  },
  {
    name: 'UMD Physics Department',
    amount: 1000,
    url: 'https://umdphysics.umd.edu/',
  },
  {
    name: 'Visionist',
    amount: 1000,
    url: 'https://www.visionistinc.com/',
  },
  {
    name: 'StandOut Stickers',
    amount: 100,
    url: 'https://hackp.ac/mlh-standoutstickers-hackathons',
  },
].sort((a: Sponsor, b: Sponsor) => b.amount - a.amount);

const scTimer = ref(0);
const scY = ref(0);

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

const handleScroll = () => {
  if (scTimer.value) return;
  scTimer.value = setTimeout(() => {
    scY.value = window.scrollY;
    clearTimeout(scTimer.value);
    scTimer.value = 0;
  }, 100) as any;
};

const toTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

</script>

<style scoped lang="scss">
#sponsors {
  position: relative;
  z-index: 10;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
}

.sponsor-image {
  margin-bottom: 65px;
  position: relative;
  left: 27%;
}

#pagetop{
  margin-top: 2rem;
  margin-bottom: -2.5rem;
  width: 190%;
}
  
.footer-text {
  margin-top: 50px;
  color: black;
}

.footer-text a {
  color: black;
  text-decoration: underline black;
}

.section-title {
  width: 100%;
  margin-bottom: 1rem;
  text-align: center;
}

.sponsor-container {
  background-color: var(--color-foreground);
  border-radius: var(--border-radius);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  row-gap: 2rem;
  column-gap: 2rem;
  max-width: 60rem;
  border-radius: 20px;
  padding: 4rem;
}

@media only screen and (min-width: 992px) {
  .sponsor-container {
    & > * {
      /* Dealing with 2 items in last row */
      &:last-child:nth-child(3n - 1) {
        grid-column-end: 6;
      }

      &:nth-last-child(2):nth-child(3n - 2) {
        grid-column-end: 4;
      }

      /* Dealing with 1 item in last row */
      &:last-child:nth-child(3n - 2) {
        grid-column-end: 5;
      }
    }
  }

  .sponsor-image{
    width: 43vw;
    max-width: 100%;
    margin-bottom: 10px;
  }
}

@media only screen and (min-width: 850px) and (max-width: 992px) {
  .sponsor-image{
    width: 50vw;
    left: 20%;
    max-width: 100%;
    margin-bottom: -30px;
  }
}

@media only screen and (min-width: 576px) and (max-width: 850px) {
  .sponsor-image{
    width: 48vw;
    left: 15%;
    max-width: 100%;
    margin-bottom: -30px;
  }
}

@media only screen and (min-width: 576px) and (max-width: 992px) {
  .sponsor-container {
    grid-template-columns: repeat(4, 1fr);

    /* Dealing with 1 item in last row */
    & > *:last-child:nth-child(2n - 1) {
      grid-column-end: 4;
    }
  }
}

@media only screen and (max-width: 576px) {
  .sponsor-container {
    grid-template-columns: repeat(2, 1fr);
    padding: 2rem;
  }

  .sponsor-image{
    width: 70vw;
    max-width: 100%;
    left: 8%;
    margin-bottom: 20px;
  }
}

.call-to-action {
  display: block;
  text-align: center;
  font-size: 1.125rem;
  padding-top: 2rem;

  & a {
    color: var(--color-bitcamp);
    text-decoration: none;
  }
}
</style>

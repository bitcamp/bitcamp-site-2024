<template>
  <div id="sponsors" class="section">
    <img class="sponsor-image" src="~/assets/images/background/sponsors.svg" />
    <div class="sponsor-container">
      <template v-for="sponsor in sponsors" :key="sponsor.name">
        <SponsorCard :name="sponsor.name" :url="sponsor.url" />
      </template>
    </div>
    <div class="footer-text">
      <div class="social-icons">
        <a href="https://www.facebook.com/bitcmp">
          <img
            class="icon"
            src="~/assets/images/social/facebook.svg"
            alt="Facebook"
          />
        </a>
        <a href="https://instagram.com/bitcamp">
          <img
            class="icon"
            src="~/assets/images/social/instagram.svg"
            alt="Instagram"
          />
        </a>
        <a href="https://www.youtube.com/channel/UC_F_7Hv3SAUcQBubYWD-2BA">
          <img
            class="icon"
            src="~/assets/images/social/youtube.svg"
            alt="Youtube"
          />
        </a>
        <a href="https://twitter.com/bitcmp">
          <img
            class="icon"
            src="~/assets/images/social/twitter.svg"
            alt="Twitter"
          />
        </a>
        <a href="https://snapchat.com/add/bitcamp">
          <img
            class="icon"
            src="~/assets/images/social/snapchat.svg"
            alt="Snapchat"
          />
        </a>
      </div>
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
        Copyright &copy; 2019 - 2024 Bitcamp. All Rights Reserved.
      </div>
    </div>
    <div id="pagetop" class="fixed right-0 bottom-0" @click="toTop">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke-width="2"
        stroke-linecap="square"
        stroke-linejoin="round"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'SponsorsSection',
};
</script>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

interface Sponsor {
  name: string;
  amount: number;
  url: string;
}

const sponsors: Sponsor[] = [
  {
    name: '355 Code',
    amount: 3000,
    url: 'https://www.355code.com/',
  },
  {
    name: 'Pepsi',
    amount: 1500,
    url: 'https://www.pepsi.com/',
  },
  {
    name: 'UMIACS',
    amount: 40000,
    url: 'https://www.umiacs.umd.edu/',
  },
  {
    name: 'CMNS',
    amount: 40000,
    url: 'https://cmns.umd.edu/',
  },
  {
    name: 'UMDCS',
    amount: 40000,
    url: 'https://www.cs.umd.edu/',
  },
  {
    name: 'LTS',
    amount: 3500,
    url: 'https://www.ltsnet.net/',
  },
  {
    name: 'BSOS',
    amount: 1500,
    url: 'https://bsos.umd.edu/',
  },
  {
    name: 'ACES',
    amount: 1500,
    url: 'https://aces.umd.edu/',
  },
  {
    name: 'Bloomberg Industry Group',
    amount: 4000,
    url: 'https://www.bloombergindustry.com/careers/',
  },
  {
    name: 'SGA',
    amount: 27000,
    url: 'https://www.umdsga.com/',
  },
  {
    name: 'CapitalOne',
    amount: 3500,
    url: 'https://www.capitalone.com/',
  },
  {
    name: 'CoStar',
    amount: 1500,
    url: 'https://www.costargroup.com/',
  },
  {
    name: 'FannieMae',
    amount: 6000,
    url: 'https://www.fanniemae.com/careers/campus',
  },
  {
    name: 'CipherTech',
    amount: 7250,
    url: 'https://www.ciphertechsolutions.com/',
  },
  {
    name: 'Bloomberg',
    amount: 7500,
    url: 'https://www.bloomberg.com/company/careers/working-here/engineering/?utm_medium=eng-re[…]s54ey-6LwgYfKyk7AHerXJpeHrxi3g_ZaX8cslneSZ3lOeEaAh0NEALw_wcB?',
  },
  {
    name: 'AJC',
    amount: 10000,
    url: 'https://eng.umd.edu/',
  },
].sort((a: Sponsor, b: Sponsor) => b.amount - a.amount);

const scTimer = ref(0);

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const handleScroll = () => {
  if (scTimer.value) return;
  scTimer.value = setTimeout(() => {
    const pagetopButton = document.getElementById('pagetop');
    if (pagetopButton) {
      pagetopButton.style.display = window.scrollY > 100 ? 'block' : 'none';
    }
    clearTimeout(scTimer.value);
    scTimer.value = 0;
  }, 100) as any;
};

const toTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
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

#pagetop {
  position: fixed !important;
  bottom: 2rem !important;
  right: 2rem !important;
  z-index: 99;
  pointer-events: auto;
  border-radius: 10px;
  background-color: #ff6f3f;
  opacity: 0.5;
  transition: opacity 0.3s ease;
  width: 60px;
  height: 60px;
}

#pagetop:hover {
  opacity: 1;
  cursor: pointer;
}
#pagetop > svg {
  stroke: white;
  width: 100%;
  height: 100%;
}

.footer-text {
  margin-top: 50px;
  margin-bottom: -30px;
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
  margin-bottom: 10rem;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  row-gap: 2rem;
  column-gap: 2rem;
  max-width: 60rem;
  border-radius: 20px;
  // padding: 4rem;
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

  .sponsor-image {
    width: 35vw;
    max-width: 100%;
    margin-bottom: 10px;
  }
}

@media only screen and (min-width: 850px) and (max-width: 992px) {
  .sponsor-image {
    width: 50vw;
    left: 20%;
    max-width: 100%;
    margin-bottom: 10px;
  }
}

@media only screen and (min-width: 576px) and (max-width: 850px) {
  .sponsor-image {
    width: 48vw;
    left: 15%;
    max-width: 100%;
    margin-bottom: 10px;
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

  #pagetop {
    transform: scale(0.8);
  }
}

@media only screen and (max-width: 576px) {
  .sponsor-container {
    grid-template-columns: repeat(2, 1fr);
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .sponsor-image {
    width: 70vw;
    max-width: 100%;
    left: 8%;
    margin-bottom: 20px;
  }

  #pagetop {
    transform: scale(0.65);
    bottom: 1.5rem !important;
    right: 1.5rem !important;
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

.social-icons a {
  margin-left: 0.875rem;
  margin-right: 0.875rem;
}

.social-icons img {
  width: 2.75rem;
  padding: 0.25rem;
  -webkit-transition: -webkit-transform var(--transition-timing);
  transition: -webkit-transform var(--transition-timing);
  -o-transition: transform var(--transition-timing);
  transition: transform var(--transition-timing);
  transition: transform var(--transition-timing),
    -webkit-transform var(--transition-timing);
}

@media only screen and (max-width: 575px) {
  .social-icons a {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }

  .social-icons img {
    width: 2.25rem;
    padding: 0.125rem;
  }
}

.social-icons {
  margin: 2rem auto;
  text-align: center;
  /* Inline-block whitespace removal hack (https://davidwalsh.name/remove-whitespace-inline-block) */
  font-size: 0;
}

.social-icons a:hover {
  text-decoration: none;
}

.social-icons a:hover img {
  transition-duration: 500ms;
  -webkit-transform: scale(1.25);
  -ms-transform: scale(1.25);
  transform: scale(1.25);
}
</style>

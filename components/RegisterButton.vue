<template>
  <div class="button-container">
    <a class="button-link" :href="link" target="_blank">
      <div class="neon">
        <div class="button-text">
          {{ text }}
        </div>
      </div>
    </a>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ButtonComponent',
};
</script>

<script setup lang="ts">
export interface Props {
  text: string;
  link: string;
  color: string;
  neon: boolean;
}

withDefaults(defineProps<Props>(), {
  text: 'Button',
  color: '#ff6f3f',
  disabled: false,
  neon: false,
  size: 'small',
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c');

.button-container {
  display: flex;
  justify-content: center;
}

.button-link {
  text-decoration: none;
}

.button-text {
  width: 11rem;
  height: 2.5rem;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  padding-bottom: 0.5rem;
  align-content: center;
  flex-wrap: wrap;

  @media (min-width: 768px) and (max-width: 1040px) {
    width: 9rem;
    height: 2.25rem;
    font-size: 1.25rem;
  }

  @media (min-width: 576px) and (max-width: 767.8px) {
    width: 10rem;
    height: 2rem;
    font-size: 1rem;
  }

  @media (max-width: 576px) {
    width: 9rem;
    height: 1.75rem;
    font-size: 0.75rem;
  }
}

.button-text:hover {
  padding-right: 1.5%;
  padding-top: 1.5%;
}

.neon {
  position: relative;
  background: #DD9A17;
  border-radius: 10px;
  border: 10px #DD9A17 solid;
  color: #fff;
  padding: auto;
  text-align: center;
  font-family: 'M PLUS Rounded 1c';
  font-weight: 500;
}

.neon:before {
  content: '';
  position: absolute;
  width: 100%;
  height: 110%;
  bottom: -5px;
  right: -12px;
  border-radius: 8px;
  border: 8px #DD9A17 solid;
}

.neon:after {
  content: '';
  position: absolute;
  width: 102.8%;
  height: 120%;
  bottom: -2px;
  right: -10px;
  border-radius: 6px;
  border: 3.5px #fff9ed solid;
}

.neon:hover {
  padding-left: 0%;
  padding-top: 1.5%;
  margin-bottom: -1.5%;
}

.neon:hover:before {
  right: -9px;
  bottom: -8px;
  border: 8px #DD9A17  solid;
}

.neon:hover:after {
  right: -7px;
  bottom: -5px;
}

.neon:hover {
  color: #fff9ed;
}
</style>

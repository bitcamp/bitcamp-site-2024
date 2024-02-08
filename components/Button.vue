<template>
  <a class="button-link" :href="link" target="_blank">
    <div
      :class="[
        neon
          ? 'neon'
          : [
              disabled ? 'disabled' : '',
              'button',
              size === 'small' ? 'small' : '',
              size === 'medium' ? 'medium' : '',
              size === 'large' ? 'large' : '',
              size === 'xl' ? 'xl' : '',
            ],
      ]"
      :style="{ backgroundColor: color }"
    >
      {{ text }}
    </div>
  </a>
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
  disabled: boolean;
  neon: boolean;
  size: string;
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

.button-link {
  text-decoration: none;
}

.button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 19px;
  gap: 10px;

  border-radius: 4px;

  font-family: 'Avenir';
  font-style: normal;
  font-weight: 500;
  /* identical to box height */
  display: flex;
  align-items: center;

  color: var(--color-white);
  border: 0px;
}

.small {
  width: 80px;
  height: 27px;
  font-size: 14px;
  line-height: 21px;
}

.medium {
  width: 95px;
  height: 35px;
  font-size: 16px;
  line-height: 24px;
}
.large {
  width: 130px;
  height: 37px;
  font-size: 16px;
  line-height: 24px;
}

.xl {
  width: 215px;
  height: 45.54px;
  font-size: 16px;
  line-height: 24px;
  border-radius: 6px;
}

.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.neon {
  width: 200px;
  height: 65.73px;
  position: relative;
  background: #d8a84a;
  border-radius: 10px;
  border: 10px #d8a84a solid;
  color: #fff;
  font-size: 24px;
  padding-left: 4%;
  text-align: center;
  font-family: 'M PLUS Rounded 1c';
  font-weight: 500;
  word-wrap: break-word;
  text-shadow: 0px 3.75px 0.0075px #f7b73a, 3.675px 0.7875px 0.0075px #f7b73a,
    1.575px -3.4125px 0.0075px #f7b73a, -3px -2.25px 0.0075px #f7b73a,
    -2.85px 2.4375px 0.0075px #f7b73a, 1.8px 3.3px 0.0075px #f7b73a,
    3.6px -1.05px 0.0075px #f7b73a, -0.2625px -3.75px 0.0075px #f7b73a,
    -3.7125px -0.5625px 0.0075px #f7b73a, -1.3125px 3.525px 0.0075px #f7b73a,
    3.15px 2.025px 0.0075px #f7b73a, 2.6625px -2.625px 0.0075px #f7b73a,
    -2.025px -3.15px 0.0075px #f7b73a, -3.525px 1.3125px 0.0075px #f7b73a,
    0.525px 3.7125px 0.0075px #f7b73a, 3.75px 0.3px 0.0075px #f7b73a,
    1.0875px -3.6px 0.0075px #f7b73a, -3.2625px -1.8px 0.0075px #f7b73a,
    -2.475px 2.8125px 0.0075px #f7b73a, 2.2125px 3px 0.0075px #f7b73a,
    3.4125px -1.5375px 0.0075px #f7b73a, -0.7875px -3.675px 0.0075px #f7b73a,
    -3.75px -0.0375px 0.0075px #f7b73a, -0.825px 3.675px 0.0075px #f7b73a,
    3.4125px 1.575px 0.0075px #f7b73a, 2.2875px -3px 0.0075px #f7b73a,
    -2.4375px -2.85px 0.0075px #f7b73a, -3.3px 1.7625px 0.0075px #f7b73a,
    1.0125px 3.6px 0.0075px #f7b73a, 3.75px -0.225px 0.0075px #f7b73a,
    0.5625px -3.7125px 0.0075px #f7b73a, -3.4875px -1.35px 0.0075px #f7b73a,
    -2.0625px 3.15px 0.0075px #f7b73a, 2.625px 2.7px 0.0075px #f7b73a,
    3.1875px -1.9875px 0.0075px #f7b73a, -1.275px -3.525px 0.0075px #f7b73a,
    -3.7125px 0.4875px 0.0075px #f7b73a, -0.3px 3.75px 0.0075px #f7b73a,
    3.6px 1.0875px 0.0075px #f7b73a, 1.8375px -3.2625px 0.0075px #f7b73a,
    -2.8125px -2.5125px 0.0075px #f7b73a, -3.0375px 2.2125px 0.0075px #f7b73a,
    1.5px 3.45px 0.0075px #f7b73a, 3.675px -0.75px 0.0075px #f7b73a,
    0.075px -3.75px 0.0075px #f7b73a, -3.6375px -0.8625px 0.0075px #f7b73a,
    -1.6125px 3.375px 0.0075px #f7b73a, 2.9375px 2.2875px 0.0075px #f7b73a;
}

.neon:before {
  content: '';
  position: absolute;
  width: 100%;
  height: 110%;
  bottom: -5px;
  right: -12px;
  border-radius: 8px;
  border: 8px #f7b73a solid;
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
  padding-top: 1%;
}

.neon:hover:before {
  right: -9px;
  bottom: -8px;
  border: 8px #ffcd6c solid;
}

.neon:hover:after {
  right: -7px;
  bottom: -5px;
}

.neon:hover {
  text-shadow: 0px 3.75px 0.0075px #ffcd6c, 3.675px 0.7875px 0.0075px #ffcd6c,
    1.575px -3.4125px 0.0075px #ffcd6c, -3px -2.25px 0.0075px #ffcd6c,
    -2.85px 2.4375px 0.0075px #ffcd6c, 1.8px 3.3px 0.0075px #ffcd6c,
    3.6px -1.05px 0.0075px #ffcd6c, -0.2625px -3.75px 0.0075px #ffcd6c,
    -3.7125px -0.5625px 0.0075px #ffcd6c, -1.3125px 3.525px 0.0075px #ffcd6c,
    3.15px 2.025px 0.0075px #ffcd6c, 2.6625px -2.625px 0.0075px #ffcd6c,
    -2.025px -3.15px 0.0075px #ffcd6c, -3.525px 1.3125px 0.0075px #ffcd6c,
    0.525px 3.7125px 0.0075px #ffcd6c, 3.75px 0.3px 0.0075px #ffcd6c,
    1.0875px -3.6px 0.0075px #ffcd6c, -3.2625px -1.8px 0.0075px #ffcd6c,
    -2.475px 2.8125px 0.0075px #ffcd6c, 2.2125px 3px 0.0075px #ffcd6c,
    3.4125px -1.5375px 0.0075px #ffcd6c, -0.7875px -3.675px 0.0075px #ffcd6c,
    -3.75px -0.0375px 0.0075px #ffcd6c, -0.825px 3.675px 0.0075px #ffcd6c,
    3.4125px 1.575px 0.0075px #ffcd6c, 2.2875px -3px 0.0075px #ffcd6c,
    -2.4375px -2.85px 0.0075px #ffcd6c, -3.3px 1.7625px 0.0075px #ffcd6c,
    1.0125px 3.6px 0.0075px #ffcd6c, 3.75px -0.225px 0.0075px #ffcd6c,
    0.5625px -3.7125px 0.0075px #ffcd6c, -3.4875px -1.35px 0.0075px #ffcd6c,
    -2.0625px 3.15px 0.0075px #ffcd6c, 2.625px 2.7px 0.0075px #ffcd6c,
    3.1875px -1.9875px 0.0075px #ffcd6c, -1.275px -3.525px 0.0075px #ffcd6c,
    -3.7125px 0.4875px 0.0075px #ffcd6c, -0.3px 3.75px 0.0075px #ffcd6c,
    3.6px 1.0875px 0.0075px #ffcd6c, 1.8375px -3.2625px 0.0075px #ffcd6c,
    -2.8125px -2.5125px 0.0075px #ffcd6c, -3.0375px 2.2125px 0.0075px #ffcd6c,
    1.5px 3.45px 0.0075px #ffcd6c, 3.675px -0.75px 0.0075px #ffcd6c,
    0.075px -3.75px 0.0075px #ffcd6c, -3.6375px -0.8625px 0.0075px #ffcd6c,
    -1.6125px 3.375px 0.0075px #ffcd6c, 2.9375px 2.2875px 0.0075px #ffcd6c;

  color: #fff9ed;
}
</style>

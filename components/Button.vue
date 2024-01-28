<template>
  <a class="button-link" :href="link" target="_blank">
    <div
      :class="[
        neon !== 'none'
          ? neon
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
  neon: string;
  size: string;
}

withDefaults(defineProps<Props>(), {
  text: 'Button',
  color: '#ff6f3f',
  disabled: false,
  neon: 'none',
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

.neon-red {
  width: 148.76px;
  height: 62.73px;
  position: relative;
  background: #b42f2f;
  border-radius: 10px;
  border: 10px #b42f2f solid;
  color: #ffb169;
  font-size: 24px;
  text-align: center;
  font-family: 'M PLUS Rounded 1c';
  font-weight: 900;
  word-wrap: break-word;
  text-shadow: 0px 5px 0.01px #e03728, 4.9px 1.05px 0.01px #e03728,
    2.1px -4.55px 0.01px #e03728, -4px -3px 0.01px #e03728,
    -3.8px 3.25px 0.01px #e03728, 2.4px 4.4px 0.01px #e03728,
    4.8px -1.4px 0.01px #e03728, -0.35px -5px 0.01px #e03728,
    -4.95px -0.75px 0.01px #e03728, -1.75px 4.7px 0.01px #e03728,
    4.2px 2.7px 0.01px #e03728, 3.55px -3.5px 0.01px #e03728,
    -2.7px -4.2px 0.01px #e03728, -4.7px 1.75px 0.01px #e03728,
    0.7px 4.95px 0.01px #e03728, 5px 0.4px 0.01px #e03728,
    1.45px -4.8px 0.01px #e03728, -4.35px -2.4px 0.01px #e03728,
    -3.3px 3.75px 0.01px #e03728, 2.95px 4px 0.01px #e03728,
    4.55px -2.05px 0.01px #e03728, -1.05px -4.9px 0.01px #e03728,
    -5px -0.05px 0.01px #e03728, -1.1px 4.9px 0.01px #e03728,
    4.55px 2.1px 0.01px #e03728, 3.05px -4px 0.01px #e03728,
    -3.25px -3.8px 0.01px #e03728, -4.4px 2.35px 0.01px #e03728,
    1.35px 4.8px 0.01px #e03728, 5px -0.3px 0.01px #e03728,
    0.75px -4.95px 0.01px #e03728, -4.65px -1.8px 0.01px #e03728,
    -2.75px 4.2px 0.01px #e03728, 3.5px 3.6px 0.01px #e03728,
    4.25px -2.65px 0.01px #e03728, -1.7px -4.7px 0.01px #e03728,
    -4.95px 0.65px 0.01px #e03728, -0.4px 5px 0.01px #e03728,
    4.8px 1.45px 0.01px #e03728, 2.45px -4.35px 0.01px #e03728,
    -3.75px -3.35px 0.01px #e03728, -4.05px 2.95px 0.01px #e03728,
    2px 4.6px 0.01px #e03728, 4.9px -1px 0.01px #e03728,
    0.1px -5px 0.01px #e03728, -4.85px -1.15px 0.01px #e03728,
    -2.15px 4.5px 0.01px #e03728, 3.95px 3.05px 0.01px #e03728;
}

.neon-red:before {
  content: '';
  position: absolute;
  width: 100%;
  height: 110%;
  bottom: -5px;
  right: -10px;
  border-radius: 8px;
  border: 8px #e03728 solid;
}

.neon-red:after {
  content: '';
  position: absolute;
  width: 105%;
  height: 122%;
  bottom: -2px;
  right: -8px;
  border-radius: 6px;
  border: 3px #ffb169 solid;
}

.neon-red:hover {
  border: 10px #b42f2f solid;
}

.neon-red:hover:before {
  border: 7px #ff6955 solid;
}

.neon-red:hover:after {
  border: 2px #ffe5ce solid;
}

.neon-red:hover {
  text-shadow: 0px 5px 0.01px #ff6955, 4.9px 1.05px 0.01px #ff6955,
    2.1px -4.55px 0.01px #ff6955, -4px -3px 0.01px #ff6955,
    -3.8px 3.25px 0.01px #ff6955, 2.4px 4.4px 0.01px #ff6955,
    4.8px -1.4px 0.01px #ff6955, -0.35px -5px 0.01px #ff6955,
    -4.95px -0.75px 0.01px #ff6955, -1.75px 4.7px 0.01px #ff6955,
    4.2px 2.7px 0.01px #ff6955, 3.55px -3.5px 0.01px #ff6955,
    -2.7px -4.2px 0.01px #ff6955, -4.7px 1.75px 0.01px #ff6955,
    0.7px 4.95px 0.01px #ff6955, 5px 0.4px 0.01px #ff6955,
    1.45px -4.8px 0.01px #ff6955, -4.35px -2.4px 0.01px #ff6955,
    -3.3px 3.75px 0.01px #ff6955, 2.95px 4px 0.01px #ff6955,
    4.55px -2.05px 0.01px #ff6955, -1.05px -4.9px 0.01px #ff6955,
    -5px -0.05px 0.01px #ff6955, -1.1px 4.9px 0.01px #ff6955,
    4.55px 2.1px 0.01px #ff6955, 3.05px -4px 0.01px #ff6955,
    -3.25px -3.8px 0.01px #ff6955, -4.4px 2.35px 0.01px #ff6955,
    1.35px 4.8px 0.01px #ff6955, 5px -0.3px 0.01px #ff6955,
    0.75px -4.95px 0.01px #ff6955, -4.65px -1.8px 0.01px #ff6955,
    -2.75px 4.2px 0.01px #ff6955, 3.5px 3.6px 0.01px #ff6955,
    4.25px -2.65px 0.01px #ff6955, -1.7px -4.7px 0.01px #ff6955,
    -4.95px 0.65px 0.01px #ff6955, -0.4px 5px 0.01px #ff6955,
    4.8px 1.45px 0.01px #ff6955, 2.45px -4.35px 0.01px #ff6955,
    -3.75px -3.35px 0.01px #ff6955, -4.05px 2.95px 0.01px #ff6955,
    2px 4.6px 0.01px #ff6955, 4.9px -1px 0.01px #ff6955,
    0.1px -5px 0.01px #ff6955, -4.85px -1.15px 0.01px #ff6955,
    -2.15px 4.5px 0.01px #ff6955, 3.95px 3.05px 0.01px #ff6955;
  color: #ffe5ce;
}

.neon-blue {
  width: 148.76px;
  height: 62.73px;
  position: relative;
  background: #52a4d2;
  border-radius: 10px;
  border: 10px #52a4d2 solid;
  color: #fff;
  font-size: 24px;
  text-align: center;
  font-family: 'M PLUS Rounded 1c';
  font-weight: 900;
  word-wrap: break-word;
  text-shadow: 0px 5px 0.01px #51befa, 4.9px 1.05px 0.01px #51befa,
    2.1px -4.55px 0.01px #51befa, -4px -3px 0.01px #51befa,
    -3.8px 3.25px 0.01px #51befa, 2.4px 4.4px 0.01px #51befa,
    4.8px -1.4px 0.01px #51befa, -0.35px -5px 0.01px #51befa,
    -4.95px -0.75px 0.01px #51befa, -1.75px 4.7px 0.01px #51befa,
    4.2px 2.7px 0.01px #51befa, 3.55px -3.5px 0.01px #51befa,
    -2.7px -4.2px 0.01px #51befa, -4.7px 1.75px 0.01px #51befa,
    0.7px 4.95px 0.01px #51befa, 5px 0.4px 0.01px #51befa,
    1.45px -4.8px 0.01px #51befa, -4.35px -2.4px 0.01px #51befa,
    -3.3px 3.75px 0.01px #51befa, 2.95px 4px 0.01px #51befa,
    4.55px -2.05px 0.01px #51befa, -1.05px -4.9px 0.01px #51befa,
    -5px -0.05px 0.01px #51befa, -1.1px 4.9px 0.01px #51befa,
    4.55px 2.1px 0.01px #51befa, 3.05px -4px 0.01px #51befa,
    -3.25px -3.8px 0.01px #51befa, -4.4px 2.35px 0.01px #51befa,
    1.35px 4.8px 0.01px #51befa, 5px -0.3px 0.01px #51befa,
    0.75px -4.95px 0.01px #51befa, -4.65px -1.8px 0.01px #51befa,
    -2.75px 4.2px 0.01px #51befa, 3.5px 3.6px 0.01px #51befa,
    4.25px -2.65px 0.01px #51befa, -1.7px -4.7px 0.01px #51befa,
    -4.95px 0.65px 0.01px #51befa, -0.4px 5px 0.01px #51befa,
    4.8px 1.45px 0.01px #51befa, 2.45px -4.35px 0.01px #51befa,
    -3.75px -3.35px 0.01px #51befa, -4.05px 2.95px 0.01px #51befa,
    2px 4.6px 0.01px #51befa, 4.9px -1px 0.01px #51befa,
    0.1px -5px 0.01px #51befa, -4.85px -1.15px 0.01px #51befa,
    -2.15px 4.5px 0.01px #51befa, 3.95px 3.05px 0.01px #51befa;
}

.neon-blue:before {
  content: '';
  position: absolute;
  width: 100%;
  height: 110%;
  bottom: -5px;
  right: -10px;
  border-radius: 8px;
  border: 8px #51befa solid;
}

.neon-blue:after {
  content: '';
  position: absolute;
  width: 105%;
  height: 122%;
  bottom: -2px;
  right: -8px;
  border-radius: 6px;
  border: 3px #dbf2ff solid;
}

.neon-blue:hover {
  border: 10px #52a4d2 solid;
}

.neon-blue:hover:before {
  border: 7px #98d5f7 solid;
}

.neon-blue:hover:after {
  border: 2px #dbf2ff solid;
}

.neon-blue:hover {
  text-shadow: 0px 5px 0.01px #98d5f7, 4.9px 1.05px 0.01px #98d5f7,
    2.1px -4.55px 0.01px #98d5f7, -4px -3px 0.01px #98d5f7,
    -3.8px 3.25px 0.01px #98d5f7, 2.4px 4.4px 0.01px #98d5f7,
    4.8px -1.4px 0.01px #98d5f7, -0.35px -5px 0.01px #98d5f7,
    -4.95px -0.75px 0.01px #98d5f7, -1.75px 4.7px 0.01px #98d5f7,
    4.2px 2.7px 0.01px #98d5f7, 3.55px -3.5px 0.01px #98d5f7,
    -2.7px -4.2px 0.01px #98d5f7, -4.7px 1.75px 0.01px #98d5f7,
    0.7px 4.95px 0.01px #98d5f7, 5px 0.4px 0.01px #98d5f7,
    1.45px -4.8px 0.01px #98d5f7, -4.35px -2.4px 0.01px #98d5f7,
    -3.3px 3.75px 0.01px #98d5f7, 2.95px 4px 0.01px #98d5f7,
    4.55px -2.05px 0.01px #98d5f7, -1.05px -4.9px 0.01px #98d5f7,
    -5px -0.05px 0.01px #98d5f7, -1.1px 4.9px 0.01px #98d5f7,
    4.55px 2.1px 0.01px #98d5f7, 3.05px -4px 0.01px #98d5f7,
    -3.25px -3.8px 0.01px #98d5f7, -4.4px 2.35px 0.01px #98d5f7,
    1.35px 4.8px 0.01px #98d5f7, 5px -0.3px 0.01px #98d5f7,
    0.75px -4.95px 0.01px #98d5f7, -4.65px -1.8px 0.01px #98d5f7,
    -2.75px 4.2px 0.01px #98d5f7, 3.5px 3.6px 0.01px #98d5f7,
    4.25px -2.65px 0.01px #98d5f7, -1.7px -4.7px 0.01px #98d5f7,
    -4.95px 0.65px 0.01px #98d5f7, -0.4px 5px 0.01px #98d5f7,
    4.8px 1.45px 0.01px #98d5f7, 2.45px -4.35px 0.01px #98d5f7,
    -3.75px -3.35px 0.01px #98d5f7, -4.05px 2.95px 0.01px #98d5f7,
    2px 4.6px 0.01px #98d5f7, 4.9px -1px 0.01px #98d5f7,
    0.1px -5px 0.01px #98d5f7, -4.85px -1.15px 0.01px #98d5f7,
    -2.15px 4.5px 0.01px #98d5f7, 3.95px 3.05px 0.01px #98d5f7;
  color: #dbf2ff;
}

.neon-yellow {
  width: 203px;
  height: 62.73px;
  position: relative;
  background: #d8a84a;
  border-radius: 10px;
  border: 10px #d8a84a solid;
  color: #fff;
  font-size: 24px;
  text-align: center;
  font-family: 'M PLUS Rounded 1c';
  font-weight: 900;
  word-wrap: break-word;
  text-shadow: 0px 5px 0.01px #f7b73a, 4.9px 1.05px 0.01px #f7b73a,
    2.1px -4.55px 0.01px #f7b73a, -4px -3px 0.01px #f7b73a,
    -3.8px 3.25px 0.01px #f7b73a, 2.4px 4.4px 0.01px #f7b73a,
    4.8px -1.4px 0.01px #f7b73a, -0.35px -5px 0.01px #f7b73a,
    -4.95px -0.75px 0.01px #f7b73a, -1.75px 4.7px 0.01px #f7b73a,
    4.2px 2.7px 0.01px #f7b73a, 3.55px -3.5px 0.01px #f7b73a,
    -2.7px -4.2px 0.01px #f7b73a, -4.7px 1.75px 0.01px #f7b73a,
    0.7px 4.95px 0.01px #f7b73a, 5px 0.4px 0.01px #f7b73a,
    1.45px -4.8px 0.01px #f7b73a, -4.35px -2.4px 0.01px #f7b73a,
    -3.3px 3.75px 0.01px #f7b73a, 2.95px 4px 0.01px #f7b73a,
    4.55px -2.05px 0.01px #f7b73a, -1.05px -4.9px 0.01px #f7b73a,
    -5px -0.05px 0.01px #f7b73a, -1.1px 4.9px 0.01px #f7b73a,
    4.55px 2.1px 0.01px #f7b73a, 3.05px -4px 0.01px #f7b73a,
    -3.25px -3.8px 0.01px #f7b73a, -4.4px 2.35px 0.01px #f7b73a,
    1.35px 4.8px 0.01px #f7b73a, 5px -0.3px 0.01px #f7b73a,
    0.75px -4.95px 0.01px #f7b73a, -4.65px -1.8px 0.01px #f7b73a,
    -2.75px 4.2px 0.01px #f7b73a, 3.5px 3.6px 0.01px #f7b73a,
    4.25px -2.65px 0.01px #f7b73a, -1.7px -4.7px 0.01px #f7b73a,
    -4.95px 0.65px 0.01px #f7b73a, -0.4px 5px 0.01px #f7b73a,
    4.8px 1.45px 0.01px #f7b73a, 2.45px -4.35px 0.01px #f7b73a,
    -3.75px -3.35px 0.01px #f7b73a, -4.05px 2.95px 0.01px #f7b73a,
    2px 4.6px 0.01px #f7b73a, 4.9px -1px 0.01px #f7b73a,
    0.1px -5px 0.01px #f7b73a, -4.85px -1.15px 0.01px #f7b73a,
    -2.15px 4.5px 0.01px #f7b73a, 3.95px 3.05px 0.01px #f7b73a;
}

.neon-yellow:before {
  content: '';
  position: absolute;
  width: 100%;
  height: 110%;
  bottom: -5px;
  right: -10px;
  border-radius: 8px;
  border: 8px #f7b73a solid;
}

.neon-yellow:after {
  content: '';
  position: absolute;
  width: 105%;
  height: 122%;
  bottom: -2px;
  right: -8px;
  border-radius: 6px;
  border: 3px #fff9ed solid;
}

.neon-yellow:hover {
  border: 10px #d8a84a solid;
}

.neon-yellow:hover:before {
  border: 7px #ffcd6c solid;
}

.neon-yellow:hover:after {
  border: 2px #fff9ed solid;
  right: -10.5px;
}

.neon-yellow:hover {
  text-shadow: 0px 5px 0.01px #ffcd6c, 4.9px 1.05px 0.01px #ffcd6c,
    2.1px -4.55px 0.01px #ffcd6c, -4px -3px 0.01px #ffcd6c,
    -3.8px 3.25px 0.01px #ffcd6c, 2.4px 4.4px 0.01px #ffcd6c,
    4.8px -1.4px 0.01px #ffcd6c, -0.35px -5px 0.01px #ffcd6c,
    -4.95px -0.75px 0.01px #ffcd6c, -1.75px 4.7px 0.01px #ffcd6c,
    4.2px 2.7px 0.01px #ffcd6c, 3.55px -3.5px 0.01px #ffcd6c,
    -2.7px -4.2px 0.01px #ffcd6c, -4.7px 1.75px 0.01px #ffcd6c,
    0.7px 4.95px 0.01px #ffcd6c, 5px 0.4px 0.01px #ffcd6c,
    1.45px -4.8px 0.01px #ffcd6c, -4.35px -2.4px 0.01px #ffcd6c,
    -3.3px 3.75px 0.01px #ffcd6c, 2.95px 4px 0.01px #ffcd6c,
    4.55px -2.05px 0.01px #ffcd6c, -1.05px -4.9px 0.01px #ffcd6c,
    -5px -0.05px 0.01px #ffcd6c, -1.1px 4.9px 0.01px #ffcd6c,
    4.55px 2.1px 0.01px #ffcd6c, 3.05px -4px 0.01px #ffcd6c,
    -3.25px -3.8px 0.01px #ffcd6c, -4.4px 2.35px 0.01px #ffcd6c,
    1.35px 4.8px 0.01px #ffcd6c, 5px -0.3px 0.01px #ffcd6c,
    0.75px -4.95px 0.01px #ffcd6c, -4.65px -1.8px 0.01px #ffcd6c,
    -2.75px 4.2px 0.01px #ffcd6c, 3.5px 3.6px 0.01px #ffcd6c,
    4.25px -2.65px 0.01px #ffcd6c, -1.7px -4.7px 0.01px #ffcd6c,
    -4.95px 0.65px 0.01px #ffcd6c, -0.4px 5px 0.01px #ffcd6c,
    4.8px 1.45px 0.01px #ffcd6c, 2.45px -4.35px 0.01px #ffcd6c,
    -3.75px -3.35px 0.01px #ffcd6c, -4.05px 2.95px 0.01px #ffcd6c,
    2px 4.6px 0.01px #ffcd6c, 4.9px -1px 0.01px #ffcd6c,
    0.1px -5px 0.01px #ffcd6c, -4.85px -1.15px 0.01px #ffcd6c,
    -2.15px 4.5px 0.01px #ffcd6c, 3.95px 3.05px 0.01px #ffcd6c;
  color: #fff9ed;
}
</style>

<template>
  <div class="Rtable-cell Rtable-category-cell" :class="header">
    <a v-if="header !== 'first-row Rtable-category-cell-full'" class="tooltips direction" :description="description"
      :title="categoryName">
      <img src="../assets/images/icons/question-mark-black.svg" alt="Question Mark" />
    </a>
    <div style="display: flex; flex-direction: column;">
      <span>{{ categoryName }}</span>
      <span v-if="subText" style="font-size: 0.75rem;">{{ subText }}</span>
    </div>
  </div>

  <div v-for="(arg, index) in args" :key="index" class="Rtable-cell" :class="'Rtable-cell-' + tierNames[index]">
    <p v-if="arg === 'check-b'">
      <img src="../assets/images/icons/check-black.svg" alt="Checkmark" />
    </p>
    <p v-else-if="arg === 'check-w'">
      <img src="../assets/images/icons/check-white.svg" alt="Checkmark" />
    </p>
    <p v-else>{{ arg }}</p>
  </div>
</template>

<script>
export default {
  name: 'ProspectusRow',
  props: {
    args: {
      type: Array,
      required: true,
    },
    tierNames: {
      type: Array,
      required: true,
    },
    categoryName: {
      type: String,
      required: true,
    },
    subText: {
      type: String,
      required: false,
    },
    header: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.Rtable-cell {}
</style>

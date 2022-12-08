<template>
  <div class="icon-span">
    <i
      @click="$emit('icon-handler')"
      :class="[button.icon, button.iconArea]"
      :style="button.iconStyle"
    ></i>
    <span :class="button.spanArea">{{ $t("_FORM." + button.content) }}</span>
  </div>
</template>

<script>
export default {
  name: "IconSpan",
  props: {
    button: Object,
  },
};
</script>

<style scoped lang="scss">
.icon-span {
  display: grid;
  grid-template-areas: "left right";
  justify-content: space-between;
  align-items: center;
  gap: 0.2rem;
}
.left {
  grid-area: left;
}
.right {
  grid-area: right;
}
</style>

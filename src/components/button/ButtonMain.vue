<template>
  <div
    class="button-main"
    :class="{ 'active-button': isActive }"
    :style="buttonStyle"
    @click="$emit('button-handler')"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ButtonMain",
  props: {
    isActive: Boolean,
    buttonStyle: Object,
  },
};
</script>

<style scoped lang="scss">
.button-main {
  box-sizing: border-box;
  display: grid;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: max-content;
  padding: 0.2rem 0.4rem;
  color: #006fff;
  background-color: transparent;
  border-radius: 6px;
  border: 1px solid transparent;
  transition: all 0.4s ease-in-out;
  &:hover {
    border: 1px solid #006fff;
  }
}
.active-button {
  color: #fff;
  background-color: #006fff;
}
</style>

<template>
  <div>
    <h4>{{ title }}</h4>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "LabelInput",
  props: {
    title: String,
  },
};
</script>

<style scoped lang="scss">
h4 {
  margin: 0 0 0.4rem;
  opacity: 0.6;
}
</style>

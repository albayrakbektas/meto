<template>
  <div class="form-row" :style="rowStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FormRow",
  props: {
    rowStyle: Object,
  },
};
</script>

<style scoped lang="scss">
.form-row {
  padding: 1rem;
}
</style>

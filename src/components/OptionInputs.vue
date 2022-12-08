<template>
  <div class="option-container">
    <i class="fa-solid fa-bars"></i>
    <input
      placeholder="Type a option"
      type="text"
      @input="$emit('input', $event.target.value)"
      :value="optionValue"
    />
    <i
      @click="$emit('delete-handler')"
      class="fa-sharp fa-solid fa-circle-xmark"
    ></i>
  </div>
</template>

<script>
export default {
  name: "OptionInputs",
  props: {
    optionValue: String,
  },
  // data() {
  //   return { optionValue: "" };
  // },
  methods: {
    // onInput(val) {
    //   this.$emit("msgChange", val);
    // },
  },
  watch: {
    // text(val) {
    //   this.optionValue = val;
    // },
  },
};
</script>

<style scoped lang="scss">
.option-container {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin: 0.2rem 0 0.4rem;
}
input {
  padding: 0.2rem 0.6rem;
}
i {
  cursor: pointer;
}
</style>

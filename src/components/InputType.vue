<template>
  <div>
    <LabelInput title="Input Type">
      <select v-model="selected">
        <option disabled value="">Select Box</option>
      </select>
    </LabelInput>
  </div>
</template>

<script>
import LabelInput from "@/components/LabelInput";
export default {
  name: "InputType",
  components: { LabelInput },
  data() {
    return {
      selected: "",
    };
  },
};
</script>

<style scoped lang="scss">
select {
  width: 100%;
  padding: 0.4rem 0.2rem;
  opacity: 0.6;
}
</style>

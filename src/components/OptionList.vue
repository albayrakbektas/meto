<template>
  <draggable
    class="draggable"
    v-model="options"
    group="people"
    @start="drag = true"
    @end="drag = false"
    handle=".handle"
  >
    <OptionInputs
      class="handle"
      v-for="(option, index) of options"
      :key="option + index"
      v-model="option.value"
      @delete-handler="deleteOption(option)"
    />
  </draggable>
</template>

<script>
import OptionInputs from "@/components/OptionInputs";
import draggable from "vuedraggable";

export default {
  name: "OptionList",
  components: { OptionInputs, draggable },
  computed: {
    options: {
      get() {
        return this.$store.getters.getStateData("newQuestion").options;
      },
      set(value) {
        console.log(value);
        this.$store.commit("setNewQuestion", { data: "options", value });
      },
    },
  },
  methods: {
    addOption() {
      this.optionsList.push({ id: this.index, value: "" });
      this.index++;
      this.$store.commit("setNewQuestion", {
        data: "options",
        value: this.optionsList,
      });
    },
    deleteOption(option) {
      const optionId = option.id;
      this.optionsList = this.optionsList.filter((op) => {
        console.log(op.id, optionId, op.id === optionId);
        return op.id !== optionId;
      });
    },
  },
};
</script>

<style scoped lang="scss"></style>

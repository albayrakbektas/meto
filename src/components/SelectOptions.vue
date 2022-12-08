<template>
  <LabelInput title="Options">
    <OptionList />
    <ButtonMain
      :button-style="buttonStyle"
      @button-handler="addOption"
      :is-active="true"
    >
      <IconSpan :button="iconSpan" />
    </ButtonMain>
  </LabelInput>
</template>

<script>
import LabelInput from "@/components/LabelInput";
import ButtonMain from "@/components/button/ButtonMain";
import IconSpan from "@/components/IconSpan";
import OptionList from "@/components/OptionList";

export default {
  name: "SelectOptions",
  components: { OptionList, IconSpan, ButtonMain, LabelInput },
  data() {
    return {
      iconSpan: {
        icon: "fa-solid fa-plus",
        content: "_ADD_OPTION",
      },
      buttonStyle: {
        marginTop: "0.6rem",
        padding: "0.4rem 0.6rem",
      },
      optionsList: [],
      value: "",
      index: 0,
    };
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
  },
};
</script>

<style scoped lang="scss"></style>

<template>
  <div v-show="isFormQuestion" class="form-question-container">
    <div class="form-container">
      <FormRow :row-style="headerRowStyle">
        <IconSpan @icon-handler="closeForm" :button="iconSpan" />
      </FormRow>
      <FormRow>
        <InputType />
        <IsRequired />
        <LanguageOptions />
        <input placeholder="What is your gender" v-model="title" />
        <input placeholder="Description" v-model="description" />
        <SelectOptions />
      </FormRow>
      <FormRow :row-style="buttonsRowStyle">
        <ButtonMain @button-handler="closeForm" :button-style="closeButton">{{
          $t("_FORM._CLOSE_BUTTON")
        }}</ButtonMain>
        <ButtonMain @button-handler="saveForm" :button-style="saveButton">{{
          $t("_FORM._SAVE_BUTTON")
        }}</ButtonMain>
      </FormRow>
    </div>
  </div>
</template>

<script>
import IconSpan from "@/components/IconSpan";
import FormRow from "@/components/FormRow";
import ButtonMain from "@/components/button/ButtonMain";
import InputType from "@/components/InputType";
import IsRequired from "@/components/IsRequired";
import LanguageOptions from "@/components/LanguageOptions";
import SelectOptions from "@/components/SelectOptions";
export default {
  name: "FormQuestion",
  components: {
    SelectOptions,
    LanguageOptions,
    IsRequired,
    InputType,
    ButtonMain,
    FormRow,
    IconSpan,
  },
  props: {
    isFormQuestion: Boolean,
  },
  computed: {
    newQuestion() {
      return this.$store.getters.getStateData("newQuestion");
    },
  },
  methods: {
    closeForm() {
      this.$store.commit("setStateData", {
        data: "isQuestionFormActive",
        value: false,
      });
    },
    saveForm() {
      this.$store.commit("setNewQuestion", {
        data: "title",
        value: this.title,
      });
      this.$store.commit("setNewQuestion", {
        data: "description",
        value: this.description,
      });
      this.$store.commit("updateQuestions", this.newQuestion);
    },
  },
  data() {
    return {
      title: "",
      description: "",
      headerRowStyle: {
        borderBottom: "1px solid grey",
      },
      iconSpan: {
        icon: "fa-solid fa-xmark",
        content: "_ADD_FORM_INPUT",
        iconArea: "right",
        iconStyle: {
          cursor: "pointer",
        },
      },
      buttonsRowStyle: {
        display: "flex",
        justifyContent: "space-between",
        borderTop: "1px solid grey",
      },
      closeButton: {
        backgroundColor: "red",
        color: "#fff",
      },
      saveButton: {
        backgroundColor: "green",
        color: "#fff",
      },
    };
  },
};
</script>

<style scoped lang="scss">
.form-question-container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
.form-container {
  width: 40%;
  margin: auto;
  //translate: 0 100%;
  border-radius: 6px;
  box-shadow: 0 0 5px #fff;
  background-color: #fff;
}
input {
  width: 100%;
}
</style>

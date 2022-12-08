<template>
  <div class="form-main">
    <FormRow>
      <FormTitle />
    </FormRow>
    <FormRow :row-style="rowStyle">
      <LanguageOptions class="languages" />
      <QuestionList />
      <ButtonMain @button-handler="addQuestion" :button-style="buttonStyle">
        <IconSpan :button="iconSpan" />
      </ButtonMain>
    </FormRow>
    <FormRow>
      <ButtonMain :is-active="true" :button-style="saveButtonStyle">
        <span> {{ $t("_FORM._SAVE_BUTTON") }}</span>
      </ButtonMain>
    </FormRow>
    <NewQuestionForm :is-form-question="isFormActive" />
  </div>
</template>

<script>
import ButtonMain from "@/components/button/ButtonMain";
import LanguageOptions from "@/components/LanguageOptions";
import FormTitle from "@/components/FormTitle";
import FormRow from "@/components/FormRow";
import IconSpan from "@/components/IconSpan";
import { v4 as uuidv4 } from "uuid";
import NewQuestionForm from "@/components/form/NewQuestionForm";
import QuestionList from "@/components/QuestionList";

export default {
  name: "FormMain",
  components: {
    QuestionList,
    NewQuestionForm,
    IconSpan,
    ButtonMain,
    LanguageOptions,
    FormTitle,
    FormRow,
  },
  computed: {
    getStateData() {
      return this.$store.getters.getStateData("locale");
    },
    questionList: {
      get() {
        return this.$store.getters.getStateData("questions");
      },
      set(value) {
        this.$store.commit("setStateData", { data: "questions", value });
      },
    },
    isFormActive() {
      return this.$store.getters.getStateData("isQuestionFormActive");
    },
  },
  data() {
    return {
      rowStyle: {
        backgroundColor: "#f5f5f5",
      },
      iconSpan: {
        icon: "fa-solid fa-plus",
        content: "_ADD_QUESTION",
      },
      buttonStyle: {
        border: "1px solid #006fff",
        margin: "auto",
        padding: "0.4rem 0.6rem",
      },
      saveButtonStyle: {
        fontSize: "1.2rem",
        padding: "0.4rem 1.2rem",
      },
    };
  },
  methods: {
    addQuestion() {
      this.$store.commit("setStateData", {
        data: "isQuestionFormActive",
        value: true,
      });
      this.$store.commit("setNewQuestion", {
        data: "id",
        value: uuidv4(),
      });
    },
  },
};
</script>

<style scoped lang="scss">
.form-main {
  position: relative;
  box-shadow: 0 0 5px #808080;
  border-radius: 6px;
  width: 80%;
  margin: 5rem auto;
}
.languages {
  margin-bottom: 1rem;
}
@media (max-width: 500px) {
  .form-main {
    width: 90%;
    margin: 2rem auto;
  }
}
</style>

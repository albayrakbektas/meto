<template>
  <div class="question-form draggable" ref="draggable">
    <i class="fa-solid fa-bars abs-icon icon-left"></i>
    <div class="question-form-header">
      <LanguageOptions />
      <i class="fa-solid fa-pen" />
    </div>
    <div class="question">
      <h3>
        {{ question.title }}
        <span v-show="question.isRequired" class="required">*</span>
      </h3>
      <span>{{ question.description }}</span>
      <select v-model="selected">
        <option disabled value="">Please Select a option</option>
        <option
          v-for="(option, index) of question.options"
          :key="(option.title || option.id) + index"
        >
          {{ option.value }}
        </option>
      </select>
    </div>
    <i
      @click="deleteQuestion(question)"
      class="fa-sharp fa-solid fa-circle-xmark abs-icon icon-right"
    ></i>
  </div>
</template>

<script>
import LanguageOptions from "@/components/LanguageOptions";
export default {
  name: "QuestionCard",
  components: { LanguageOptions },
  props: {
    question: Object,
  },
  data() {
    return {
      selected: "",
    };
  },
  computed: {
    questions: {
      get() {
        return this.$store.getters.getStateData("questions");
      },
      set(value) {
        console.log(value);
        this.$store.commit("setStateData", { data: "questions", value });
      },
    },
  },
  methods: {
    dragStart(e) {
      console.log(e.clientY);
      this.$refs.draggable.addEventListener("dragstart", () => {
        console.log("dragged");
      });
    },
    deleteQuestion(question) {
      const questionList = this.questions;
      const index = questionList.indexOf(question);
      questionList.splice(index, 1);
    },
  },
};
</script>

<style scoped lang="scss">
.question-form {
  position: relative;
  box-shadow: 0 0 5px #808080;
  background-color: #fff;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  width: 60%;
  margin: 0 auto 1rem;
}
.question-form-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.abs-icon {
  position: absolute;
  top: 50%;
  translate: 0 -50%;
  font-size: 1rem;
  cursor: pointer;
  color: #808080;
}
.icon-left {
  left: -5%;
}
.icon-right {
  right: -5%;
}
.fa-pen {
  cursor: pointer;
  padding: 0.4rem;
  border-radius: 3px;
  border: 1px solid #000000;
}
.required {
  color: #ff0000;
}
h3,
span {
  margin: 0;
  opacity: 0.8;
}
.question {
  padding: 1rem 1.2rem;
}
select {
  padding: 0.4rem 0.2rem;
  margin-top: 1rem;
  width: 100%;
  cursor: pointer;
}
@media (max-width: 500px) {
  .question-form {
    width: 94%;
  }
  .icon-left {
    left: -7%;
  }
  .icon-right {
    right: -7%;
  }
}
</style>

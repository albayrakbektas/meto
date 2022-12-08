<template>
  <draggable
    v-model="questionList"
    group="people"
    @start="drag = true"
    @end="drag = false"
    handle=".handle"
  >
    <QuestionCard
      class="handle"
      :question="question"
      v-for="(question, index) of questionList"
      :key="(question.title || question.id) + index"
    />
  </draggable>
</template>

<script>
import draggable from "vuedraggable";
import QuestionCard from "@/components/QuestionCard";

export default {
  name: "QuestionList",
  components: {
    QuestionCard,
    draggable,
  },
  computed: {
    questionList: {
      get() {
        return this.$store.getters.getStateData("questions");
      },
      set(value) {
        this.$store.commit("setStateData", { data: "questions", value });
      },
    },
  },
};
</script>

<style scoped></style>

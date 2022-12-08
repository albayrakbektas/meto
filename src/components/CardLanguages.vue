<template>
  <div class="language-options">
    <div
      class="languages"
      v-for="(language, index) of getStateData.languages"
      :key="language + index"
    >
      <ButtonMain
        :is-active="language === (question.language || locale)"
        @button-handler="changeLanguage(language)"
        :button-style="buttonStyle"
      >
        {{ language.toUpperCase() }}
      </ButtonMain>
    </div>
  </div>
</template>

<script>
import ButtonMain from "@/components/button/ButtonMain";
import i18n from "@/i18n";
export default {
  name: "CardLanguages",
  components: { ButtonMain },
  props: {
    question: Object,
  },
  data() {
    return {
      isActive: null,
      locale: "",
      buttonStyle: {
        padding: "0.2rem 0.6rem",
        pointerEvents: "none",
      },
    };
  },
  mounted() {
    this.locale = i18n.locale;
  },
  computed: {
    getStateData() {
      return {
        languages: this.$store.getters.getStateData("languageOptions"),
        newQuestion: this.$store.getters.getStateData("newQuestion"),
      };
    },
    getLocaleLanguage() {
      return this.$store.getters.getStateData("locale");
    },
    activeLanguage() {
      return (language) => language === i18n.locale;
    },
    newQuestionLanguage() {
      return (language) => {
        if (!this.getStateData.newQuestion.language) {
          return language === i18n.locale;
        } else {
          return language === this.getStateData.newQuestion.language;
        }
      };
    },
  },
  methods: {
    changeLanguage(language) {
      this.$store.commit("setNewQuestion", {
        data: "language",
        value: language,
      });
    },
  },
};
</script>

<style scoped lang="scss">
.language-options {
  display: flex;
}
.languages {
  margin-right: 0.2rem;
}
.disabled-button {
  pointer-events: none;
}
</style>

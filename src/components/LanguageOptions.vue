<template>
  <div class="language-options">
    <div
      class="languages"
      v-for="(language, index) of getStateData"
      :key="language + index"
    >
      <ButtonMain
        :is-active="activeLanguage(language)"
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
  name: "LanguageOptions",
  components: { ButtonMain },
  data() {
    return {
      isActive: null,
      buttonStyle: {
        padding: "0.2rem 0.6rem",
      },
    };
  },
  computed: {
    getStateData() {
      return this.$store.getters.getStateData("languageOptions");
    },
    getLocaleLanguage() {
      return this.$store.getters.getStateData("locale");
    },
    activeLanguage() {
      return (language) => language === i18n.locale;
    },
  },
  methods: {
    changeLanguage(language) {
      i18n.locale = language;
      // const payload = { data: "locale", value: language };
      // this.$store.commit("setStateData", payload);
      // console.log(this.$store.state.locale);
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
</style>

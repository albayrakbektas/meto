import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    locale: "TR",
    isQuestionFormActive: false,
    newQuestion: {
      id: "",
      inputType: "",
      isRequired: null,
      language: "",
      title: "",
      description: "",
      options: [],
    },
    questions: [],
    languageOptions: ["tr", "en"],
  },
  getters: {
    getStateData: (state) => (data) => {
      return state[data];
    },
  },
  mutations: {
    setStateData: (state, payload) => {
      state[payload.data] = payload.value;
    },
    setNewQuestion: (state, payload) => {
      state.newQuestion[payload.data] = payload.value;
    },
    updateQuestions(state, payload) {
      state.questions.push(payload);
    },
  },
  actions: {
    setStateData: ({ commit }, payload) => {
      commit("setStateData", payload);
    },
    setNewQuestion: ({ commit }, payload) => {
      commit("setNewQuestion", payload);
    },
    updateQuestions: ({ commit }, payload) => {
      commit("updateQuestions", payload);
    },
  },
  modules: {},
});

<template>
  <div>
    <LabelInput title="Is required">
      <div class="radio-container">
        <div class="radio-container radio">
          <input
            @click="setIsRequired"
            type="radio"
            id="yes"
            :value="true"
            v-model="picked"
          />
          <label for="yes">Yes</label>
        </div>
        <div class="radio-container radio">
          <input
            @click="setIsRequired"
            type="radio"
            id="no"
            :value="false"
            v-model="picked"
          />
          <label for="no">No</label>
        </div>
      </div>
    </LabelInput>
  </div>
</template>

<script>
import LabelInput from "@/components/LabelInput";
export default {
  name: "IsRequired",
  components: { LabelInput },
  methods: {
    setIsRequired(e) {
      this.$store.commit("setNewQuestion", {
        data: "isRequired",
        value: e.target.value,
      });
      console.log(this.$store.state.newQuestion);
    },
  },
  watch: {},
  data() {
    return {
      picked: "",
    };
  },
};
</script>

<style scoped lang="scss">
.radio-container {
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  justify-content: start;
  gap: 1rem;
}
.radio {
  gap: 0.2rem;
}
input {
  margin: 0;
}
</style>

<script setup>
import { defineProps, defineEmits } from "vue";

const { question } = defineProps(["question"]);

const emit = defineEmits(["selectOption"])
const emitSelectedOption  = (isCorrect) => {
    emit("selectOption", isCorrect)
}

</script>

<template>
  <div class="question-container">
    <h1 class="question">{{ question.text }}</h1>
  </div>
  <div class="option-container">
    <div
      v-for="option in question.options"
      :key="option.id"
      class="option"
      @click="emitSelectedOption(option.isCorrect)"
    >
      <p class="option-label">{{ option.label }}</p>
      <div class="option-value">
        <p>{{ option.text }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.question-container {
  margin-top: 20px;
}
.question {
  font-size: 40px;
  margin-bottom: 20px;
}
.option {
  display: flex;
  margin-bottom: 20px;
  cursor: pointer;
}
.option-label {
  background-color: rgb(47, 48, 105);;
  width: 50px;
  height: 50px;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}
.option-value {
  background-color: rgb(213, 213, 225);;
  width: 100%;
  font-size: 30px;
  padding: 0 20px;
}
</style>
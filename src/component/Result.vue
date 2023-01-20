<script setup>
import { defineProps } from "vue";
import { RouterLink } from "vue-router";

const { numberOfCorrectAnswers, quizQuestionLength } = defineProps([
  "numberOfCorrectAnswers",
  "quizQuestionLength",
]);
</script>

<template>
  <div class="result">
    <p>Your Results...</p>
    <h1>{{numberOfCorrectAnswers}}/{{quizQuestionLength}}</h1>
    <RouterLink to="/" class="link"> Go Back</RouterLink>

  </div>
</template>
<style scoped>
.result {
  text-align: center;
  padding: 100px 0;
}
p {
  font-size: 25px;
}
h1 {
  font-size: 80px;
}
.link{
    text-decoration: none;
    border: 1px solid rgb(56, 56, 100);
    padding: 5px;
    background: rgb(47, 48, 105);
    color: white;
    border-radius: 5px;

}
</style>
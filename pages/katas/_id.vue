<template>
  <v-container v-if="kata">
    <v-row class="titleRow">
      <v-col>
        <h1>It's time to unleash the beast!</h1>
      </v-col>
    </v-row>
    <v-row class="kataRow">
      <v-col>
        <v-card class="kataCard">
          <v-card-title>
            {{ kata.title }}
          </v-card-title>
          <v-card-subtitle> Difficulty: {{ kata.difficulty }} </v-card-subtitle>
          <v-card-text> Description: {{ kata.description }} </v-card-text>
          <v-card-text> Examples: {{ kata.examples }}</v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="kataCard">
          <v-card-title> Solve the kata </v-card-title>
          <v-card-subtitle> Write your answer right below </v-card-subtitle>
          <v-textarea
            v-model="input"
            class="answerArea"
            no-resize
            rows="9"
            outlined
          ></v-textarea>
          <v-btn v-on:click="checkFunction" light>Try answer</v-btn>
        </v-card>
      </v-col>
    </v-row>
    <v-row
      v-bind:class="
        result === 'All tests passed' ? 'correctAnswer' : 'incorrectAnswer'
      "
    >
      <v-col>
        <h2>{{ result }}</h2>
      </v-col>
    </v-row>
  </v-container>
  <div v-else>
    <p>Page not found</p>
    <nuxt-link to="/home">Go back home</nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: `() => {
        //Write your code here!
      }`,
      kata: this.$store.getters.getKataById(this.$route.params.id),
      result: "",
    };
  },
  methods: {
    checkFunction: async function () {
      try {
        const kataTests = this.kata.tests;
        for (let i = 0; i < kataTests.length; i++) {
          const test = eval(this.input);
          if (
            JSON.stringify(test(...kataTests[i].input)) !==
            JSON.stringify(kataTests[i].output)
          ) {
            return (this.result = "Incorrect answer");
          }
        }
        return (this.result = "All tests passed");
      } catch (error) {
        return (this.result = "Error in code");
      }
    },
  },
};
</script>

<style scoped>
.titleRow {
  margin-top: 30px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  text-align: center;
  font-size: 1.5em;
}
.kataRow {
  height: 50vh;
  padding-left: 10vw;
  padding-right: 10vw;
}
.kataCard {
  height: 50vh;
}
.answerArea {
  padding-left: 20px;
  padding-right: 20px;
}
.v-btn {
  position: absolute;
  bottom: 15px;
  left: 20px;
}
.correctAnswer {
  margin-top: 50px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  text-align: center;
  font-size: 1.5em;
  color: green;
}
.incorrectAnswer {
  margin-top: 50px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  text-align: center;
  font-size: 1.5em;
  color: red;
}
</style>

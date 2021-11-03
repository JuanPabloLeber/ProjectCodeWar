<template>
  <v-container v-if="kata">
    <v-row class="titleRow">
      <v-col>
        <h1>It's time to unleash the beast!</h1>
      </v-col>
    </v-row>
    <v-row class="kataRow">
      <v-col>
        <v-card
          :class="$vuetify.breakpoint.mdAndUp ? 'kataCard' : 'kataCardSmall'"
        >
          <v-card-title>
            {{ kata.title }}
          </v-card-title>
          <v-card-subtitle> Difficulty: {{ kata.difficulty }} </v-card-subtitle>
          <v-card-text> Description: {{ kata.description }} </v-card-text>
          <v-card-text> Examples: {{ kata.examples }}</v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="kataCard1">
          <v-card-title> Solve the kata </v-card-title>
          <v-card-subtitle> Write your answer right below </v-card-subtitle>
          <textarea v-model="content" id="editor"></textarea>
          <v-btn v-on:click="checkFunction" light>Submit</v-btn>
        </v-card>
      </v-col>
    </v-row>
    <v-row
      :class="
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
import * as CodeMirror from "codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";
import "codemirror/mode/javascript/javascript.js";

export default {
  data() {
    return {
      content: `() => {\n//Write your code here!\n} `,
      kata: this.$store.getters.getKataById(this.$route.params.id),
      result: "",
    };
  },
  mounted() {
    this.cm = CodeMirror.fromTextArea(document.getElementById("editor"), {
      lineNumbers: true,
      theme: "dracula",
      mode: "javascript",
      lineWrapping: true,
    });
  },
  methods: {
    checkFunction: async function () {
      try {
        const kataTests = JSON.parse(JSON.stringify(this.kata.tests));
        const userInput = this.cm.getValue();

        for (let i = 0; i < kataTests.length; i++) {
          const test = eval(userInput);
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
  margin-bottom: 50px;
  margin-left: 0;
  margin-right: 0;
  display: flex;
  flex-direction: row;
  text-align: center;
  font-size: 1.5em;
}

.kataRow {
  height: 100%;
  display: flex;
  margin: 0;
  padding-left: 5vw;
  padding-right: 5vw;
}
.kataCard {
  height: 500px;
  min-width: 300px;
}
.kataCardSmall {
  height: fit-content;
  min-width: 275px;
}
.kataCard1 {
  height: 500px;
  min-width: 275px;
}

.correctAnswer {
  margin-top: 50px;
  margin-bottom: 20px;
  margin-left: 0;
  margin-right: 0;
  display: flex;
  flex-direction: row;
  text-align: center;
  font-size: 1.5em;
  color: green;
}

.v-btn {
  position: absolute;
  bottom: 15px;
  left: 20px;
}
.incorrectAnswer {
  margin-top: 50px;
  margin-bottom: 20px;
  margin-left: 0;
  margin-right: 0;
  display: flex;
  flex-direction: row;
  text-align: center;
  font-size: 1.5em;
  color: red;
}
</style>

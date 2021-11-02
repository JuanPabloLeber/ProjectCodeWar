<template>
  <v-container>
    <v-row class="title">
      <v-col>
        <h1 class="titleText">KATA TIME</h1>
        <div>
          <v-divider class="divider"></v-divider>
        </div>
      </v-col>
    </v-row>
    <v-row class="title">
      <v-col></v-col>
      <v-col cols="4" class="master">
        <h2>Do you want to become a master?</h2>
        <p>
          Doing these katas will give you unique abilities to improve your
          coding skills. Katas are coding excercies of different difficulties
          where you will be challanged to use your coding knowledge and
          abilities to solve these coding puzzles
        </p>
      </v-col>
      <v-col cols="4">
        <img class="image" src="../assets/ninja.png" />
      </v-col>
      <v-col></v-col>
    </v-row>
    <v-row class="cardTitle">
      <v-col>
        <h1>Try one of the katas below</h1>
      </v-col>
    </v-row>
    <v-row class="cards">
      <v-col class="cardCols" v-for="kataInfo in katasInfo" :key="kataInfo.id">
        <KatasCards :katasInformation="kataInfo" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { katas } from "../assets/test.json";
export default {
  data() {
    return {
      katasInfo: katas,
    };
  },
};
</script>

<style scoped>
.title {
  margin: 0;
  display: flex;
  flex-direction: row;
  text-align: center;
}

.titleText {
  font-size: 4em;
  line-height: 1em;
  margin-top: 10px;
}

.divider {
  margin-top: 12px;
  background-color: rgb(255, 208, 0);
  width: 80vw;
  display: inline-block;
}

.master {
  margin-top: 100px;
  margin-right: -50px;
  margin-bottom: 80px;
}
p {
  margin-top: 10px;
  font-size: 0.9em;
}

.image {
  height: 300px;
}
.cardTitle {
  margin: 0;
  display: flex;
  flex-direction: row;
  text-align: center;
  color: rgb(78, 78, 78);
  background-color: white;
  line-height: 4em;
  font-size: 1.5em;
}

.cards {
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: white;
  padding-top: 30px;
  margin: 0;
  padding-bottom: 50px;
}
.cardCols {
  max-width: 450px;
  display: flex;
  justify-content: center;
}
</style>

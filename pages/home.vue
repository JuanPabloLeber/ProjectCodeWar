<template>
  <v-container>
    <v-row class="title">
      <v-col>
        <h1
          :class="$vuetify.breakpoint.mdAndUp ? 'titleText' : 'smallTitleText'"
        >
          KATA TIME
        </h1>
        <div>
          <v-divider class="divider"></v-divider>
        </div>
      </v-col>
    </v-row>
    <v-row :class="$vuetify.breakpoint.mdAndUp ? 'title2' : 'title2Small'">
      <v-col v-if="$vuetify.breakpoint.mdAndUp"></v-col>
      <v-col
        :cols="$vuetify.breakpoint.mdAndUp ? 5 : 10"
        :class="[$vuetify.breakpoint.mdAndUp ? 'master' : '']"
      >
        <h2 :class="$vuetify.breakpoint.mdAndUp ? 'bigH2' : 'smallH2'">
          Do you want to become a master?
        </h2>
        <p :class="$vuetify.breakpoint.mdAndUp ? 'bigP' : 'smallP'">
          Doing these katas will give you unique abilities to improve your
          coding skills. Katas are coding excercies of different difficulties
          where you will be challanged to use your coding knowledge and
          abilities to solve these coding puzzles
        </p>
      </v-col>
      <v-col cols="5" v-if="$vuetify.breakpoint.mdAndUp">
        <img class="image" src="../assets/ninja.png" />
      </v-col>
      <v-col v-if="$vuetify.breakpoint.mdAndUp"></v-col>
    </v-row>
    <v-row class="cardTitle">
      <v-col>
        <h1 :class="$vuetify.breakpoint.mdAndUp ? 'title3' : 'title3Small'">
          Try one of these katas!
        </h1>
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
  margin-top: 2vh;
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
}

.title2 {
  margin-top: 3vh;
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  height: 50vh;
}
.title2Small {
  margin-top: 10vh;
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  height: 40vh;
}
.bigH2 {
  font-size: 3em;
  font-weight: bolder;
  display: flex;
  text-align: left;
  padding-left: 20px;
}
.smallH2 {
  font-size: xx-large;
  font-weight: bolder;
  display: flex;
  text-align: left;
  padding-left: 20px;
}
.bigP {
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  text-align: left;
  font-size: 1.5em;
}
.smallP {
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  text-align: left;
}
.title3Small {
  margin-top: 20px;
  font-size: xx-large;
}
.titleText {
  font-size: 4em;
  line-height: 1em;
  margin-top: 10px;
}
.smallTitleText {
  font-size: 3em;
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
  margin-top: 70px;
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

<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 :class="$vuetify.breakpoint.mdAndUp ? 'header' : 'smallHeader'">
          Welcome to Dromos
        </h1>
        <div class="buttonDiv">
          <nuxt-link to="home">
            <v-btn
              :class="$vuetify.breakpoint.mdAndUp ? 'button' : 'smallButton'"
              elevation="3"
              dark
              >Let's start</v-btn
            >
          </nuxt-link>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.row {
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.header {
  color: white;
  font-size: 6em;
  margin-top: 10vh;
  animation: downComing 2.5s;
}
.smallHeader {
  margin-top: 2vh;
  color: white;
  font-size: 4em;
  animation: downComing 2.5s;
  padding-left: 10vw;
  padding-right: 10vw;
}

@keyframes downComing {
  0% {
    transform: translateY(-2em);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
  }
}

.button {
  width: 300px;
  height: 60px !important;
  margin-top: 50vh;
  background-color: rgb(0, 0, 0) !important;
  font-size: 1.75em;
  animation: appear 2s, shake 5s linear 3s infinite;
  backface-visibility: hidden;
  border: solid 1px white;
}
.smallButton {
  width: 200px;
  height: 60px !important;
  margin-top: 40vh;
  background-color: rgb(0, 0, 0) !important;
  font-size: 1.5em;
  animation: appear 2s, shake 5s linear 3s infinite;
  backface-visibility: hidden;
  border: solid 1px white;
}

@keyframes appear {
  0%,
  50% {
    opacity: 0;
    transform: translateY(2em);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes shake {
  5%,
  15%,
  25%,
  35%,
  55% {
    filter: blur(0.018em);
    color: rgb(0, 89, 255);
    transform: translateY(0.1em) rotate(0deg);
  }

  10%,
  30%,
  40%,
  50% {
    filter: blur(0.01em);
    color: white;
    transform: translateY(-0.1em) rotate(0deg);
  }

  20%,
  40% {
    filter: blur(0.03em);
    transform: translate(-0.1em, 0.1em) rotate(-0.5deg);
  }

  45%,
  55% {
    filter: blur(0.03em);
    transform: translate(0.1em, -0.1em) rotate(0.5deg);
  }

  100% {
    transform: translate(0);
  }
}
</style>

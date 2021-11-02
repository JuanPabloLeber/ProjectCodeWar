<template>
  <v-card>
    <v-card-title>
      {{ katasInformation.title }}
    </v-card-title>
    <v-card-subtitle>
      Difficulty: {{ katasInformation.difficulty }}
    </v-card-subtitle>
    <v-card-text> Description: {{ katasInformation.description }} </v-card-text>
    <v-card-actions>
      <NuxtLink :to="`/katas/${katasInformation.id}`">
        <v-btn> Try this kata </v-btn>
      </NuxtLink>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["katasInformation"],
};
</script>

<style scoped>
.v-card {
  height: 250px;
  width: 300px;
}
.v-btn {
  position: absolute;
  bottom: 15px;
  left: 15px;
}
</style>

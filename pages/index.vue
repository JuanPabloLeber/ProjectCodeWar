<template>
  <v-container fill-height>
    <Welcome />
    <video class="videoBackground" src="../assets/Background.mp4" autoplay loop></video>
  </v-container>
</template>

<script>
export default {
  layout: "landing"
  }
</script>

<style scoped>

.videoBackground {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -2;
}

</style>

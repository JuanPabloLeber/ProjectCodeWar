<template>
  <v-app>
    <v-main class="app-bg">
      <v-app-bar dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Dromos</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-filter</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>
      <v-navigation-drawer
        v-if="drawer"
        v-model="drawer"
        absolute
        bottom
        temporary
      >
        <v-list nav dense>
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <nuxt-link to="/home">
              <v-list-item v-if="page !== 'HOME'">
                <v-list-item-title>Home</v-list-item-title>
              </v-list-item>
            </nuxt-link>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      group: null,
    };
  },
  computed: {
    page() {
      return this.$route.name.toUpperCase();
    },
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style scoped>
.app-bg {
  background-color: rgb(78, 78, 78) !important;
  max-height: 100%;
}

.v-app-bar {
  background-color: rgb(29, 29, 29) !important;
}

.v-list-item__title {
  font-size: 2em !important;
  line-height: 2em !important;
  background-color: rgb(78, 78, 78);
  border-radius: 10px;
  text-align: center;
}
.container {
  max-width: 100%;
  padding: 0;
}
</style>

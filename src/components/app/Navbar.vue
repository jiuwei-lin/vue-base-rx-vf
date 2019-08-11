<template>
  <v-app-bar app>
    <v-toolbar-title class="headline text-uppercase">
      <span>KF-SYSCC</span>
      <span class="grey--text font-weight-light">MD</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
      <span class="mr-2">Latest Release</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {};
  }
};
</script>

<style>
</style>
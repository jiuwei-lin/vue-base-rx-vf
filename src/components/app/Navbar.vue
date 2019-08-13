<template>
  <nav>
    <v-app-bar app>
      <v-app-bar-nav-icon class="grey--text" @click="drawer=!drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span v-if="!drawer" class="grey--text font-weight-light">{{ this.title }}</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn depressed small color="white">
        <v-icon>mdi-account</v-icon>
        <span class="title">{{ user.NAME_CH }}</span>
      </v-btn>
      <v-icon @click="closewin()">mdi-logout-variant</v-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app>
      <v-layout column align-center>
        <v-flex class="mt-4 headline text-uppercase">
          <span class="grey--text font-weight-light">{{ this.title }}</span>
        </v-flex>
      </v-layout>
      <v-list dense>
        <v-list-item-group color="gray">
          <v-list-item v-for="(link, i) in links" :key="i" :to="link.route">
            <v-list-item-icon>
              <v-icon>{{link.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{link.text}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Navbar',
  data() {
    return {
      title: 'KFSYSCC',
      drawer: false,
      links: [
        { icon: 'mdi-home-import-outline', text: 'Home', route: '/' },
        { icon: 'mdi-mixer', text: 'Demo', route: '/demo' },
        { icon: 'mdi-information-outline', text: 'About', route: '/about' }
      ]
    };
  },
  methods: {
    closewin() {
      this.$store.dispatch('app/logout');
    }
  },
  computed: {
    ...mapGetters('app', ['user'])
  }
};
</script>

<style>
</style>
<template>
  <v-app>
    <Navbar></Navbar>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/app/Navbar';

export default {
  name: 'App',
  data: () => ({
    //
  }),
  components: {
    Navbar
  },
  created() {
    this.$store.dispatch('app/signup');
  }
};
</script>

<template>
  <!--HelloWorld /-->
  <v-layout>
    <router-link to="/demo">
      <v-btn>Axios Demo</v-btn>
    </router-link>
  </v-layout>
</template>

<script>
//import HelloWorld from '../components/HelloWorld';

export default {
  name: 'home',
  data() {
    return {
      info: null
    };
  },
  components: {
    //    HelloWorld,
  }
};
</script>

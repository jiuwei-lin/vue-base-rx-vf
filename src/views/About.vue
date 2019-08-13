<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex xs12>
        <span class="title">This is an about page</span>
        <v-img :src="require('@/assets/kfsyscc.png')" class contain height="200px"></v-img>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'about'
};
</script>
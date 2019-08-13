<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex xs12>
        <v-btn @click="getTodos()">getTodos</v-btn>
      </v-flex>
      <v-flex xs12>
        <v-simple-table>
          <thead>
            <tr>
              <th class="text-left">Title</th>
              <th class="text-left">Completed</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in todos" :key="item.id">
              <td>{{ item.title }}</td>
              <td>{{ item.completed }}</td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import demo from '@/api/demo';

export default {
  name: 'demo',
  data() {
    return {
      todos: null
    };
  },
  methods: {
    getTodos() {
      demo
        .getTodos()
        .then(resp => (this.todos = resp))
        .catch(err => console.log(err));
    }
  }
};
</script>

<style>
</style>
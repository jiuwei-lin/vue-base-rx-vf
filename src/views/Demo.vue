<template>
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
  mounted() {
    demo
      .getTodos()
      .then(resp => (this.todos = resp))
      .catch(err => console.log(err));
  }
};
</script>

<style>
</style>
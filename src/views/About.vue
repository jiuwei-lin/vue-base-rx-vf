<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>Use route params</p>
    <p>{{ this.$route.params.user}}</p>
    <p>Use Props</p>
    <p>{{ this.user}}</p>
  </div>
</template>

<script>
export default {
  name: 'about',
  props: {
    user: {
      type: String
    }
  }
};
</script>
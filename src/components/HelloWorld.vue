<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="incrementCounter">Click me</button>
    <p>You've clicked the button {{ counter }} times.</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      counter: 0
    }
  },
  methods: {
    incrementCounter() {
      this.counter++;
    }
  }
}
</script>

<style scoped>
.hello {
  text-align: center;
}
</style>

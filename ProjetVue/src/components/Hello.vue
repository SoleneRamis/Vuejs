<template>
  <div class="hello">
    <p>Hello</p>
    <p>{{ message }}</p>
    <input v-model="message">
    <button v-on:click="reverseMessage">Reverse Message</button>
    <p>{{ seconds }}</p>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      message: '',
      seconds: 0
    }
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  },
  mounted: function () {
    setInterval(() => {
      this.seconds++
    }, 1000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}
</style>

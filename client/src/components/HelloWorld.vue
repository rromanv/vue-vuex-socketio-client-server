<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>{{ count }}</h3>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  sockets: {
    COUNTER_INCREMENT: function() {
      this.$store.commit('SOCKET_COUNTER_INCREMENT')
    },
    COUNTER_DECREMENT: function() {
      this.$store.commit('SOCKET_COUNTER_DECREMENT')
    },
  },
  methods: {
    increment() {
      this.$store.dispatch('socket_increment')
    },
    decrement() {
      this.$store.dispatch('socket_decrement')
    },
  },
  computed: {
    count() {
      return this.$store.state.counterModule.count
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

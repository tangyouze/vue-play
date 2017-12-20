<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
  export default {
    computed: {
      count () {
        return 123
      }
    },
    methods: {
      hello () {}

    },
    name: 'app'
  }
</script>

<style lang='scss'>
  .vue {
    color: darkgreen
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

</style>

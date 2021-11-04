<template>
  <div id="app">
    <div class="container-fluid">
      <Menu />
      <router-view />
    </div>
  </div>
</template>

<script>
import Menu from './components/Menu';

export default {
  components: {
    Menu
  }
}

</script>

<style>
body {
  background-color: rgb(0, 121, 191);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

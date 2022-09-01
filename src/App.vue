<template>
  <nav>
    <router-link to="/">Home</router-link>
    |
    <router-link to="/create">Create Account</router-link>
    |
    <router-link to="/login">Log In</router-link>
    |
    <router-link to="/map">To the Map!</router-link>
  </nav>
  <router-view />
  <div id="app">
    <MapView />
  </div>
</template>
<script>
// import MapView from "../src/views/MapView.vue";

// export default {
//   name: "App",
//   components: {
//     MapView,
//   },
// };
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background-color: black;
  margin: 0px;
}
body {
  margin: 0;
  padding: 0;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #ffffff;
}

nav a.router-link-exact-active {
  color: #0026fc;
}
</style>

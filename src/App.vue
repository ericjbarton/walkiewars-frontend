<template>
  <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark" style="background-color: #19a6c8">
    <div class="container-fluid">
      <a class="navbar-brand" href="/home">
        <img src="./assets/GeneralDogCartoon.png" alt="" width="50" height="50" class="d-inline-block align-text-top" />
        WALKIEWARS
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li>
            <a class="nav-link" href="/map">To the Map!</a>
          </li>
          <li>
            <a class="nav-link" href="/create">Join up!</a>
          </li>
          <li></li>
          <li>
            <a v-if="!isLoggedIn" class="nav-link" href="/login">Sign In</a>
          </li>
          <li>
            <a v-if="isLoggedIn" class="nav-link" href="/logout">Sign out</a>
          </li>
        </ul>
      </div>
      <a class="nav-link" href="/dogs">.</a>
    </div>
  </nav>
  <!-- <div v-if="this.flashMessage" class="alert alert-success">
    {{ flashMessage }}
  </div> -->
  <router-view />
</template>
<script></script>
<style>
#app {
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: "grayscale";

  text-align: center;
  -moz-text-decoration-color: white;
  /* padding: 0; */
  background-color: black;
}
</style>

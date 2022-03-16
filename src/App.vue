<!-- 
    App.vue is the start of the application.
    This is our route compenent. Everything that is called, goes through this file.
    All of the created components will be embedded in this file.
-->

<!-- This is the template. This is the output, written in HTML -->
<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/users">List of Users</router-link> |  -->
      <router-link to="/contactpage"></router-link>
      <router-link to="/loginpage"></router-link>
      <router-link to="/newcontactpage"></router-link>
      <!-- <router-link to="/editcontactpage"></router-link> -->
    </div>
    <router-view />
  </div>
</template>

<!-- This is the script. This is the logic, written in Javascript -->
<script>
export default {
  name: "App",
};
</script>


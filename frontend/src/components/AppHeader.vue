<!-- 
    AppHeader.vue intends to create a header for the application.
-->

<!-- This part display the elements within the header -->
<template>
  <div class="header">
    <!-- This creates a logo from vue on the left side of the header -->
    <div class="left">
      <img class="logo" src="../assets/logo.png" />
      <div class="topic">
        <a>Contacts</a>
      </div>
    </div>
    <!-- This creates a button to call the function "goToLogin" so the user can go to the login page on the right side of the header -->
    <div class="right">
      <div class="link" v-on:click="goToLogin">
        <img class="user" src="../assets/user.png" />
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "AppHeader",
  props: {},
  methods: {
    // This method sends the user on-click to the Login-Page
    goToLogin(){
            this.$router.push("/loginpage")
    }
  }
};
</script>


<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: black;
  color: white;
  position: fixed;
  top: 0px;
  width: 100%;
  border-bottom: solid rgb(155, 155, 155) 0.5px;
}

.left {
  align-items: center;
  display: flex;
  padding-left: 20px;
  height: 100%;
}

.right {
  margin-left: auto;
  padding-right: 20px;
}

.topic {
  color: white;
  border-left: solid 1px rgb(53, 53, 53);
  border-right: solid 1px rgb(53, 53, 53);
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
  transition: 0.3s;
}

.link {
  color: darkgrey;
  border-left: solid 1px rgb(53, 53, 53);
  border-right: solid 1px rgb(53, 53, 53);
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
  transition: 0.3s;
}

.link:hover{
  background: rgb(20, 20, 20);
  color: white
}

.logo {
  height: 40px;
  padding-right: 20px;
}

.user {
  opacity: 60%;
  height: 30px;
  transition: 0.3s;
}

.user:hover{
  opacity: 100%;
}
</style>

<template>
  <div>
    <app-header />
    <div class="container">
      <div class="form">
        <form @submit.prevent="">
          <label for="uname"><b>Username</b></label
          ><br />
          <input
            type="text"
            placeholder="Enter Username"
            v-model="uname"
            required
          />
          <br />
          <label for="psw"><b>Password</b></label
          ><br />
          <input
            type="password"
            placeholder="Enter Password"
            v-model="password"
            required
          />
          <br />
          <button-temp class="button" name="Login" @onClick="submitData" />
          <p class="incorrect" v-if="isFalse">
            Incorrect Username and/or Password!
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import ButtonTemp from "../components/ButtonTemp.vue";

export default {
  name: "LoginPage",
  props: {},
  data() {
    return {
      uname: "",
      password: "",
      isFalse: false,
    };
  },
  methods: {
    async submitData() {
      const res = await fetch("http://localhost:5001/auth", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          username: this.uname.trim(),
          password: this.password,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.token == null) {
            this.isFalse = true;
          } else if (data.token) {
            this.isFalse = false;
            this.$router.push("/contactpage");
          }
        });
    },
  },
  components: {
    AppHeader,
    ButtonTemp,
  },
};
</script>

<style scoped>
/* Bordered form */
.container {
  justify-content: center;
  display: flex;
  margin-top: 50px;
}

.form {
  border: 3px solid #f1f1f1;
  width: 70%;
  max-width: 500px;
  padding: 10px 30px 10px 10px;
}

/* Full-width inputs */
input[type="text"],
input[type="password"] {
  padding: 8px;
  width: 100%;
  margin: 10px;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

.button {
  margin: 10px;
  width: 100%;
}

/* Add padding to containers */

.incorrect {
  color: red;
  font-size: 15px;
}
</style>


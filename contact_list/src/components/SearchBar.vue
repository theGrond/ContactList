<template>
  <div>
    <div class="white"></div>
    <div class="input-group">
      <p class="contactSign">Contacts</p>
      <input
        type="text"
        class="searchbar"
        placeholder="Search for..."
        v-model="searchWord"
        @keyup.enter="submitSearch"
      />
      <button-temp class="btn" name="Search" v-bind:grey=true v-on:click="submitSearch"/>
      <button-temp
        class="btn"
        name="+ Add"
        v-bind:orange="true"
        @onClick="goToAddPage"
      />
    </div>
  </div>
</template>

<script>
import ButtonTemp from "../components/ButtonTemp.vue";

export default {
  name: "SearchBar",
  components: {
    ButtonTemp,
  },
  data(){
    searchWord: ''
  },
  props: {},
  methods: {
    goToAddPage() {
      this.$router.push("/newcontactpage");
    },
    submitSearch (event) {
      this.$emit('search', this.searchWord)
    }
  },
};
</script>

<style>
.input-group {
  position: fixed;
  width: calc(100% - 57px);
  top: 40px;
  margin: 22px 31px 10px 31px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  overflow: hidden;
  min-width: 200px;
}

.searchbar {
  padding: 7.5px;
  margin: 1px;
  width: 100%;
}

.btn {
  margin-left: 1px;
}

.contactSign {
  margin-right: 20px;
  font-weight: bold;
}
.white {
  position: fixed;
  top: 50px;
  width: 100%;
  height: 73px;
  background-color: rgb(255, 255, 255);
  backdrop-filter: blur(1000px);
  border-bottom: solid 1px rgb(155, 153, 153);
}
</style>
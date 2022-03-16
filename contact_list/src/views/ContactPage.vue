<template>
  <div class="container">
    <app-header />
    <search-bar @search="getSearchword"></search-bar>
    <div class="entries">
      <contact-entries v-bind:searchWord="searchWord"/>
    </div>
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import ContactEntries from "../components/ContactEntries.vue";
import SearchBar from "../components/SearchBar.vue";

export default {
  name: "ContactPage",
  props: {},
  data() {
    return {
      searchWord: "",
    };
  },
  methods: {
     getSearchword (value) {
      this.searchWord = value
    }
  },
  components: {
    AppHeader,
    ContactEntries,
    SearchBar,
  },
};
</script>

<style scoped>
.entries {
  margin-top: 125px;
}
</style>


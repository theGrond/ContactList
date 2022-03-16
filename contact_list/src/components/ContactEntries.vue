<!-- 
    ContactEntries.vue shows the entry field for searching the list of contact entries. 
-->

<template>
  <div class="container">
    <!-- If contacts are found with the element inside the entry field, the contacts will be displayed-->
    <div v-for="(contact, index) in filterContacts" :key="index">
      <contact :Contact="contact" />
    </div>
    <!-- If no contact is found with the element inside the entry field, the message "sorry, no search results" will be displayed" -->
    <span v-if="filterContacts.length==0" class="noResults">
      sorry, no search results 
    </span>
  </div>
</template>

<script>
import Contact from "../components/Contact.vue";

export default {
  name: "ContactEntries",
  // this function fetches all of the data for the contacts from the server
  async created() {
    const res = await fetch("http://localhost:5001/contacts/getmany", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
    // this part forms the data sets into the json format,transforms them and is saved in contacts 
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.Contacts = data;
      });
  },
  data() {
    return {
      Contacts: "",
    };
  },
  components: {
    Contact,
  },
  props: {
    searchWord: "",
  },
  methods: {},
  computed: {
    // this function filters the input from the user in the search element and ignores different captualization of words
    filterContacts: function () {
      console.log("Searchword: " + this.searchWord);
      return Object.values(this.Contacts).filter((contact) => {
        return (
          contact.fname.toLowerCase().match(this.searchWord.toLowerCase()) ||
          contact.lname.toLowerCase().match(this.searchWord.toLowerCase())
        );
      });
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.noResults{
  margin-top: 20px;
  font-size: 20px;
  color: rgb(65, 184, 131)
}

</style>
<!-- 
    Contact.vue intends to create the template for every contact, consisting out of an image, name, number, email, and facebook.
    The entries of the contacts can be created, edited or deleted.
-->

<!-- This is the template. This is the output, written in HTML -->
<template>
  <div class="container">
    <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"> -->

    <!-- Template for each contact -->
    <div class="Picture">
      <img
        :src="`${Contact.image}`"
        onerror="this.onerror=null; this.src='https://semantic-ui.com/images/avatar2/large/kristy.png'"
        alt="KristyProfile"
      />
    </div>

    <div>
      <div class="Name">
        <p>{{ Contact.fname }} {{ Contact.lname }}</p>
      </div>
      <div class="ContactInfos">
        <p>{{ Contact.mnumber }}</p>
        <br />
        <p>Email: {{ Contact.email }}</p>
        <br />
        <p>Facebook: {{ Contact.facebook }}</p>
      </div>
      <div class="Buttons">
        <div class="editbtn" v-on:click="editEntry">
          <img class="icon" src="../assets/edit.png" />
        </div>
        <div class="deletebtn" v-on:click="deleteEntry">
          <img class="icon" src="../assets/delete.png" />
        </div>
      </div>
    </div>

  </div>
</template>


<!-- This is the script. This is the logic, written in Javascript -->
<script>
export default {
  name: "Contact",
  data() {
    return {};
  },
  created() {
    console.log(this.Contact);
  },
  props: {
    Contact: {type: Object},
  },
  methods: {
    // This function calls the "edit contact page" when pressed. 
    editEntry(){
      this.$router.push("/editcontactpage/"+this.Contact.contactid)
    },
    // This function asks for confirmation, then deletes the corresponsing contact when "delete button" is pressed.
    async deleteEntry() {
      if (confirm("Are you sure you want to delete this Contact?")) {
        const res = await fetch(
          "http://localhost:5001/contacts/delete/" + this.Contact.contactid,
          {
            method: "DELETE",
            headers: {
              "Content-type": "application/json",
            },
          }
        )
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            this.$router.go();
          });
      } else {
        console.log("Canceled Deletion");
      }
    },
  },
};
</script>


<!-- This is the stylesheet -->
<style scoped>
.container {
  border-width: 0px 1px 1px 1px;
  border-style: solid;
  border-color: rgb(155, 153, 153);
  width: 350px;
  height: 540px;
  margin: 10px;
  border-radius: 7px;
  opacity: 100%;
  transition: 0.3s;
}
.container:hover {
  margin-top: 5px;
  margin-bottom: 15px;
}

.Picture {
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 345px;
  width: 350px;
}

img {
  width: 351px;
  height: auto;
  max-height: 345px;
  border-radius: 5px;
}

.Name {
  font-size: 18px;
  font-weight: bolder;
}

.ContactInfos {
  margin-top: 5px;
  font-size: 13px;
  color: rgb(155, 153, 153);
  line-height: 0px;
  text-align: center;
}

.Buttons {
  margin: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.editbtn img.icon {
  float: left;
  width: 20px;
  height: 20px;
  background-color: DodgerBlue;
  border: none;
  color: white;
  padding: 12px 16px;
  cursor: pointer;
  margin-right: 10px;
  border-radius: 5px;
  transition: 0.3s;
}

.deletebtn img.icon {
  float: left;
  width: 20px;
  height: 20px;
  background-color: rgb(255, 45, 30);
  border: none;
  color: white;
  padding: 12px 16px;
  cursor: pointer;
  margin-right: 10px;
  border-radius: 5px;
  transition: 0.3s;
}

.editbtn img.icon:hover {
  background-color: rgb(21, 93, 226);
}

.deletebtn img.icon:hover {
  background-color: rgb(179, 11, 11);
}

</style>
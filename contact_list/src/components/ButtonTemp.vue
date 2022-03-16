<!-- 
    ButtonTemp.vue intends to create button for the application.
-->

<!-- This intends to create the button class. The button can be assigned via prop, which will load the corresponsing css element-->
<template>
  <button :class="[orange ? 'orange': grey ? 'grey': 'green']" v-on:click="onClick">{{name}}</button>
</template>


<script>
export default {
  name: "ButtonTemp",
  props: {
      name: '',
      data: '',
      orange: {
        type: Boolean,
        default: () => false,
      },
      grey: {
        type: Boolean,
        default: () => false,
      }
  },
  methods: {
    // This method gives functionaility to the button. When the button is clicked, it performs an action.
    onClick(){
      this.$emit('onClick');
    }
  }
};
</script>

<style scoped>

/* Set a style for all buttons */
button {
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 3px;
  font-weight: bold;
  white-space: nowrap;
}

.green {
  background: #04aa6d;
}

.orange {
  background: rgb(230, 138, 0);
}

.grey {
  background: rgb(223, 223, 223);
  color: black 
}

/* Add a hover effect for buttons */
button:hover {
  opacity: 0.8;
}

</style>


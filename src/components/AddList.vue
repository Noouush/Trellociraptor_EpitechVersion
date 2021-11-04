<template>
  <form @submit="onSubmit">
    <input type="text" v-model="name" placeholder="+ Add another list" />
    <input type="submit" value="Add">
  </form>
  
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'AddList',

    data() {
        return {
        name: '',
    }
  },

   methods: {
    ...mapActions(['addList']),
    onSubmit(e) {
      e.preventDefault();
      this.addList(this.name);
    },
  },

}
</script>

<style scoped>

input{
  color: black;
  width: 260px;
  margin: 20px auto;
  overflow: auto;
  border-radius: 5px;
  font-size: 1.2em;
  font-family: 'Ubuntu',sans-serif;
  font-weight: 400;
  background-color: white;
  border: none;
}

::placeholder{
  color: black;
}


</style>
<template>
    <form @submit="onSubmit">
    <div class="row">
      <div class="col-md-10">
      <input type="text" v-model="title" placeholder="+ Add a card" />
      <input type="hidden" :value="cat">
      </div>
      <div class="col-md-2">
        <i class="far fa-clone"></i>
</div>
</div>
  </form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'AddCard',
    props: {
      cat: Number,
    },

    data() {
    return {
      title: '',
    }
    },

     methods: {
    ...mapActions(["addCard"]),
    onSubmit(e) {
      e.preventDefault()
      if (!this.title) {
        alert('Please add a card')
        return
      }

      this.addCard([this.title, [this.cat]]);
     // this.card = ''
    },
  },

}
</script>

<style>

input{
  font-family: 'Ubuntu',sans-serif;
  font-weight: 400;
  background-color:#ebecf0;
  color: #000000;
  border: none;
  font-size: 14px;
  padding: 10px;
}

::placeholder{
  color:#838a96;
  font-family: 'Ubuntu',sans-serif;
  font-size: 14px;
  font-weight: 400;
  background-color:transparent;
}

#monsvg{
  margin-top: 13px;
}

</style>
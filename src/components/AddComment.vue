<template>
  <div>
    <form @submit="onSubmit">
      <textarea type="text" v-model="comment" placeholder="Add comment..."/>
      <input type="hidden" :value="cat">
      <input type="submit" value="add">
    </form>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: "AddComment",
  props:{
    cat: Number
  },
  data(){
    return {
      comment: '',
    }
  },
  methods: {
    ...mapActions(['addComment']),
    onSubmit(e){
      e.preventDefault();
      this.addComment([this.comment, [this.cat]]);
      this.comment = "";

    }
  }
}
</script>

<style scoped>

</style>
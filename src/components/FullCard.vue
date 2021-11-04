<template>
  <div>
    <router-link to="/">Back to the board</router-link>

    <h2 @dblclick="editTitle = true" v-if="!editTitle">{{ getSingleCard.title.rendered }}</h2>
<!--  edit title  -->
    <form @reset="cancelNewTitle" @submit="saveTitle" v-else>
      <input autofocus v-model="newTitle"/>
      <button type="reset">cancel</button>
    </form>
<!--  delete  -->
    <router-link to="/"><button @click="deleteCard($route.params.id)">delete</button></router-link>
<!--  edit content  -->
    <p @dblclick="editContent = true" v-if="!editContent" v-html="getSingleCard.content.rendered"></p>
    <form @reset="cancelNewContent" @submit="saveContent" v-else>
      <textarea autofocus v-model="newContent"/>
      <button type="reset">cancel</button>
      <button type="submit">edit</button>
    </form>
<!--  add comment and show  -->
    <AddComment :cat="getSingleCard.id"/>
    <div v-for="comment in allComments" :key="comment.id">
      <p v-html="comment.content.rendered"></p>
      <p>{{comment.author_name}}  <button @click="delComm(comment.id)">delete</button></p>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import AddComment from "./AddComment";

export default {
  name: "FullCard",
  components: {
    AddComment
  },
  data() {
    return {
      title: "",
      content: "",
      id: "",
      editTitle: false,
      newTitle: "change your title...",
      editContent: false,
      newContent: "change your description..."
    }
  },
  methods: {
    ...mapActions(["fetchSingleCard", "addComment", "fetchCardComments", "deleteComm", "reTitleCard", "editCard", "deleteCard"]),
    delComm(id) {
      this.deleteComm([id, this.$route.params.id])
    },
    cancelNewTitle() {
      this.newTitle = this.getSingleCard.title.rendered
      this.editTitle = false
    },
    saveTitle() {
      this.editTitle = false
      this.reTitleCard([this.$route.params.id, this.newTitle])
    },
    cancelNewContent() {
      this.newContent = this.getSingleCard.content.rendered
      this.editContent = false
    },
    saveContent() {
      this.editContent = false
      this.editCard([this.$route.params.id, this.newContent])
    },
  },
  computed: {
    ...mapGetters(["getSingleCard", "allComments"]),


  },
  created() {
    // let id = this.$route.params.id
    this.fetchSingleCard(this.$route.params.id)
    this.fetchCardComments(this.$route.params.id)
  }
}
</script>

<style scoped>

</style>
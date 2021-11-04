<template>
  <div>
    <h3 @dblclick="editName = true" v-if="!editName">{{ name }}</h3>
    <!-- Edit list name -->
    <form @reset="cancelNewName" @submit="saveName" v-else>
      <input autofocus v-model="newName"/>
      <button type="reset">cancel</button>
      <button type="submit">edit</button>
    </form>
    <!-- Other List infos   -->
    <button @click="deleteList(listId)">delete</button>
    <SmallCard class="card" v-for="card in specificCards" :key="card.id" :title="card.title.rendered"  :listId="listId" :cardId="card.id"/>
    <AddCard :cat="listId"/>
  </div>

</template>

<script>
import AddCard from './AddCard'
import SmallCard from './SmallCard';

import {mapActions, mapGetters} from 'vuex';
import draggable from 'vuedraggable';

export default {
  name: 'List',
  props: {
    name: String,
    listId: Number
  },
  data() {
    return {
      id: this.listId,
      editName: false,
      newName: this.name
    }

  },
  components: {
    AddCard,
    SmallCard,
    draggable
  },

  methods: {
    ...mapActions(["fetchCards", "deleteList", "updateList"]),
    cancelNewName() {
      this.newName = this.name
      this.editName = false
    },
    saveName() {
      this.editName = false
      this.updateList([this.listId, this.newName])
    },

  },
  computed: {
    ...mapGetters(['allCards']),
    specificCards: function () {
      return this.allCards.filter(card => !card.categories.indexOf(this.listId))
    }
  },
  created() {
    this.fetchCards()
  },


}
</script>

<style scoped>
</style>
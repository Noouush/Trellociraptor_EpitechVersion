<template>
    <div>
     <router-link tag="div" :to="{name: 'FullCard', params: { id:  cardId  },}">
      <h4>{{ title }}</h4>
    </router-link>
    <select @change="move($event)">
      <option value="">where ?</option>
      <option v-for="list in allLists" :key="list.name" :value="list.id">{{list.name}}</option>
    </select>
      <button @click="deleteCard(cardId)">delete</button>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
  name: 'SmallCard',
  props: {
    title: String,
    cardId: Number,
    listId: Number
  },
  methods: {
    ...mapActions(['deleteCard', 'moveCard']),
    move(event){
      this.moveCard([this.cardId, event.target.value])
    }

  },
  computed: {
    ...mapGetters(['allComments', 'allLists'])
  },

}
</script>

<style scoped>

</style>
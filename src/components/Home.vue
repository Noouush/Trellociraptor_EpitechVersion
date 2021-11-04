<template>
    <div class="container-fluid">
      <div class="row">
        <draggable class="col-md pt-5 d-flex flex-wrap flex-row justify-content-start">
          <List v-for="list in allLists" :key="list.id" :name="list.name" :listId="list.id" class="col" />

            <!--<div class="header_list">
              <div class="row">
              <h3 class="col" align="left">{{ list.name }}</h3>
              <div class="col" alig="right">
                <i class="fas fa-pen"></i>
                <i @click="deleteList(list.id)" class="far fa-trash-alt"></i>
                </div>
                  <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="35" height="24"><path d="M15.5 12a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z"></path><path fill-rule="evenodd" d="M12 3.5c-3.432 0-6.125 1.534-8.054 3.24C2.02 8.445.814 10.352.33 11.202a1.6 1.6 0 000 1.598c.484.85 1.69 2.758 3.616 4.46C5.876 18.966 8.568 20.5 12 20.5c3.432 0 6.125-1.534 8.054-3.24 1.926-1.704 3.132-3.611 3.616-4.461a1.6 1.6 0 000-1.598c-.484-.85-1.69-2.757-3.616-4.46C18.124 5.034 15.432 3.5 12 3.5zM1.633 11.945c.441-.774 1.551-2.528 3.307-4.08C6.69 6.314 9.045 5 12 5c2.955 0 5.309 1.315 7.06 2.864 1.756 1.553 2.866 3.307 3.307 4.08a.111.111 0 01.017.056.111.111 0 01-.017.056c-.441.774-1.551 2.527-3.307 4.08C17.31 17.685 14.955 19 12 19c-2.955 0-5.309-1.315-7.06-2.864-1.756-1.553-2.866-3.306-3.307-4.08A.11.11 0 011.616 12a.11.11 0 01.017-.055z"></path></svg></p>
                  <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="34" height="24"><path d="M15.25 14a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5z"></path><path fill-rule="evenodd" d="M1.75 3A1.75 1.75 0 000 4.75v14.5C0 20.216.784 21 1.75 21h20.5A1.75 1.75 0 0024 19.25V4.75A1.75 1.75 0 0022.25 3H1.75zM1.5 4.75a.25.25 0 01.25-.25h20.5a.25.25 0 01.25.25V8.5h-21V4.75zm0 5.25v9.25c0 .138.112.25.25.25h20.5a.25.25 0 00.25-.25V10h-21z"></path></svg></p>
                  <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="35" height="16"><path fill-rule="evenodd" d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z"></path></svg></p>
                </div>-->
        </draggable>
            <!-- Ligne d'ajout de Liste -->
        <div class="col" id="task2">
        <AddList />
        </div>
      </div>  
    </div>
</template>

<script>

import AddList from './AddList';
import List from './List';

import {mapGetters, mapActions} from 'vuex';
import draggable from 'vuedraggable'

export default {
  name: "Home",

  methods: {
  ...mapActions(['fetchLists',
  'fetchCards'])
  },

  data() {
    return {
      title: '',
    }
  },

  components: {
    AddList,
    List,
    draggable
  },

  computed: {
    ...mapGetters(['allLists'])
    },

  created() {
      this.fetchLists();
    },

};
</script>

<style scoped>

.container-fluid{
  background-color: rgb(0, 121, 191);
}

#task {
  cursor: pointer;
  padding: 5px;
}

.header_list{
  width: 350px;
  margin: 15px auto;
  padding: 0px 15px 15px 15px;
  border-radius: 5px;
  font-family: 'Ubuntu', sans-serif;
  font-size: 14px;
  font-weight: 700;
  background-color: #ebecf0;

}

h3 {
  color: #000000;
  padding: 10px 0px 0px 10px;
  font-size: 1.2em; 
}

.far {
  font-size: 20px;
  padding: 5px;
}

.fas {
  font-size: 17px;
  padding: 5px;
}


</style>

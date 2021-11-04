import Vue from "vue";
import Vuex from "vuex";
import lists from './modules/lists'

// Lancer vueX
Vue.use(Vuex);

// Créer un nouvel objet vue.store et l'exporter pour utiliser les state, mutations and actions
export default new Vuex.Store({
    name: "store",
    modules: {
        lists
    },
})

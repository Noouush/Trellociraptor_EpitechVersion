import axios from "axios";

// PARTIE FIXE DE L'API
const BASE_URL = "http://localhost:8888/wordpress/wp-json/wp/v2" // http://wordpress.localhost/wp-json/wp/v2

// TOKEN
// const token = {
//   'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODg4OFwvd29yZHByZXNzIiwiaWF0IjoxNjI3Mzc2NjcwLCJuYmYiOjE2MjczNzY2NzAsImV4cCI6MTYyNzk4MTQ3MCwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.9NsHfsy-q_VS8XEJE5SourNuUZBWJjMKKdU0u-k-I_Q'
// }
// ne marche pas chez moi.... Je l'ai quand même laissé pour ceux chez qui ca fonctionne, par contre c'est mon token.

const state = { 
    lists: [],
    cards: [],
    comments: [],
    singleCard : []
};

const getters = {
    allLists: state => state.lists.filter(list => list.id !== 1),
    allCards: state => state.cards,
    getSingleCard: state => state.singleCard,
    allComments: state => state.comments        
 };

const actions = {

    // ACTION LISTES
    async fetchLists({ commit }) {
        const response = await axios.get(`${BASE_URL}/categories?orderby=id`);
        commit("setLists", response.data)
    },

    async addList({ dispatch }, name){
        await axios.post(`${BASE_URL}/categories`, {name}, {
            headers: {  'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODg4OFwvd29yZHByZXNzIiwiaWF0IjoxNjI3Mzc2NjcwLCJuYmYiOjE2MjczNzY2NzAsImV4cCI6MTYyNzk4MTQ3MCwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.9NsHfsy-q_VS8XEJE5SourNuUZBWJjMKKdU0u-k-I_Q'
        }});
        dispatch("fetchLists")
      },
 
    async deleteList({ dispatch }, id) {
        await axios.delete(`${BASE_URL}/categories/${id}`,{
            data: {"force": "true"}, 
            headers: {  'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODg4OFwvd29yZHByZXNzIiwiaWF0IjoxNjI3Mzc2NjcwLCJuYmYiOjE2MjczNzY2NzAsImV4cCI6MTYyNzk4MTQ3MCwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.9NsHfsy-q_VS8XEJE5SourNuUZBWJjMKKdU0u-k-I_Q'
        }});
        dispatch("fetchLists")
      },

    async updateList({ dispatch }, [id, name]) {
        await axios.put(`${BASE_URL}/categories/${id}`, {name}, {
            data: {"force": "true"}, 
            headers: {  'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODg4OFwvd29yZHByZXNzIiwiaWF0IjoxNjI3Mzc2NjcwLCJuYmYiOjE2MjczNzY2NzAsImV4cCI6MTYyNzk4MTQ3MCwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.9NsHfsy-q_VS8XEJE5SourNuUZBWJjMKKdU0u-k-I_Q'
        }});
        dispatch("fetchLists")
    },


    // ACTION CARDS
    async fetchCards({ commit }) {
        const response = await axios.get(`${BASE_URL}/posts?per_page=100`);
        commit("setCards", response.data)
    },

    async fetchSingleCard({commit}, id) {
        const response = await axios.get(`${BASE_URL}/posts/${id}`);
        commit("setSingleCard", response.data)
    },

    async addCard({dispatch}, [title, id]) {
        const data = {
          title: title,
          categories: id,
          content: "Add your tasks here",
          status: "publish"
        }
        await axios.post(`${BASE_URL}/posts`, 
        data, 
        { headers: {  'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODg4OFwvd29yZHByZXNzIiwiaWF0IjoxNjI3Mzc2NjcwLCJuYmYiOjE2MjczNzY2NzAsImV4cCI6MTYyNzk4MTQ3MCwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.9NsHfsy-q_VS8XEJE5SourNuUZBWJjMKKdU0u-k-I_Q'
    }});
        dispatch('fetchCards')
      },

    async addCardContent({ dispatch }, [id, content]) {
        await axios.put(`${BASE_URL}/posts/${id}`, {content: content}, {
            headers: {  'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODg4OFwvd29yZHByZXNzIiwiaWF0IjoxNjI3Mzc2NjcwLCJuYmYiOjE2MjczNzY2NzAsImV4cCI6MTYyNzk4MTQ3MCwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.9NsHfsy-q_VS8XEJE5SourNuUZBWJjMKKdU0u-k-I_Q'
        }});
        dispatch("fetchCards")
    },

    async reTitleCard({ dispatch }, [id, title]) {
        await axios.put(`${BASE_URL}/posts/${id}`, {title: title}, {
            headers: {  'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODg4OFwvd29yZHByZXNzIiwiaWF0IjoxNjI3Mzc2NjcwLCJuYmYiOjE2MjczNzY2NzAsImV4cCI6MTYyNzk4MTQ3MCwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.9NsHfsy-q_VS8XEJE5SourNuUZBWJjMKKdU0u-k-I_Q'
        }});
        dispatch("fetchSingleCard", id)
      },
    
    async deleteCard({ dispatch }, id) {
        await axios.delete(`${BASE_URL}/posts/${id}`, {
            data: {"force": "true"},
            headers: {  'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODg4OFwvd29yZHByZXNzIiwiaWF0IjoxNjI3Mzc2NjcwLCJuYmYiOjE2MjczNzY2NzAsImV4cCI6MTYyNzk4MTQ3MCwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.9NsHfsy-q_VS8XEJE5SourNuUZBWJjMKKdU0u-k-I_Q'
        }});
        dispatch("fetchCards")
    },


    async moveCard({dispatch}, [id, catId]) {
        await axios.put(`${BASE_URL}/posts/${id}`, {categories: catId}, {
            headers: {  'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODg4OFwvd29yZHByZXNzIiwiaWF0IjoxNjI3Mzc2NjcwLCJuYmYiOjE2MjczNzY2NzAsImV4cCI6MTYyNzk4MTQ3MCwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.9NsHfsy-q_VS8XEJE5SourNuUZBWJjMKKdU0u-k-I_Q'
        }});
        dispatch('fetchCards')
    },

    async editCard({dispatch}, [id, content]) {
        await axios.put(`${BASE_URL}/posts/${id}`, {content: content}, { headers: {  'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODg4OFwvd29yZHByZXNzIiwiaWF0IjoxNjI3Mzc2NjcwLCJuYmYiOjE2MjczNzY2NzAsImV4cCI6MTYyNzk4MTQ3MCwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.9NsHfsy-q_VS8XEJE5SourNuUZBWJjMKKdU0u-k-I_Q'
    }});
        dispatch('fetchSingleCard', id)
    },
    
    // ACTIONS COMMENTAIRES

    async fetchCardComments({commit}, id) {
        const response = await axios.get(`${BASE_URL}/comments?post=${id}`);
        commit('setCardComments', response.data);
    },

    async addComment({dispatch}, [content, id]) {
        console.log(id)
        await axios.post(`${BASE_URL}/comments`, { content: content, post: id[0]}, { headers: {  'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODg4OFwvd29yZHByZXNzIiwiaWF0IjoxNjI3Mzc2NjcwLCJuYmYiOjE2MjczNzY2NzAsImV4cCI6MTYyNzk4MTQ3MCwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.9NsHfsy-q_VS8XEJE5SourNuUZBWJjMKKdU0u-k-I_Q'
    }});
        dispatch('fetchCardComments', id)
    },

    async deleteComm({dispatch}, [commId, postId]) {
        await axios.delete(`${BASE_URL}/comments/${commId}`,
        {data: {"force": "true"}, headers: {  'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODg4OFwvd29yZHByZXNzIiwiaWF0IjoxNjI3Mzc2NjcwLCJuYmYiOjE2MjczNzY2NzAsImV4cCI6MTYyNzk4MTQ3MCwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.9NsHfsy-q_VS8XEJE5SourNuUZBWJjMKKdU0u-k-I_Q'
    }});
        dispatch('fetchCardComments', postId)
    },

};

const mutations = { 

    // MUTATION DE LISTS
    setLists: (state, lists) => (state.lists = lists),

    // MUTATION DES CARDS
    setCards: (state, cards) => (state.cards = cards),
    setSingleCard: (state, card) => (state.singleCard = card),

    // MUTATION DES COMMENTS
    setCardComments: (state, comments) => (state.comments = comments),

};

export default {
    state,
    getters,
    actions,
    mutations
}
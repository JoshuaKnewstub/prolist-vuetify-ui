import Vuex from 'vuex';
import Vue from 'vue';
import ListingPreview from '@/components/ListingPreview';

//Load Vuex
Vue.use(Vuex);

//Create store
export default new Vuex.Store({
    state: {
        favouritesArray: [],
    },
    
    mutations: { //Syncronous way to update things in our store
        addFavourite (state, id) {
            state.favouritesArray.push(id);
        },
        removeFavourite (state, id) {
            const i = state.favouritesArray.findIndex(item => item == id);
            if(i != -1) state.favouritesArray.splice(i, 1);
        }
    },
    actions: { //Asyncronous 
  
    },

    modules: {
        ListingPreview
    },

    getters: { //Grab information and display it anywhere on app
        getFavArray: (state) => {
            return state.favouritesArray
    },
        getFavourited: (state) => (id) => {
            return state.favouritesArray.includes(id)
    }
}
})

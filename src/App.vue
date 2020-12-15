<template>
  <v-app>
    <v-main>
      <router-view></router-view>
      <NavBar/>
      <OpenHomes/>
      <Listing/>
    </v-main>
  </v-app>
</template>

<script>
import OpenHomes from 'C:/Users/PROLIST/Desktop/Prolist Test/prolist-vuetify-ui/src/components/OpenHomes.vue';
import NavBar from './components/layout/NavBar.vue'
import Listing from './components/listings/Listing.vue'


export default {
  name: 'App',

  components: {
    OpenHomes,
    NavBar,
    Listing
  },

  data: () => ({
    //
  }),
};
</script>

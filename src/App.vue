<template>
  <v-app>
    <v-main>
      <NavBar/>
      <OpenHomes/>
      <Listing/>
    </v-main>
  </v-app>
</template>

<script>
import OpenHomes from './components/OpenHomes.vue';
import NavBar from   './components/layout/NavBar.vue'
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

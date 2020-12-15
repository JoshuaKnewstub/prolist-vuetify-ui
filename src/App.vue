<template>
  <v-app>
    <v-main>
      <NavBar/>
      <OpenHomes/>
      <Listings/>
    </v-main>
  </v-app>
</template>

<script>
import OpenHomes from './components/OpenHomes';
import NavBar from './components/layout/NavBar'
import Listings from './components/listings/Listings'

export default {
  name: 'App',

  components: {
    OpenHomes,
    NavBar,
    Listings
  },

  data: () => ({
    //
  }),
};
</script>

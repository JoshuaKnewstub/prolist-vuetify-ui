<template>
  <v-app>
    <v-main>
      <router-view></router-view>
      <NavBar/>
      <OpenHomes/>
      <ListingPreview/>
    </v-main>
  </v-app>
</template>

<script>
import OpenHomes from './components/OpenHomes.vue';
import NavBar from './components/layout/NavBar.vue'
import ListingPreview from './components/ListingPreview.vue'

export default {
  name: 'App',

  components: {
    OpenHomes,
    NavBar,
    ListingPreview
  },
  data: () => ({    
  }),
};
</script>
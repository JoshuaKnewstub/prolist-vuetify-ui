<template>
  <v-app>
    <v-main>
      <NavBar/>
      <OpenHomes/>
    </v-main>
  </v-app>
</template>

<script>
import OpenHomes from './components/OpenHomes';
import NavBar from './components/layout/NavBar'

export default {
  name: 'App',

  components: {
    OpenHomes,
    NavBar,
  },

  data: () => ({
    //
  }),
};
</script>

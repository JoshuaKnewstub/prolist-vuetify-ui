<template>
  <v-app>
    <v-main>
      <NavBar/>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from './components/layout/NavBar.vue'


export default {
  name: 'App',

  components: {
    NavBar,
  },
  data: () => ({    
  }),
};
</script>
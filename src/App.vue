<template>
  <v-app>
    <v-main>
      <router-view></router-view>
      <NavBar/>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import NavBar from './components/layout/NavBar'


export default {
  name: 'App',

  components: {
    HelloWorld,
    NavBar,
  },

  data: () => ({
    //
  }),
};
</script>

<template>
  <div class="openHomes">
    <h1 class="openHomesHeading">Open Homes</h1>
    <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      height="200px"
    >Image Placeholder</v-img>

    <v-card-title class="address">
      Address of House
    </v-card-title>

    <v-card-subtitle class="suburb">
      Suburb of House
    </v-card-subtitle>

    <v-card-title class="pricing">
      Pricing of House
    </v-card-title>
    <v-card-actions>
      <v-btn
        color="blue lighten-2"
        text
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      
    </v-card-actions>
  </v-card>
  </div>
</template>

<script>
  export default {
    name: 'OpenHomes',

    data: () => ({
      show: false,
    }),
  }
</script>
<style scoped>
  .openHomesHeading {
    text-align: center;
  }
</style>

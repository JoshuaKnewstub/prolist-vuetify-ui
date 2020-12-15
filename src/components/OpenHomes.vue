<template>
  <div class="openHomes">
    <h1 class="openHomesHeading ma-10">Open Homes</h1>
    <v-layout row wrap>
      <v-card class="mx-auto ma-2" max-width="344">
        <v-img height="200px">Image Placeholder</v-img>
        <v-fab-transition>
              <v-btn
                @click="toggleButton"
                color="white"
                dark
                absolute
                top
                right
                fab
              >
                <v-icon id="favouriteToggle" color="blue"></v-icon>
              </v-btn>
            </v-fab-transition>
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
            <v-card-text>0</v-card-text>
            <v-icon>mdi-36px mdi-bed</v-icon>
          <v-spacer></v-spacer>
            <v-card-text>0</v-card-text>
            <v-icon>mdi-36px mdi-shower</v-icon>
          <v-spacer></v-spacer>
            <v-card-text>0</v-card-text>
            <v-icon>mdi-36px mdi-car</v-icon>
        </v-card-actions>
      </v-card>
    </v-layout>
  </div>
</template>

<script>
  export default {
    name: 'openhomes',
    data: () => ({
      show: false,
      clicked: false,
      favouriteToggle: 'mdi-36px mdi-star'
    }),
    methods: {
      toggleButton() {
        this.favouriteToggle = 'mdi-36px mdi-car'
    },
  }}
</script>
<style scoped>
  .openHomesHeading {
    text-align: center;
  }
</style>

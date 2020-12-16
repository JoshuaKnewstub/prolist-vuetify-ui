<template>
  <div class="listingPreview">
    <v-layout row wrap>
      <v-card class="mx-auto ma-2" max-width="344">
        <v-img height="200px" src="https:images.prolist.net.au/PhotoLibrary/Demo_Franchise/Demo_Showcase/DemoKimberly/Preview/12f08e04-6d36-4256-8f2f-d46574ce58ac.jpg"></v-img>
        <!-- response.Image[0].Preview.Url -->
         <!-- "https://images.prolist.net.au/PhotoLibrary/Demo_Franchise/Demo_Showcase/DemoKimberly/Preview/12f08e04-6d36-4256-8f2f-d46574ce58ac.jpg" -->
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
         {{response.Address.MicroAddress}}
        </v-card-title>

        <v-card-subtitle class="suburb"> {{response.Address.HiddenAddress}} </v-card-subtitle>

        <v-card-title class="pricing"> {{response.Price.Price}} </v-card-title>
        <v-card-actions>
          <v-btn color="blue lighten-2" text> Explore </v-btn>
          <v-spacer></v-spacer>
          <v-card-text>{{response.Features.Bedrooms}}</v-card-text>
          <v-icon>mdi-36px mdi-bed</v-icon>
          <v-spacer></v-spacer>
          <v-card-text>{{response.Features.Bathrooms}}</v-card-text>
          <v-icon>mdi-36px mdi-shower</v-icon>
          <v-spacer></v-spacer>
          <v-card-text>{{response.Features.Parking.Total}}</v-card-text>
          <v-icon>mdi-36px mdi-car</v-icon>
        </v-card-actions>
      </v-card>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "openhomes",
  response: null,

  data: () => ({
    show: false,
    clicked: false,
    favouriteToggle: "mdi-36px mdi-star",
  }),
  methods: {
    toggleButton() {
      this.favouriteToggle = "mdi-36px mdi-car";
    },
  },

  mounted() {
    const headers = new Headers();
    headers.append("x-prolist-client-website-id", "1e4f890d-6112-45fe-ba82-c67bc30116a1");
    headers.append("x-prolist-website-id", "f94cda42-f8b6-48e3-850a-aef60b3cfc96");
    headers.append("x-prolist-website-level", "3");

    const request = new Request(
      "https://clientapi.prolist.net.au/api/listings/6b73707d-7703-4003-b2c6-782a1e6d72fc",
      {
        headers,
        mode: "cors",
        cache: "default",
      }
    );
    fetch(request)
    .then((response) => response.json())
    .then((listing) => {
        console.log(listing);
        this.response = listing;
      });
  },
};
</script>


<style scoped>
</style>
<template>
  <div class="listingPreview">
    <v-container>
      <v-layout>
        <v-card id="listingCard" class="ma-2" max-width="344" v-if="response">
          <v-img height="200px" :src="listing.Images[0].Preview.Url"></v-img>
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
            {{ listing.Address.MicroAddress }}
          </v-card-title>

          <v-card-subtitle class="suburb">
            {{ listing.Address.HiddenAddress }}
          </v-card-subtitle>

          <v-card-title class="pricing">
            {{ listing.Price.Price }}
          </v-card-title>

          <div
            v-for="(inspectionTime, index) in listing.InspectionTimes"
            :key="index">
            <v-card-title
              class="opening-time"
              v-if="`${inspectionTime.StartDateInfo.DayOfMonth}${inspectionTime.StartDateInfo.Month}` == date">
              {{ inspectionTime.StartDateInfo.Time.LongName}} - 
              {{ inspectionTime.EndDateInfo.Time.LongName }}
            </v-card-title>
          </div>

          <v-card-actions>
            <router-link to="/ExploreHome">
              <v-btn color="blue lighten-2" text> Explore </v-btn>
            </router-link>
            <v-spacer></v-spacer>
            <v-card-text> {{ listing.Features.Bedrooms }}</v-card-text>
            <v-icon>mdi-36px mdi-bed</v-icon>
            <v-spacer></v-spacer>
            <v-card-text>{{ listing.Features.Bathrooms }}</v-card-text>
            <v-icon>mdi-36px mdi-shower</v-icon>
            <v-spacer></v-spacer>
            <v-card-text>{{ listing.Features.Parking.Total }}</v-card-text>
            <v-icon>mdi-36px mdi-car</v-icon>
          </v-card-actions>
        </v-card>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "openhomes",
  response: null,
  props: {
    listing: Object,
    date: String,
  },

  data: () => ({
    show: false,
    clicked: false,
    favouriteToggle: "mdi-36px mdi-star",
    response: null,
  }),
  methods: {
    toggleButton() {
      this.favouriteToggle = "mdi-36px mdi-approval";
    },
  },

  mounted() {
    const headers = new Headers();
    headers.append(
      "x-prolist-client-website-id",
      "1e4f890d-6112-45fe-ba82-c67bc30116a1"
    );
    headers.append(
      "x-prolist-website-id",
      "f94cda42-f8b6-48e3-850a-aef60b3cfc96"
    );
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
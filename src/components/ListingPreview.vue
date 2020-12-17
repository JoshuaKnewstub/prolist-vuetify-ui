<template>
  <div class="listingPreview">
    <v-container>
      <v-layout>
        <v-card id="listingCard" class="ma-2" max-width="344" v-if="listing">
          <v-img height="200px" :src="listing.Images[0].Preview.Url"></v-img>
          <v-fab-transition>
            <v-btn
              @click="onFavouriteClick()" 
              color="white"
              dark
              absolute
              top
              right
              fab
            >
              <v-icon id="favouriteToggle" color="blue" v-if="favourite"
                >mdi-36px mdi-heart</v-icon
              >
              <v-icon id="favouriteToggle" color="blue" v-else
                >mdi-36px mdi-heart-outline</v-icon
              >
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
            :key="index"
          >
            <v-card-title
              class="opening-time blue--text"
              v-if="
                `${inspectionTime.StartDateInfo.DayOfMonth}${inspectionTime.StartDateInfo.Month}` ==
                date
              "
              color="blue lighten-2"
            >
              {{ inspectionTime.StartDateInfo.Time.LongName }} -
              {{ inspectionTime.EndDateInfo.Time.LongName }}
            </v-card-title>
          </div>

          <v-card-actions>
            <router-link :to="'/ExploreHome/' + listing.Id">
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
    favourite: false,
  }),

  methods: {
    toggleButton() {
      this.favouriteToggle = "mdi-36px mdi-approval";
    },
    onFavouriteClick() {
        this.favourite = !this.favourite;
        var favsArray = [];
        if(localStorage.getItem("favs") != null){
            favsArray = localStorage.getItem("favs");
            //I think this is working besides this push throwing errors
            favsArray.push(this.listing.Id);
            localStorage.setItem("favs", favsArray)
            console.log(localStorage.getItem("favs"))
        } else {
            console.log("nothing");
            favsArray = [this.listing.Id]
            localStorage.setItem("favs", favsArray)
        }
    }
  },

  mounted() {
    
  },
};
</script>


<style scoped>
</style>
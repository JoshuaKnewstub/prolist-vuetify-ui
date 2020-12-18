<template>
  <div class="favourites">
    <h1 class="favourites-heading ma-10">Favourites</h1>
    <h2 v-if="!favsListings.length">No favourites yet</h2>
        <v-container grid-list-sm fill-height v-else>
          <v-layout wrap row justify-center>
            <div v-for="listing in favsListings" :key="listing.Id">
              <ListingPreview
                :listing="listing"
              />
            </div>
          </v-layout>
        </v-container>
      </div>
</template>

<script>
import ListingPreview from "./ListingPreview.vue"

export default {
  name: "favourites",

  components: { ListingPreview,},
  data: () => ({
    favsListings: []
  }),

  mounted() {
     var favsArray = JSON.parse(localStorage.getItem("favs")) || [];

    const headers = new Headers();
    headers.append("x-prolist-client-website-id","1e4f890d-6112-45fe-ba82-c67bc30116a1");
    headers.append("x-prolist-website-id","f94cda42-f8b6-48e3-850a-aef60b3cfc96");
    headers.append("x-prolist-website-level", "3");

    for (var i = 0; i < favsArray.length; i++) {

      const request = new Request(
      "https://clientapi.prolist.net.au/api/listings/" + favsArray[i],
      {
        headers,
        mode: "cors",
        cache: "default",
      }
    );
    fetch(request)
      .then((response) => response.json())
      .then((listing) => {
        this.response = this.favsListings.push(listing);
      });
    }
  },
};
</script>
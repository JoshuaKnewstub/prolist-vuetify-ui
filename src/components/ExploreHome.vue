<template>
  <div>
    <v-carousel>
        <v-carousel-item
        v-for="(image, i) in listing.Images"
        :key="i"
        :src="image.Preview.Url"
        contain
        class="grey darken-4"
        reverse-transition="fade-transition"
        transition="fade-transition">
        </v-carousel-item>
    </v-carousel>
    <h1 v-if="listing"> {{ listing.Address.MicroAddress }}</h1>
  </div>
</template>

<script>
export default {
    name: "ExploreHomes",

    data: () => ({
        listing: null,
    }),

    mounted: function(){
        const listingId = this.$route.params.listingid;
        console.log(listingId);

    const headers = new Headers();
    headers.append("x-prolist-client-website-id", "1e4f890d-6112-45fe-ba82-c67bc30116a1");
    headers.append("x-prolist-website-id", "f94cda42-f8b6-48e3-850a-aef60b3cfc96");
    headers.append("x-prolist-website-level", "3");

    const request = new Request(
      "https://clientapi.prolist.net.au/api/listings/" + listingId,
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
        this.listing = listing;
      });
  },
    
}

</script>

<style scoped>
</style>
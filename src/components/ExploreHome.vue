<template>
  <div>
    <h1>Test</h1>
    <h1 v-if="response"> {{ listing }}</h1>
  </div>
</template>

<script>
export default {
    responce: null,

    data: () => ({
        response: null,
    }),

    mounted:function(){
        const listingId = this.$route.params.listingid
        console.log(listingId)

        const headers = new Headers();
    headers.append("x-prolist-client-website-id","1e4f890d-6112-45fe-ba82-c67bc30116a1");
    headers.append("x-prolist-website-id","f94cda42-f8b6-48e3-850a-aef60b3cfc96");
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
        this.response = listing;
      });
  },
    
}

</script>

<style scoped>
</style>
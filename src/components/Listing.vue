<template>
  <div id="listing">
    <p>{{ response.Address.StreetNumber }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      response: null,
    };
  },

  mounted() {
    const headers = new Headers();
    headers.append("x-prolist-client-website-id", "1e4f890d-6112-45fe-ba82-c67bc30116a1")
    headers.append("x-prolist-website-id", "f94cda42-f8b6-48e3-850a-aef60b3cfc96")
    headers.append("x-prolist-website-level", "3")
 
    const request = new Request(
      "https://clientapi.prolist.net.au/api/listings/6b73707d-7703-4003-b2c6-782a1e6d72fc",
      {
        headers,
        mode: "cors",
        cache: "default",
      }
    );
    fetch(request).then((response) => response.json()).then(listing => {
      console.log(listing)
      this.response = listing
    });
  },

  methods: {},
};
</script>
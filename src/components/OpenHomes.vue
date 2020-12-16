<template>
  <div class="openHomes">
    <h1 class="openHomesHeading ma-10">Open Homes</h1>
    <ListingPreview/>
  </div>
</template>

<script>
import ListingPreview from './ListingPreview.vue'
export default {
  name: "openHomes",
  components: {
    ListingPreview,
  },
  data: () => ({}),
};
</script>

<style scoped>
.openHomesHeading {
  text-align: center;
}
</style>

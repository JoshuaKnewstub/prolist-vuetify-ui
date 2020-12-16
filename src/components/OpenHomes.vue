<template>
  <div class="openHomes">
    <NavBarOpenHomes/>
    <h1 class="openHomesHeading ma-10">Open Homes</h1>
    
    <ListingPreview/>
  </div>
</template>

<script>
import ListingPreview from './ListingPreview.vue'
import NavBarOpenHomes from 'C:/Users/PROLIST/Desktop/Bluetooth App/prolist-vuetify-ui/src/components/layout/NavBarOpenHomes.vue'

export default {
  name: "openHomes",
  components: {
    ListingPreview,
    NavBarOpenHomes,
  },
  data: () => ({}),
};
</script>

<style scoped>
.openHomesHeading {
  text-align: center;
}
</style>

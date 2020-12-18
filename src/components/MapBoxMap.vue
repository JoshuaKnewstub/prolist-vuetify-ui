<template>
  <MglMap
    :accessToken="mapboxAccessToken"
    :mapStyle.sync="mapStyle"
    :center="coordinates"
  >
    <MglMarker
    v-for= "coord in mglCoords"
    :key = "coord"
    :coordinates = "coord">

    </MglMarker>
  </MglMap>
</template>

<script>
import { MglMap, MglMarker } from "vue-mapbox";

export default {
  components: {
    MglMap,
    MglMarker
  },
  props: {
      coords: Array
  } ,
  computed: {
      mglCoords: function () {
          return this.coords.map( coord => [coord.Lon, coord.Lat])
      }
  },
  data() {
    return {
      mapboxAccessToken: "pk.eyJ1IjoiamFtZXNyYXltZXIiLCJhIjoiY2tpc2hjaTkxMDR4YjJ0bmt3bzNlYndmeiJ9.Xo9pyic-aadKYfvaagJ5DA",
      mapStyle: "mapbox://styles/mapbox/basic-v10",
    };
  }
};
</script>
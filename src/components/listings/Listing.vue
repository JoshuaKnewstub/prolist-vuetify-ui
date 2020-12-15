<template>
    <div id="listing">
        <ul>
            <li v-for="data in propertyData" :key="data.id">
                {{data.PropertyType}}
            </li>
        </ul>
    </div>
</template>

<script>
import listingsJson from "./components/listings/Listings.JSON";

export default {
  data() {
    return {
      propertyData: listingsJson,
    };
  },
};
</script>
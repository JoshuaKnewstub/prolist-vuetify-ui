









<template>
  <div class="openHomes">
    <h1 class="openHomesHeading ma-10">Open Homes</h1>

    <div v-if="response">
      <div v-for="openingDates in response.Days" :key="openingDates.Date.Value">
        <h1 class = "date">{{ `${openingDates.Date.DayName.ShortName} ${openingDates.Date.DayOfMonth} ${openingDates.Date.MonthName.ShortName}` }}</h1>
        <v-layout wrap row>
          <div v-for="listing in openingDates.Listings" :key="listing.Id">
            <ListingPreview :listing="listing" />
          </div>
        </v-layout>
      </div>
    </div>
  </div>
</template>

<script>
import ListingPreview from "./ListingPreview.vue";

export default {
  PageTitle: "openHomes",
  response: null,

  components: {
    ListingPreview,
  },

  data: () => ({
    response: null,
    openHomes: [],
  }),

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
    headers.append("content-type", "application/json");

    const body = {
      SearchLevel: 3,
      SearchGuid: "f94cda42-f8b6-48e3-850a-aef60b3cfc96",
      SearchGuids: [],
      Page: 1,
      PageSize: 10,
      ExcludeConjunctionalListings: false,
      IsHighlightListing: false,
      IsFeatured: false,
      IsPROListFeatured: false,
      HaveInspections: true,
      PropertyId: "",
      Estate: "",
      Categories: [],
      Statuses: [0, 1],
      PropertyTypes: [],
      PropertyCategories: [],
      PropertySubCategories: [],
      MethodsOfSale: [],
      AddressString: "",
      LotNumber: "",
      UnitNumber: "",
      StreetNumber: "",
      Suburbs: [],
      BoundsNorth: "",
      BoundsEast: "",
      BoundsSouth: "",
      BoundsWest: "",
      OrderByStatements: [],
      MinBedrooms: "",
      MinBathrooms: "",
      MinParking: "",
      MinLandArea: "",
      MaxLandArea: "",
      MinPrice: "",
      MaxPrice: "",
      MinSoldPrice: "",
      MaxSoldPrice: "",
    };

    const request = new Request(
      "https://clientapi.prolist.net.au/api/openhomes/",
      {
        method: "POST",
        headers,
        mode: "cors",
        cache: "default",
        body: JSON.stringify(body),
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
.openHomesHeading {
  text-align: center;
}
.date {
  text-align: center;
}
</style>

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
    <v-container>
        <v-row no-gutters>
            <v-col cols="8">
                <v-card
                class="pa-2"
                outlined
                tile
                >
                <v-row>
                    <v-col coles="6">
                        <h1 v-if="listing" align="center" class="address"> {{ listing.Address.MicroAddress }}</h1>
                        <v-card-subtitle id="suburb" align="center">
                            {{ listing.Address.HiddenAddress }}
                        </v-card-subtitle>
                        <h1 v-if="listing" align="center"  class="pricing"> {{ listing.Price.Price }}</h1>
                    </v-col>
                    <v-col cols="2" >
                        <v-icon>mdi-36px mdi-bed</v-icon>
                        <v-card-text> {{ listing.Features.Bedrooms }}</v-card-text>
                    </v-col>
                    <v-col cols="2" >
                        <v-icon>mdi-36px mdi-shower</v-icon>
                        <v-card-text> {{ listing.Features.Bathrooms }}</v-card-text>
                    </v-col>
                    <v-col cols="2" >
                        <v-icon>mdi-36px mdi-car</v-icon>
                        <v-card-text> {{ listing.Features.Parking.Total }}</v-card-text>
                    </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-row>
                    <v-col>
                        <h1 class="pa-2" id="descriptionHeading">Description</h1>
                        <h2 class="pa-2"> {{ listing.Header }}</h2>
                        <v-card-text class="pa-2" v-html="listing.HtmlWebDescription"></v-card-text>
                    </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-row>
                    <v-col>
                        <h1 class="pa-2" id="featuresHeading">Features</h1>
                        <v-list disabled>
                            <v-list-item-group
                            v-model="selectedItem"
                            color="primary"
                            >
                        <v-list-item
                        v-for="(feature, i) in listing.Features.FeatureList"
                        :key="i"
                        >
                        <v-list-item-content>
                            <v-list-item-title v-text="feature"></v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>
                        </v-list-item-group>
                    </v-list>
                    </v-col>
                </v-row>
                </v-card>
            </v-col>
            <v-col cols="4">
                <v-card
                class="pa-4"
                outlined
                tile
                >
                <v-img height="350px" :src="listing.Agents[0].Photo.Preview.Url" contain></v-img>
                <v-card-text id="agentName" align="center">{{listing.Agents[0].FullName}}</v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
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
    #suburb {
        font-size: 100%;
    }
    #agentName {
        font-size: 150%;
        color: black;
    }
    #price {
        width: fit-content;
    }
</style>
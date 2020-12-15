<template>
  <nav>
    <v-toolbar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        {{ pageTitle }}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat color="gray">
        <span>Search</span>
        <v-icon right>mdi-magnify</v-icon>
      </v-btn>
      
      <v-select
        class="select"
        v-model="selectSortBy"
        :items="sortBy2"
        label="Sort By"
        append-icon="mdi-sort"
        outlined
        hide-selected
        dense
        hide-details
        autowidth
      ></v-select>
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer">
      <v-list nav dense>
        <v-list-item-group v-model="group">
          <router-link to="/OpenHomes">
          <v-list-item>
            <v-list-item-icon
              ><v-icon>mdi-36px mdi-home-group</v-icon></v-list-item-icon
            >
            <v-list-item-title>Open Houses</v-list-item-title>
          </v-list-item>
          </router-link>


<router-link to="/favourites">
          <v-list-item>
            <v-list-item-icon
              ><v-icon>mdi-36px mdi-home-heart</v-icon></v-list-item-icon
            >
            <v-list-item-title>Favourites</v-list-item-title>
          </v-list-item>
          </router-link>

<router-link to="/visited">
          <v-list-item>
            <v-list-item-icon
              ><v-icon>mdi-36px mdi-home-map-marker</v-icon></v-list-item-icon
            >
            <v-list-item-title>Visited</v-list-item-title>
          </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      pageTitle: "Open Houses",
      sortBy: [
        { title: "Distance", icon: "mdi-map-marker" },
        { title: "Cheapest", icon: "mdi-currency-usd-off" },
        { title: "Most Expensive", icon: "mdi-currency-usd" },
        { title: "Agent", icon: "mdi-account-tie" },
      ],
      sortBy2: ["Distance", "Cheapest", "Most Expensive", "Agent"],
    };
  },
  methods() {},
};
</script>

<style scoped>
.select {
  max-width: 180px;
}
</style>
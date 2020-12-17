<template>
  <nav app>
    <v-toolbar dark app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        {{ pageTitle }}
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-text-field
        class="searchBar ma-1"
        v-model="search"
        placeholder="Search..."
        clearable
        solo
        single-line
        dense
        prepend-inner-icon="mdi-magnify"
      ></v-text-field>
      <v-select
        class="select"
        v-model="selectSortBy"
        :items="sortBy"
        label="Sort By"
        append-icon="mdi-sort"
        outlined
        hide-selected
        dense
        hide-details
        autowidth
      ></v-select>
    </v-toolbar>

    <v-navigation-drawer dark app v-model="drawer">
      <v-list nav dense>
        <v-list-item-group v-model="group">
          <router-link to="/">
            <v-list-item v-on:click="pageTitle = 'Open Homes'">
              <v-list-item-icon
                ><v-icon>mdi-36px mdi-home-group</v-icon></v-list-item-icon
              >
              <v-list-item-title>Open Houses</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/favourites">
            <v-list-item v-on:click="pageTitle = 'Favourites'">
              <v-list-item-icon
                ><v-icon>mdi-36px mdi-home-heart</v-icon></v-list-item-icon
              >
              <v-list-item-title>Favourites</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/visited">
            <v-list-item v-on:click="pageTitle = 'Visited'">
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
      pageTitle: "Open Homes",
      sortBy: ["Distance", "Cheapest", "Most Expensive", "Agent"],
    };
  },
};
</script>

<style scoped>
.select {
  max-width: 180px;
}
.searchBar {
  max-width: 300px;
  height: 70%;
}

a {  text-decoration: none;}
</style>
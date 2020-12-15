<template>
  <div id="listing">
    {{ data }}
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => (this.data = response));
  },
};
</script>
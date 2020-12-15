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

export default {
  data() {
    return {
    };
  },
};
</script>
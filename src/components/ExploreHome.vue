<template>
    <div>
        <h1>Test</h1>
        
    </div>
</template>

<script>
export default {
    mounted:function(){
        console.log(this.$route.params.listingid)
    }

}
</script>

<style scoped>

</style>
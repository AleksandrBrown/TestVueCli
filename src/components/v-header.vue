<template>
    <div class="v-header">
        <h2>Contacts Catalog</h2>
    </div>
</template>
<script>
export default {
    name: 'v-header'
}
</script>
<style lang="scss">
    .v-header{
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 20vh;
        background: #222222;
        box-shadow: 0 10px 40px #000;
        color: #ffffff;
        h2{
            position: relative;
            top: 20%;
            left: 10%;
        }
    }
</style>
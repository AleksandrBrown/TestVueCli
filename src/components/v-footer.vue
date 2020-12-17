<template>
    <div class="v-footer">
        <h3>&copy; made by Alex</h3>
    </div>
</template>
<script>
export default {
    name: 'v-footer'
}
</script>
<style lang="scss">
    .v-footer{
        display: block;
        width: 100%;
        height: 10vh;
        background: #3b3b3b;
        h3{
            position: relative;
            top: 20%;
            left: 10%;
            color: #fff;
        }
    }
</style>
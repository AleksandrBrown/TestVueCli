<template>
    <div class="v-catalog-item">
        <div><h3> {{ profile.id }} </h3></div>
        <div><router-link :to="{name: 'info', params: {profileInfo: this.profile}}"><h2> {{ profile.name }} </h2></router-link></div>
        <div><button @click="$emit('remove-contact', profile.id)">&times;</button></div>
        <v-contact-info 
            v-if="false"
            :sendObjct = "profile"
        />
    </div>
</template>
<script>
export default {
    name: 'v-catalog-item',
    data() {
        return {
        }
    },
    props: ['profile'],
    components: {
       
    }
}
</script>
<style lang="scss">
    .v-catalog-item{
        position: relative;
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        margin: auto;
        width: 100%;
        height: 8vh;
        border:2px solid rgb(80, 80, 80);
        div{
            text-align: center;
            overflow: hidden;
            h3,h2,button{
                position: relative;
                top: 3vh;
            }
            button{
                cursor: pointer;
                width: 30px;
                height: 30px;
                border: none;
                border-radius: 15px;
                outline: none;
                background: green;
                color: #fff;
                font-size: 1em;
                &:active{
                    background: red;
                    -webkit-transform: translateY(5px);
                    transform: translateY(5px);
                }
            }
            a{
                text-decoration: none;
                color: rgb(80, 80, 80);
                -webkit-transition: .5s;
                transition: .5s;
                &:hover{
                     color: rgb(36, 91, 128);
                     text-shadow: 0 0 20px rgb(130, 203, 248);
                }
            }
            
        }
    }
</style>
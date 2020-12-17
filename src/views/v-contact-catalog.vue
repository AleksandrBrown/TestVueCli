<template>
    <div class="v-contact-catalog">
        <div class="v-contact-catalog__add">
            <button @click="addContact"> + </button>
        </div>
        <v-contact-add 
                v-if="addCont == true"
                :prof="profiles"
                @addNewContact="getContact"
                @allSuccessful="allSuccessful"
        />
        <div class="v-contact-catalog__List">
            <div 
                class="v-contact-catalog__List_wrapper"
                v-if="profiles.length"
            >
                <v-catalog-item 
                v-for="profile of profiles"
                :key="profile.id"
                :profile="profile"
                @remove-contact="removeContact"
            />
            </div>
            <p v-else>Книга контактов пуста!</p>
        </div>
    </div>
</template>
<script>
import vCatalogItem from '@/components/v-catalog-item'
import vContactAdd from '../components/v-contact-add.vue'
export default {
    name: 'v-contact-catalog',
    data() {
        return {
            profiles: [],
            addCont: false
        }
    },
    methods: {
        removeContact(id) {
            console.log(id)
            let conf = confirm('вы уверены?')
            if(conf == true) {this.profiles = this.profiles.filter(prof => prof.id !== id)}
        },
        addContact() {
            this.addCont = ! this.addCont
        },
        getContact(profile) {
            this.profiles.push(profile)
            console.log(this.profiles)
        },
        allSuccessful(bool){
            this.addCont = bool
        }
    },
    components: {
        vCatalogItem,
        vContactAdd
    },
    mounted() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => this.profiles = data)
    }
}
</script>
<style lang="scss">
    .v-contact-catalog{
        position: relative;
        top: 0;
        margin: 0 auto;
        width: 30vw;
        height: 70vh;
        background: #fff;
        box-shadow: 0 0 30px #000;
        overflow-y: scroll;
        &__List{
            position: relative;
            top: 0;
            float: right;
            right: 0;
            width: 26vw;
            height: 70vh;
            background: #fff;
            box-shadow: 0 0 30px #000;
            overflow-y: scroll;
            &::-webkit-scrollbar{
            display: none;
            }
            p{
                position: relative;
                top: 2vh;
                margin: 0 30%;
                font-weight: 700;

            }
        }
        &::-webkit-scrollbar{
            display: none;
        }
        &__add{
            position: absolute;
            left: 0vw;
            width: 5vw;
            height: 8vh;
            background: #fff;
            button{
                position: absolute;
                top:2vh;
                left: 1vw;
                width: 40px;
                height: 40px;
                border:none;
                border-radius: 15px;
                outline:none;
                background: #1e6d00;
                font-size: 2em;
                color:#fff;
                box-shadow: 0 0 10px  #1e6d00;
                -webkit-transition: .5s;
                transition: .5s;
                &:hover{
                    background: #8b1313;
                    box-shadow: 0 0 10px#8b1313;
                    -webkit-transform: rotate(45deg);
                    transform: rotate(45deg);
                }
                &:active{
                    background: #135f8b;
                    box-shadow: 0 0 30px#135f8b;
                    -webkit-transform: translateY(5px);
                    transform: translateY(5px);
                }
            }
        }
    }
</style>
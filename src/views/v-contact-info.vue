<template>
    <div class="v-contact-info">
        <div class="v-contact-info__back_btn">
            <router-link :to="{name: 'home'}"> &lArr; </router-link>
        </div>
        <div class="v-contact-info__profile_information">
            <h2> {{ profile.name }} </h2>
            <img src="https://via.placeholder.com/100x150" alt="изображение профиля">
            <ul>
                <li> Phone : {{ profile.phone }} </li>
                <li> Mail : {{ profile.email }} </li>
                <v-add-field 
                    v-for="field of fields" 
                    :key="field.id" 
                    :field="field"
                    @deleteField="deleteField"
                    :editfunc = 'showEditor'
                    @field_1_value = 'field_1_value'
                    @field_2_value = 'field_2_value'
                />
            </ul>
        </div>
        <div class="v-contact-info__settings">
            <button @click="addField">Добавить</button>
            <button @click="editField">Редактировать</button>
            <button @click="showEditor = false" v-if="showEditor">Сохранить</button>
        </div>
    </div>
</template>
<script>
import vAddField from '@/components/v-add-field'
export default {
    name: 'v-contact-info',
    data() {
        return {
            fields: [],
            count: 0,
            profile: this.profileInfo,
            showEditor: false,
            stroka : ''
        }
    },
    methods:{
        addField() {
            let objct = {
                field_1: '',
                field_2: '',
                id: this.count
            }
            this.fields.push(objct)
            this.count++
            console.log(this.fields);
        },
        editField() {
            this.showEditor = true
        },
        deleteField(id) {
            let conf = confirm('вы уверены?')
            if(conf == true) {this.fields = this.fields.filter(field => field.id !== id)}
        },
        field_1_value(string,id) {
            let result = this.fields.filter(field => field.id == id)
            result[0].field_1 = string
        },
        field_2_value(string,id) {
            let result = this.fields.filter(field => field.id == id)
            result[0].field_2 = string
        }
    },
    props: ['profileInfo'],
    components:{vAddField}
}
</script>
<style lang="scss">
    .v-contact-info{
        position: relative;
        top: 0;
        margin: 0 auto;
        width: 30vw;
        height: 70vh;
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        background: #fff;
        box-shadow: 0 0 30px #000;
        overflow-y: scroll;
        &::-webkit-scrollbar{
            display: none;
        }
        &__back_btn{
            position: relative;
            top: 2vh;
            left: 2vw;
            color: red;
            width: 2vw;
            height: 4vh;
            overflow: hidden;
            a{
                color: red;
                font-size: 2em;
                text-decoration: none;
                &:hover{
                    color:rgb(75, 120, 255);
                }
            }
        }
        &__profile_information{
            position: relative;
            top: 3vh;
            text-align: center;
            height: 80vh;
            img{
                position: relative;
                top: 2vh;
            }
            ul{
                position: relative;
                top: 6vh;
                li{
                    font-size: 1em;
                    margin: 0 0 2vh 0;
                    input{
                        width: 60px;
                    }
                }
            }
            &::-webkit-scrollbar{
            display: none;
        }
        }
        &__settings{
            position: relative;
            top: 3.5vh;
            left: 0vw;
            float:right;
            button{
                margin: 0 0 2vh 0;
                padding: 4px;
                width: 6vw;
                display: block;
                border:none;
                outline: none;
                border-radius: 5px;
                color: #fff;
                font-size: 1em;
                &:nth-child(1){
                    background: #1e6d00;
                }
                &:nth-child(2){
                    background: #8b1313;
                }
                &:nth-child(3){
                    background: #291e42;
                }
                &:nth-child(4){
                    background: #135f8b;
                }
                &:nth-child(1):active, 
                &:nth-child(2):active,
                &:nth-child(3):active,
                &:nth-child(4):active{
                    -webkit-transform: translateY(5px);
                    transform: translateY(5px);
                }
            }
        }
    }
</style>
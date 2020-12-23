// Шаблон для нового поля контакта
<template>
    <div class="v-add-field">
        <div class="v-add-field__txt_div">
                <div class="v-add-field__input_top"> <span>{{ field_1 }}</span> : <span> {{ field_2 }}</span> </div>
                <div v-if="editfunc" class="v-add-field__input_bottom">
                    <input 
                        type="text" 
                        v-model="field_1" 
                        class="v-add-field__input_bottom_el" 
                        maxlength="8"> 
                    <input 
                        type="text" 
                        v-model="field_2" 
                        class="v-add-field__input_bottom_el" 
                        maxlength="11">
                </div>
        </div>
       <div class="v-add-field__btn_div"> 
            <button @click="deleteField" class="delete_btn" title="Удалить поле" v-if="editfunc"></button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'v-add-field',
    data(){
        return{
            field_1: '',
            field_2: '',
            newV_1:'',
            newV_2: '',
            saveField: true
        }
    },
    methods: {
        deleteField() {
            this.$emit('deleteField', this.field.id) //удаление поля
        }
    },
    watch: {
        field_1(){
            this.newV_1 = this.field_1
            this.$emit('field_1_value',this.newV_1, this.field.id) //вывод вводимых значений в поле
        },
        field_2(){
            this.newV_2 = this.field_2
            this.$emit('field_2_value',this.newV_2, this.field.id) //вывод вводимых значений в поле
            
        }
    },
    props: ['field','editfunc']
}
</script>
<style lang="scss">
    .v-add-field{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 20vw;
        height: 8vh;
        text-align: center;
        &__txt_div{
            position: relative;
            width: 100%;
            height: 8vh;
            display: flex;
            flex-direction: column;
            left: 1vw;
            overflow: hidden;
            font-size: 1em;
            &__input_top{
                position: relative;
                display: grid;
                grid-template-rows: 1fr 1fr;
                span{
                    position: relative;       
                    width:50%;
                }
            }
            &__input_bottom{
                    position: relative;
                    display: inline;
                    input{
                        width: 20px!important;
                    }
            }
        }
        &__btn_div{
            position: relative;
            width: 2vw;
            overflow-y: hidden;
            .delete_btn{
                width: 25px;
                height: 25px;
                border:none;
                outline: none;
                background: url('../assets/delete.svg');
                background-size: cover;
                margin: 0 0 1vh 0;
                &:active{
                    -webkit-transform: translateY(5px);
                    transform: translateY(5px);
                }
            }
        }
    }
</style>
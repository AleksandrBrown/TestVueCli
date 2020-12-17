<template>
    <div class="v-contact-add">
        <h2>Добавить новый контакт</h2>
        <ul>
            <li><input type="text" placeholder="Name" v-model="Name"></li>
            <li><input type="tel" placeholder="Phone" v-model="Phone"></li>
        </ul>
        <button @click.prevent="submit"></button>
    </div>
</template>
<script>
export default {
    name: 'v-contact-add',
    data() {
        return {
            Name: '',
            Phone: ''
        }
    },
    props: ['prof'],
    methods: {
        submit(){
            if((this.Name && this.Phone).trim()) {
                const newProfile = {
                    id: this.prof.length + 1,
                    name: this.Name,
                    phone: this.Phone
                }
                this.$emit('addNewContact', newProfile)
                this.$emit('allSuccessful', false)
            }
        }
    }
}
</script>
<style lang="scss">
    .v-contact-add{
        position: relative;
        left: 15%;
        width: 85%;
        height: 100%;
        background: rgb(66, 66, 66);
        color: #fff;
        text-align: center;
        h2{
            position: relative;
            top: 4vh;
        }
        ul{
            position: relative;
            top: 8vh;
            li{ 
                list-style: none;
                margin: 0 0 20px 0;
                input{
                    height: 2vh;
                    border: none;
                    outline: none;
                    border-radius: 5px;
                }
            }
        }
        button{
            position: relative;
            width: 32px;
            height: 32px;
            top: 10vh;
            border:none;
            border-radius: 15px;
            outline: none;
            background: url('../assets/check.png');
            background-color:#fff;
            background-size:contain;
            background-repeat: no-repeat;
            box-shadow: 0 0 10px #23aeff;
            &:active{
                -webkit-transform: translateY(5px);
                transform: translateY(5px);
                box-shadow: 0 0 20px #23ff98;
            }
        }
    }
</style>
//Главный контейнер
<template>
  <div id="app">
    <v-header />
    <router-view />
    <v-footer />
  </div>
</template>

<script>
import vHeader from '@/components/v-header'
import vFooter from './components/v-footer.vue'
export default {
  components: {
    vHeader,
    vFooter
  }
}
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

@media (max-width:1800px) and (min-width: 1110px){
  .v-contact-catalog {
    width: 50vw!important;
    &__List{
      width: 42vw!important;
    }
  }
  .v-contact-info {
    width: 45vw!important;
  }
  .v-contact-info__settings {
    button {
      font-size: .7em;
    }
  }
  .v-contact-info__settings button {
    width: 8vw!important;
  }
  .v-add-field__txt_div {left: 3vw!important;}
}
@media (max-width:1100px) and (min-width: 762px){
  .v-contact-catalog {
    width: 50vw!important;
    &__List{
      width: 42vw!important;
    }
    &__add{
      width: 14vw!important;
      height: 14vh!important;
    }
  }
  .v-contact-info {
    width: 45vw!important;
  }
  .v-contact-info__settings {
    button {
      font-size: .7em;
    }
  }
  .v-contact-info__settings button {
    width: 10vw!important;
    font-size: .8em!important;
  }
  .v-catalog-item div h2{
    font-size: 1em;
  }
  .v-add-field__txt_div {
    width: 14vw!important;
    height: auto;
    left: 4vw!important;
    }
}
@media (max-width:760px) and (min-width: 300px){
  .v-contact-catalog {
    width: 100vw!important;
    &__add{
      width: 14vw!important;
      height: 14vh!important;
    }
    &__List{
      width: 80vw!important;
    }
  }
  .v-contact-info {
    width: 100vw!important;
  }
  .v-contact-info__settings {
    button {
      width: 16vw;
      font-size: .5 em;
    }
  }
  .v-contact-info__settings button {
    width: 15vw!important;
    font-size: .2em!important;
  }
  .v-contact-info__back_btn {
    width: 5vw!important;
    height: 6vh!important;
  }
  .v-catalog-item div h2{
    font-size: 1.5em;
  }
  .v-add-field {
    width: 26vw!important;
    height: 11vh!important;
  }
  .v-add-field__btn_div {
    width: 4vw!important;
  }
  .v-add-field {
    left: 12vw!important;
  }
}
</style>

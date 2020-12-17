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
}
</style>

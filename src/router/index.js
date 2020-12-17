import Vue from 'vue'
import VueRouter from 'vue-router'
import vContactCatalog from '@/views/v-contact-catalog'
import vCatalogItem from '@/components/v-catalog-item'
import vContactInfo from '@/views/v-contact-info'

Vue.use(VueRouter)
const routes = [
  {
    name: 'home',
    path: '/',
    component: vContactCatalog,
    props: true
  },
  {
    path: '/item',
    component: vCatalogItem,
    props: true
  },
  {
    name: 'info',
    path: '/item/contact-info',
    component: vContactInfo,
    props: true

  }
]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import Router from 'vue-router'

import ItemList from '@/components/ItemList'
import Panel from '@/components/Panel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/item',
      name: 'itemList',
      component: ItemList
    },
    {
      path: '/',
      name: 'root',
      component: Panel
    }
  ]
})

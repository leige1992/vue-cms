import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/bottom/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
    	path: "/home",
    	component: Home,
    	name: "home"	
    }
  ]
})

import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
// const _import_ = file => () => import('./components/' + file + '.vue');

Vue.config.productionTip = false
Vue.use(VueRouter)

const Test = () => import('./components/test.vue')
// const HelloWorld = () => import('./components/HelloWorld.vue')

const routes = [
  { path: '/test', component: Test},
  // { path: '/hello', component: HelloWorld}
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

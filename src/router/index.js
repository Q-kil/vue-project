import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
const routes = [
  {
    path: '',
    component: require('../components/HelloWorld.vue').default
  },
  {
    path: '/home',
    component: require('../components/Home.vue').default
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/m/',
  routes
});

export default router;
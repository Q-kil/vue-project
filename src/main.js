import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    name: 'x'
  },
  mutations: {
    increment(state){
      state.count++
    }
  }
})

// store.commit('increment');
console.log('stote.state', store.state);


new Vue({
  render: h => h(App),
  store: store
}).$mount('#app')

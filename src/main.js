import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

console.log('innerHeight', window.innerHeight);
console.log('clientHeight', document.documentElement.clientHeight);

import Vue from 'vue'
import App from './App.vue'
import i18n from './i18n'
// import VueI18n from 'vue-i18n'

// Vue.config.productionTip = false

// Vue.use(VueI18n)
// const messages = {
//   en: {
//     name: 'Name'
//   },
//   cn: {
//     name: '名字'
//   }
// }

// const i18n = new VueI18n({
//   locale: 'en',
//   messages
// })

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')

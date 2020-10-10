import Vue from 'vue'
import App from './App.vue'
import { defineCustomElements as defineIonPhaser } from '@ion-phaser/core/loader'

Vue.config.productionTip = false

defineIonPhaser(window)

new Vue({
  render: h => h(App)
}).$mount('#app')


// 增加cordova文件
if (window.location.protocol === 'file:') {
  let cordovaScript = document.createElement('script')
  cordovaScript.setAttribute('type', 'text/javascript')
  cordovaScript.setAttribute('src', 'cordova.js')
  document.body.appendChild(cordovaScript)
}

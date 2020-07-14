import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'cn',
  messages: {
    'en': require('./en.json'),
    'cn': require('./cn.json')
  }
})

export default i18n

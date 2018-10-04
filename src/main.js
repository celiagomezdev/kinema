import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//eslint-disable-next-line
// export const serverBus = new Vue()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

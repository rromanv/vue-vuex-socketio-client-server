import Vue from 'vue'
import VueSocketio from 'vue-socket.io'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use( VueSocketio, 'http://localhost:3000' ) // Automaticly socket connect from url string

new Vue( {
  router,
  store,
  render: h => h( App ),
} ).$mount( '#app' )

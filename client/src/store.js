import Vue from 'vue'
import Vuex from 'vuex'
import counterModule from './modules/counterModule'

Vue.use( Vuex )

export default new Vuex.Store( {
  state: {
    io: {},
  },
  mutations: {
    setSocket: ( state, socket ) => {
      state.io = socket
      console.log( 'socket connected' )
    },
  },
  modules: {
    counterModule,
  },
} )


const counterModule = {
  state: {
    count: 0,
  },
  mutations: {
    SOCKET_COUNTER_INCREMENT ( state ) {
      state.count = state.count + 1
    },
    SOCKET_COUNTER_DECREMENT ( state ) {
      state.count--
    },
  },
  actions: {
    socket_increment: ( { state, rootState } ) => {
      rootState.io.emit( 'increment', state.count )
    },
    socket_decrement: ( { state, rootState } ) => {
      rootState.io.emit( 'decrement', state.count )
    },
  },
}

export default counterModule

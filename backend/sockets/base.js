const socketIO = io => {
  io.on( 'connection',  socket => {
    console.log( 'New user Connected: ' + socket.id )
    socket.on( 'increment', ( counter ) => {
      console.log( 'increment' )
      io.sockets.emit( 'COUNTER_INCREMENT', counter + 1 )
    } )
    socket.on( 'decrement', ( counter ) => {
      console.log( 'decrement' )
      io.sockets.emit( 'COUNTER_DECREMENT', counter - 1 )
    } )
  } )
}

module.exports = socketIO

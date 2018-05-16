const socketIO = io => {
  io.on( 'connection',  socket => {
    console.log( 'New user Connected: ' + socket.id )
  } )
}

module.exports = socketIO

import express      from 'express'
import http         from 'http'
import { Server }   from 'socket.io'
import { env }      from './src/model/environment'

  const app    = express(),
        server = http.createServer(app),
        io     = new Server(server, {
          cors : {
            origin : 'http://localhost:4200'
          }
        })

  // Created server listens given port      
  server.listen(env.host.port, () => {
    console.log(`listening on * ${env.host.port}`)
  })

  io.on('connection', (socket) => {
    
    socket.on('chat message', (msg) => {
      // send to specific client
    })
  })


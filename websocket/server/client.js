const WebSocket = require('ws')
const ws = new WebSocket('ws://127.0.0.1:3000', {
  headers: {
    token: '123'
  }
})
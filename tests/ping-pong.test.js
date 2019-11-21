const { actor_t } = require('../src/actor')

let a = new actor_t()

a.on('ping', the => {
  console.log('ping')
  the.sender.send('pong', {
    sender: a
  })
})

let b = new actor_t()

b.on('pong', the => {
  console.log('pong')
  the.sender.send('ping', {
    sender: b
  })
})

a.send('ping', {
  sender: b
})

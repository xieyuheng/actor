const { actor_t } = require('../src/actor')

let a = new actor_t()

a.on('ping', sender => {
  console.log('a on ping')
  sender.send('pong', a)
})

let b = new actor_t()

b.on('pong', sender => {
  console.log('b on pong')
  sender.send('ping', b)
})

a.send('ping', b) // loop forever

setTimeout(() => {
  process.exit()
}, 300)

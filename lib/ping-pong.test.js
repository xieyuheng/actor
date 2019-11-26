const { actor_t } = require('./actor')

let a = new actor_t()

a.on('ping', re => {
  console.log('a on ping')
  re.send('pong', a)
})

let b = new actor_t()

b.on('pong', re => {
  console.log('b on pong')
  re.send('ping', b)
})

a.send('ping', b) // loop forever

setTimeout(() => {
  process.exit()
}, 300)

let events = require('events')

class actor_t {
  constructor() {
    this.emitter = new events.EventEmitter()
  }

  on(tag, handler) {
    this.emitter.on(tag, handler)
  }

  send(tag, msg) {
    setImmediate(() => {
      this.emitter.emit(tag, msg)
    })
  }
}

module.exports = {
  actor_t
}

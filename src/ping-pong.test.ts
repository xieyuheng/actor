import { Actor } from "./actor"

const a: Actor({
  ping: Actor,
  hi: string
}) = new Actor({
  ping(sender) {
    console.log("a on ping")
    sender.send("pong", a)
  },
  hi(name) {
    console.log(`hi ${name}`)
  }
})

const b: Actor({
  ping: Actor,
  hi: string
}) = new Actor({
  pong(sender) {
    console.log("b on pong")
    sender.send("ping", b)
  }
})

a.send("ping", b) // loop forever

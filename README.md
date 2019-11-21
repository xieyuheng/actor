# Actor

Actor model for nodejs.

- `npm install @cicadoidea/actor`

## Examples

### Basic ping-pong

``` js
const { actor_t } = require('@cicadoidea/actor')

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
```

## Community

Contributions are welcome, see [current TODO list](TODO.md) for tasks. <br>
(Please add yourself to [the AUTHORS list](AUTHORS) if you made any contributions.)

- We enforce C4 as collaboration protocol.
  - [The C4 RFC](https://rfc.zeromq.org/spec:42/C4)
- [Style Guide](STYLE-GUIDE.md)
  - Observe the style of existing code and respect it.
- [Code of Conduct](CODE-OF-CONDUCT.md)

## License

- [GPLv3](LICENSE)

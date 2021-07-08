import { EventEmitter } from "events"

export class Actor(MessageTypeMapper: Record(string, Type)) {
  emitter: EventEmitter = new EventEmitter()
  listeners: Record(eventName: string, (message: MessageTypeMapper[eventName]) -> void)

  constructor(listeners: Record(eventName: string, (message: MessageTypeMapper[eventName]) -> void)) {
    this.listeners = listeners
  }

  on(eventName: string, listener: (message: MessageTypeMapper[eventName]) -> void) {
    this.emitter.on(eventName, listener)
  }

  send(eventName: string, message: MessageTypeMapper[eventName]): void {
    setImmediate(() => {
      this.emitter.emit(eventName, message)
    })
  }
}

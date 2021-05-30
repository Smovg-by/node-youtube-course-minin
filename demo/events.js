const EventEmitter = require('events')
//создадим объект класса EventEmitter
// const emitter = new EventEmitter()
// добавим прослушивание событий
// emitter.on('anything', data => {
//   console.log('ON: anything', data)
// })
//Эмитим (прослушиваем события) и передаем им параметры
// emitter.emit('anything', { a: 1 })
// emitter.emit('anything', { b: 2 })
// Взовем асинхронно
// setTimeout(() => {
//   emitter.emit('anything', { c: 3 })
// }, 2000)

//можно наследовать классы, чтобы писать свой фунционал

class Dispatcher extends EventEmitter {
  subscribe (eventName, cb) {
    console.log('[subscribe...]')
    this.on(eventName, cb)
  }
  dispatch (eventName, data) {
    console.log('[dispatching...]')
    this.emit(eventName, data)
  }
}
// создадим объект от нашего нового класса dispatcher

const dis = new Dispatcher()
//Важен порядок. Сначала subscribe, потом dispatch
dis.subscribe('aa', data => {
  console.log('aa', data)
})
dis.dispatch('aa', { aa: 22 })

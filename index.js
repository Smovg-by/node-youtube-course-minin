//
//Видеокурс: https://www.youtube.com/watch?v=3aGSqasVPsI
//
//создаем свой веб сервер с помощью библиотеки http
const http = require('http')
//подключим модуль fs
const fs = require('fs')
//подключим модуль path
const path = require('path')
// создадим сервер
const server = http.createServer((request, response) => {
  if (request.url === '/') {
    fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
      if (err) {
        throw arr
      }
      // Пропишем хедеры
      response.writeHead('200', {
        'Content-type': 'text/html'
      })
      response.end(data)
    })
  } else if (request.url === '/contacts') {
    fs.readFile(
      path.join(__dirname, 'public', 'contacts.html'),
      (err, data) => {
        if (err) {
          throw arr
        }
        // Пропишем хедеры
        response.writeHead('200', {
          'Content-type': 'text/html'
        })
        response.end(data)
      }
    )
  }

  // response.end('<h1>Hello, NodeJS!!!</h1>')
})
//Прослушивание сервера. Выдаст сообщение после запуска сервера
server.listen(3002, () => {
  console.log('Server has been started...')
})
// после запуска в ноде index.js можно перейти в браузер и перейти на Localhost:3002.
// появится сообщение 'Hello, NodeJS'
//
//далее внесем изменения в packaje.json. Создадим скрипт start и end
// "scripts": {
//   "start": "node index.js",
//   "dev": "nodemon index.js"
// },
//далее можем в терминале вызвать: npm run dev

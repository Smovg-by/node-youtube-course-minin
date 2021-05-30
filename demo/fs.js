//FS MODULE (File System MODULE)
const fs = require('fs')
// Модуль предоставляет возможность работы с асинхронными методами и синхронными. В Node только один поток данных, поэтому
// чтобы не останавливать работу приложения, пока выполняется функция, лучше пользоваться асинхронными методами.
// Бдуем ими пользоваться ниже
const path = require('path') // подключим библиотеку path

// Создание диретории относительно заданной
//
// fs.mkdir(path.join(__dirname, 'test'), err => {
//   if (err) {
//     throw err
//   }
//   console.log('The directory is made!')
// })
//
// Создание файла
const filePath = path.join(__dirname, 'test', 'text.txt') // формируем путь к файлу с именем
// создаем файл и записываем в него данные. Повторный вызов перезатрет предыдущий файл ПОЛНОСТЬЮ
// fs.writeFile(filePath, 'Hello, NodeJS', err => {
//   if (err) {
//     throw err
//   }
//   console.log('Write data to the file complete')
// })
//
//Если нужно давить контент к файлу нужно использовать метод следующий. Если файла нет, метод создает новый файл
// fs.appendFile(filePath, '\nThis data was appended', err => {
//   if (err) {
//     throw err
//   }
//   console.log('The data was appended to a file')
// })
//
//Чтение данных из файла. в переменную data приходят данные из буффера. Есть два способа преобразовать данные из буфера
fs.readFile(filePath, (err, content) => {
  if (err) {
    throw err
  }
  const data = Buffer.from(content)
  console.log('Content...', data.toString())
})

const os = require('os')

//Операционная система
console.log('Operation sysytem is...', os.platform())
// Архитектура процессора
console.log('Processor architecture is...', os.arch())
// Более подробная информация о процессоре. Выводит массив. Колчиество элементов равно количеству ядер
console.log('Detailed processor info...', os.cpus())
// Объем свободной памяти
console.log('Free memory is...', os.freemem())
// Всего памяти
console.log('Total memory is...', os.totalmem())
// Базовая директория
console.log('Homedir is...', os.homedir())
// Сколько времени влючена система
console.log('Sysytem is on for...', os.uptime())

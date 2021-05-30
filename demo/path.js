//PATH MODULE
const path = require('path')
//path.basename
console.log('Name of the file...', path.basename(__filename))
//path.dirname
console.log('Name of the diresctory...', path.dirname(__filename))
//path.extname
console.log('Extension of the file...', path.extname(__filename))
//path.parse
console.log('Path method(universal using)...', path.parse(__filename)) // returns an object with file propperties as previous methods

console.log('Path method(universal using)...', path.parse(__filename).root)
console.log('Path method(universal using)...', path.parse(__filename).dir)
console.log('Path method(universal using)...', path.parse(__filename).base)
console.log('Path method(universal using)...', path.parse(__filename).ext)
console.log('Path method(universal using)...', path.parse(__filename).name)

//get the full file path

console.log(path.join(__dirname, 'server', 'index.html'))

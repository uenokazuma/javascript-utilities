const fs = require('fs')
const path = require('path')

const methods = {}

fs.readdirSync(__dirname).forEach(file => {
  if (file === 'index.js' || path.extname(file) !== '.js') return
  const name = path.basename(file, '.js')
  const method = require(path.join(__dirname, name))
  Object.assign(methods, method)
})

module.exports = methods
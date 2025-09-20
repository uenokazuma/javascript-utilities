const funcs = require('./utils/index')

const [,, func, ...args] = process.argv
if(funcs[func]) {
  console.log(funcs[func](...args))
} else {
  console.log('No such function', func)
}
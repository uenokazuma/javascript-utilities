function randomRange(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function randomLengthNumber(length) {
  const crypto = require('crypto')

  if(length > 16) return 'Length must be less than or equal to 15'

  //Define min and max the needed integer length
  const min = 10 ** (length - 1)
  const max = 10 ** length
  const result = crypto.randomInt(min, max).toString().padStart(length, '0')

  return result
}

function randomLengthString(length) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let result = ''
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length)
    result += chars[randomIndex]
  }
  return result
}

module.exports = { randomRange, randomLengthNumber, randomLengthString }
function prefixId(lastId, length = 6) {
  let prefix = lastId.replace(/\d+$/, '')
  let number = lastId.slice(prefix.length)

  let nextNumber = 1
  if(number) {
    nextNumber = Number(number) + 1
  }

  return prefix + nextNumber.toString().padStart(length, '0')
}

function timestampId(lastId, length = 6) {
  let number = ''
  let prefix = lastId

  if(lastId.length >= length) {
    number = lastId.slice(-length)
    prefix = lastId.slice(0, lastId.length - length)
  }
  
  let nextNumber = 1
  if(!Number(number)) {
    prefix = lastId
    const now = new Date()
    prefix = prefix.toLowerCase().replace(/yyyy|yy|mm|dd|hh|ii|ss/g, (match) => {
      switch (match) {
        case 'yyyy': return now.getFullYear()
        case 'yy': return String(now.getFullYear()).slice(-2)
        case 'mm': return String((now.getMonth() + 1)).padStart(2, '0')
        case 'dd': return String(now.getDate()).padStart(2, '0')
        case 'hh': return String(now.getHours()).padStart(2, '0')
        case 'ii': return String(now.getMinutes()).padStart(2, '0')
        case 'ss': return String(now.getSeconds()).padStart(2, '0')
      }
    })
  } else {
    nextNumber = Number(number) + 1
  }

  return `${prefix}${nextNumber.toString().padStart(length, '0')}`
}

module.exports = { prefixId, timestampId }
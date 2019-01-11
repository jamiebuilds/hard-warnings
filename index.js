'use strict'

let util = require('util')

function override(name, method) {
  function fn(message, ...args) {
    method(message, ...args)
    let formatted = util.formatWithOptions({ colors: true }, message, ...args)
    let error = new Error(`Called \`${name}()\` with:\n\n${formatted}\n`)
    Error.captureStackTrace(error, fn)
    throw error
  }

  return fn
}

function hardWarnings() {
  let originalWarn = console.warn
  let originalError = console.error

  console.warn = override('console.warn', console.warn)
  console.error = override('console.error', console.error)

  return function uninstallHardWarnings() {
    console.warn = originalWarn
    console.error = originalError
  }
}

module.exports = hardWarnings

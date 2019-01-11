'use strict'
let test = require('ava')
let hardWarnings = require('./')

test('works', t => {
  let uninstall = hardWarnings()

  t.throws(() => { console.warn('Blah blah %d', 42) })
  t.throws(() => { console.error('Blah blah %d', 42) })

  uninstall()

  t.notThrows(() => { console.warn('Blah blah %d', 42) })
  t.notThrows(() => { console.error('Blah blah %d', 42) })
})

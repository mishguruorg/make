import test from 'ava'

import { make, withMake } from './index'

test('exports make', (t) => {
  t.is(typeof make, 'function')
})

test('exports withMake', (t) => {
  t.is(typeof withMake, 'function')
})

import { TestInterface } from 'ava'

import make from './make'

import { Context } from './types'

interface Options {
  test: TestInterface<Context>,
}

const withMake = (options: Options) => {
  const { test } = options
  test.serial.beforeEach((t) => {
    t.context.make = (table, attributes) => {
      return make({
        table,
        context: t.context,
        attributes,
      })
    }
  })
}

export default withMake

import { TestInterface } from 'ava'
import { Database, Transaction } from '@mishguru/data'

import make from './make'

import { WithMakeFn } from './types'

interface WithMakeContext {
  make: WithMakeFn,
  db?: Database,
  transaction?: Transaction,
}

interface Options {
  test: TestInterface<WithMakeContext>,
}

const withMake = (options: Options) => {
  const { test } = options
  test.serial.beforeEach((t) => {
    const { transaction } = t.context
    t.context.make = (table, attributes) => {
      return make({
        table,
        context: t.context,
        transaction,
        attributes,
      })
    }
  })
}

export default withMake

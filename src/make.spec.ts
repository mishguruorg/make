import test from 'ava'
import sinon from 'sinon'

import make from './make'
import { Account, Item } from './testHelpers/models'

const ACCOUNT = {
  id: 'ACCOUNT_ID',
  get: sinon.stub(),
}

const ITEM = {
  id: 'ITEM_ID',
  get: sinon.stub(),
}

const stubAccount = sinon.stub(Account, 'create').resolves(ACCOUNT)
sinon.stub(Item, 'create').resolves(ITEM)

test.serial('should create item and account', async (t) => {
  const context = {}

  const item = await make({
    context,
    table: Item,
  })

  t.deepEqual(context, {
    account: ACCOUNT,
    item: ITEM,
  })

  t.is(item, ITEM)
})

test.serial('should pass a transaction', async (t) => {
  stubAccount.resetHistory()
  const context = {}
  const stubTransaction: any = 'STUB'
  await make({
    context,
    table: Item,
    transaction: stubTransaction,
  })

  stubAccount.getCalls().forEach((call) => {
    t.deepEqual(call.lastArg, { transaction: stubTransaction })
  })
})

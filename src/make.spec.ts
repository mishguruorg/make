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

sinon.stub(Account, 'create').resolves(ACCOUNT)

sinon.stub(Item, 'create').resolves(ITEM)

test('should create item and account', async (t) => {
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

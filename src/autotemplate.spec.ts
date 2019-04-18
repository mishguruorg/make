import test from 'ava'

import autotemplate from './autotemplate'
import { Item, Account } from './testHelpers/models'

test('should create key', async (t) => {
  const template = autotemplate(Account)
  t.is(template.key, 'account')
})

test('should extract entityName', async (t) => {
  const template = autotemplate(Account)
  t.is(template.entityName, 'Account')
})

test('should extract tableName', async (t) => {
  const template = autotemplate(Account)
  t.is(template.tableName, 'Table_Account')
})

test('should extract foreignKeys', async (t) => {
  const template = autotemplate(Item)
  t.deepEqual(template.foreignKeys, {
    accountId: {
      tableName: 'Table_Account',
      columnName: 'id',
    },
  })
})

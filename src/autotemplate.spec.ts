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

test('should extract columns', async (t) => {
  const template = autotemplate(Account)
  t.is(typeof template.columns.email, 'string')
  t.is(typeof template.columns.username, 'string')
  t.is(typeof template.columns.password, 'string')
  t.is(typeof template.columns.firstName, 'string')
  t.is(typeof template.columns.lastName, 'string')
  t.is(typeof template.columns.timezone, 'string')
  t.is(typeof template.columns.integer, 'number')
  t.is(typeof template.columns.float, 'number')
  t.is(typeof template.columns.text, 'string')
  t.is(typeof template.columns.bool, 'number')
  t.is(typeof template.columns.bigInt, 'number')
  t.is(typeof template.columns.type, 'string')
})

test('archived column should always be false', (t) => {
  const template = autotemplate(Account)
  t.is(template.columns.archived, 0)
})

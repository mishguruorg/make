import make from './make'
import findTableByName from './findTableByName'

import { TableMap, Context, Template } from './types'
import { Transaction } from '@mishguru/data'

interface Options {
  tables: TableMap,
  context: Context,
  transaction: Transaction,
  template: Template,
}

const resolveRequiredForeignKeys = async (options: Options) => {
  const { tables, context, template, transaction } = options

  if (template.foreignKeys == null) {
    throw new Error(
      `Template ${template.entityName} does not define "foreignKeys".`,
    )
  }

  const foreignKeys: Record<string, any> = {}

  for (const key in template.foreignKeys) {
    const { tableName, columnName } = template.foreignKeys[key]
    const table = findTableByName({ tables, tableName })
    const row = await make({
      context,
      table,
      transaction,
      reuseIfPossible: true,
    })
    foreignKeys[key] = row.get(columnName)
  }
  return foreignKeys
}

export default resolveRequiredForeignKeys

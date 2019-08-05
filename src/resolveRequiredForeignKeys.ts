import make from './make'
import findTableByName from './findTableByName'

import { TableMap, Context, Template, Attributes } from './types'

interface Options {
  tables: TableMap,
  context: Context,
  template: Template,
  attributes: Attributes,
}

const resolveRequiredForeignKeys = async (options: Options) => {
  const { tables, context, template, attributes } = options

  if (template.foreignKeys == null) {
    throw new Error(
      `Template ${template.entityName} does not define "foreignKeys".`,
    )
  }

  const foreignKeys: Record<string, any> = {}

  for (const key in template.foreignKeys) {
    if (
      attributes.hasOwnProperty(key) &&
      typeof attributes[key] !== 'undefined'
    ) {
      continue
    }

    const { tableName, columnName } = template.foreignKeys[key]
    const table = findTableByName({ tables, tableName })
    const row = await make({
      context,
      table,
      reuseIfPossible: true,
    })
    foreignKeys[key] = row.get(columnName)
  }
  return foreignKeys
}

export default resolveRequiredForeignKeys

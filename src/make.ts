import autotemplate from './autotemplate'
import resolveRequiredForeignKeys from './resolveRequiredForeignKeys'

import { MakeFn } from './types'

const make: MakeFn = async (options) => {
  const { context, table, reuseIfPossible = false, attributes = {} } = options

  const template = autotemplate(table)

  if (reuseIfPossible && context.hasOwnProperty(template.key)) {
    return context[template.key]
  }

  const foreignKeys = await resolveRequiredForeignKeys({
    tables: table.sequelize.models,
    context,
    template,
  })

  const row = await table.create({
    ...template.columns,
    ...foreignKeys,
    ...attributes,
  })

  context[template.key] = row

  return row
}

export default make

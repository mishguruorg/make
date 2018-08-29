import * as allTables from './tables'

const findTableByName = ({ db, tableName }) => {
  const table = db.sequelize.models[tableName]
  if (table == null) {
    throw new Error(`Could not find table "${tableName}"`)
  }
  return table
}

const resolveRequiredForeignKeys = async ({ db, context, template }) => {
  if (template.foreignKeys == null) {
    throw new Error(`Template ${template.name} does not define "foreignKeys".`)
  }

  const foreignKeys = {}
  for (const key in template.foreignKeys) {
    const [tableName, column] = template.foreignKeys[key]
    const table = findTableByName({ db, tableName })
    const row = await make({ db, context, table, reuseIfPossible: true })
    foreignKeys[key] = row[column]
  }
  return foreignKeys
}

const make = async (options) => {
  const { db, context, table, reuseIfPossible, customField = {} } = options
  const { name } = table

  if (allTables.hasOwnProperty(name) === false) {
    throw new Error(`No table definition exists for "${name}"`)
  }

  const template = allTables[name]()

  if (reuseIfPossible && context.hasOwnProperty(template.key)) {
    return context[template.key]
  }

  const foreignKeys = await resolveRequiredForeignKeys({
    db,
    context,
    template
  })

  const row = await table.create({
    ...template.columns,
    ...foreignKeys,
    ...customField
  })

  context[template.key] = row

  return row
}

const withMake = ({ test, db }) => {
  test.serial.beforeEach((t) => {
    t.context.make = (table, customField) => {
      return make({
        db,
        context: t.context,
        table,
        customField
      })
    }
  })
}

export { make, withMake }

import faker from 'faker'
import { isMatch } from 'matcher'

import { Table, Template } from './types'

const createKeyFromEntityName = (entityName: string) => {
  entityName = entityName.replace(/_/g, '')
  let prefixLength = 1
  if (entityName.match(/^\w{3}/)) {
    prefixLength = 2
  }
  const prefix = entityName.slice(0, prefixLength).toLowerCase()
  const name = entityName.slice(prefixLength)
  return prefix + name
}

const fakeColumn = (field: string, type: any) => {
  // ENUM
  if (type.values != null) {
    return faker.random.arrayElement(type.values)
  }

  const dbType = type.constructor.types.sqlite[0]

  switch (dbType) {
    case 'INTEGER':
    case 'BIGINT':
      return faker.random.number()
    case 'FLOAT':
      return faker.random.number() / 10
    case 'TINYINT':
      switch (true) {
        case isMatch(field, 'archived'):
          return 0
        default:
          return faker.random.boolean() ? 1 : 0
      }
    case 'DATETIME':
    case 'DATE':
      let date
      switch (true) {
        case isMatch(field, 'createdAt'):
        case isMatch(field, 'updatedAt'):
          date = faker.date.past()
          break
        default:
          date = faker.date.recent()
          break
      }
      date.setMilliseconds(0)
      return date
    case 'VARCHAR':
    case 'TEXT':
      switch (true) {
        case isMatch(field, '*username'):
          return faker.internet.userName()
        case isMatch(field, '*firstName'):
          return faker.name.firstName()
        case isMatch(field, '*lastName'):
          return faker.name.lastName()
        case isMatch(field, '*email'):
          return faker.internet.email()
        case isMatch(field, '*password'):
          return faker.internet.password()
        case isMatch(field, '*timezone'):
          return faker.address.country()
        case isMatch(field, '*id'):
          return faker.random.uuid()
        case isMatch(field, '*url'):
          return faker.internet.url()
        default: {
          const randomWords = faker.random.words()
          const randomAlphaNumeric = faker.random.alphaNumeric(4)
          return randomAlphaNumeric.concat(randomWords)
        }
      }
    default:
      return null
  }
}

const toObject = (obj: Record<string, any>, tuple: [string, any]) => {
  const [key, value] = tuple
  obj[key] = value
  return obj
}

const autotemplate = (table: Table): Template => {
  const tableName = table.tableName
  const entityName = table.options.name.singular
  const key = createKeyFromEntityName(entityName)

  const foreignKeys = Object.values(table.tableAttributes)
    .filter((attribute: any) => {
      const { references } = attribute
      return references != null && references.model !== tableName
    })
    .map((attribute: any) => {
      const { field, references } = attribute
      const { model, key } = references
      return [
        field,
        {
          tableName: model,
          columnName: key,
        },
      ]
    })
    .reduce(toObject, {})

  const columns = Object.values(table.tableAttributes)
    .filter((attribute: any) => {
      const { references, autoIncrement } = attribute
      return references == null && autoIncrement !== true
    })
    .map((attribute: any) => {
      const { field, type } = attribute
      return [field, fakeColumn(field, type)]
    })
    .reduce(toObject, {})

  return {
    key,
    entityName,
    tableName,
    foreignKeys,
    columns,
  }
}

export default autotemplate

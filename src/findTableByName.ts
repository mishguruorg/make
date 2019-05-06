import { Table, TableMap } from './types'

interface Options {
  tables: TableMap,
  tableName: string,
}

const findTableByName = (options: Options) => {
  const { tables, tableName } = options
  const table = Object.values(tables).find((t: Table) => {
    return t.tableName === tableName
  })
  if (table == null) {
    throw new Error(`Could not find table with name "${tableName}"`)
  }
  return table
}

export default findTableByName

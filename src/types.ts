import { Transaction } from 'sequelize'

export type AnyAttributes = Record<string, any>

export type AnyInstance = Record<string, any>

export type Table = any

export type TableMap = Record<string, Table>

export interface Context {
  transaction?: Transaction,
  make?: WithMakeFn,
  [key: string]: any,
}

export type Attributes = Record<string, any>

export interface Reference {
  tableName: string,
  columnName: string,
}

export interface Template {
  key: string,
  tableName: string,
  entityName: string,
  foreignKeys: Record<string, Reference>,
  columns: Record<string, any>,
}

export type WithMakeFn = (
  table: Table,
  attributes?: Attributes,
) => Promise<AnyInstance>

export type MakeFn = (options: {
  context: Context,
  table: Table,
  attributes?: Attributes,
  reuseIfPossible?: boolean,
}) => Promise<AnyInstance>

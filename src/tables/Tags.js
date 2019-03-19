// @flow

import faker from 'faker'

const table = () => ({
  key: 'tag',
  tableName: 'Tags',
  foreignKeys: {},
  columns: {
    createdAt: faker.date.past(),
    updatedAt: faker.date.past(),
    name: faker.random.word()
  }
})

export default table

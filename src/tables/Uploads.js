// @flow

import faker from 'faker'

const table = () => ({
  key: 'upload',
  tableName: 'Uploads',
  foreignKeys: {
    userId: ['Users', 'id'],
    contentId: ['Content', 'id']
  },
  columns: {
    createdAt: faker.date.past(),
    updatedAt: faker.date.past(),
    archived: faker.random.boolean(),
    filename: faker.system.fileName()
  }
})

export default table

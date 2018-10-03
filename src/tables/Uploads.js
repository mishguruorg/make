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
    filename: faker.system.fileName(),
    archived: false
  }
})

export default table

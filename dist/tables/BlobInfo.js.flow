// @flow

import faker from 'faker'

const table = () => ({
  key: 'blobInfo',
  tableName: 'BlobInfo',
  foreignKeys: {
    userId: ['Users', 'id']
  },
  columns: {
    createdAt: faker.date.past(),
    updatedAt: faker.date.past(),

    path: faker.internet.url(),
    s3Key: faker.random.uuid(),
    mimeType: faker.system.mimeType()
  }
})

export default table

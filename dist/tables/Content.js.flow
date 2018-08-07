// @flow

import faker from 'faker'

const table = () => ({
  key: 'content',
  tableName: 'Content',
  foreignKeys: {
    userId: ['Users', 'id']
  },
  columns: {
    createdAt: faker.date.past(),
    updatedAt: faker.date.past(),

    path: faker.image.imageUrl(),
    posterImagePath: faker.image.imageUrl(),
    s3Key: faker.system.fileName(),

    isVideo: faker.random.boolean(),
    height: faker.random.number({ min: 100, max: 1000 }),
    width: faker.random.number({ min: 100, max: 1000 }),
    videoLength: faker.random.number({ min: 1, max: 15 }),

    archived: false
  }
})

export default table

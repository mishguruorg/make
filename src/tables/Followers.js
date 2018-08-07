// @flow

import faker from 'faker'

const table = () => ({
  key: 'follower',
  tableName: 'Followers',
  foreignKeys: {},
  columns: {
    createdAt: faker.date.past(),
    updatedAt: faker.date.past(),
    snapName: faker.internet.userName()
  }
})

export default table

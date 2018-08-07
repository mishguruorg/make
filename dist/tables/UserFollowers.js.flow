// @flow

import faker from 'faker'

const table = () => ({
  key: 'userFollower',
  tableName: 'UserFollowers',
  foreignKeys: {
    scAccountId: ['SC_Account', 'id'],
    followerId: ['Followers', 'id']
  },
  columns: {
    createdAt: faker.date.past(),
    updatedAt: faker.date.past(),

    addAttempts: faker.random.number({ max: 5 }),
    addedAt: faker.helpers.randomize([null, faker.date.past()]),
    removedAt: faker.helpers.randomize([null, faker.date.past()]),

    snapchatId: faker.internet.userName(),
    snapchatFriendId: faker.random.uuid(),

    added: faker.random.boolean(),
    welcomed: faker.random.boolean(),
    addedSource: faker.helpers.randomize([
      'ADDED_BY_USERNAME',
      'ADDED_BY_ADDED_BACK',
      'ADDED_BY_QR_CODE',
      'ADDED_BY_DEEP_LINK'
    ]),
    autoForward: faker.random.boolean()
  }
})

export default table

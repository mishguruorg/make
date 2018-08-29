// @flow

import faker from 'faker'

const table = () => ({
  key: 'instagramThreadItem',
  tableName: 'IG_ThreadItems',
  foreignKeys: {
    instagramAccountId: ['InstagramAccounts', 'id'],
    instagramAccountFollowerId: ['IG_AccountFollower', 'id']
  },
  columns: {
    createdAt: faker.date.past(),
    updatedAt: faker.date.past(),
    itemId: faker.random.alphaNumeric(20),
    unixTimestamp: faker.random.number(),
    itemType: faker.random.alphaNumeric(12),
    seenCount: faker.random.number()
  }
})

export default table

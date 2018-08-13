// @flow

import faker from 'faker'

const table = () => ({
  key: 'instagramFollower',
  tableName: 'IG_Follower',
  foreignKeys: {
    instagramAccountId: ['InstagramAccounts', 'id']
  },
  columns: {
    createdAt: faker.date.past(),
    updatedAt: faker.date.past(),
    username: faker.internet.userName(),
    fullName: faker.name.findName(),
    instagramId: faker.random.alphaNumeric(10),
    isVerified: faker.random.boolean(),
    isPrivate: faker.random.boolean(),
    reelAutoArchiveOn: faker.random.boolean()
  }
})

export default table

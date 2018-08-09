//@flow

import faker from 'faker'

const table = () => ({
  key: 'instagramAccountFollower',
  tableName: 'IG_AccountFollower',
  foreignKeys: {
    instagramAccountId: ['InstagramAccounts', 'id'],
    instagramFollowerId: ['IG_Follower', 'id']
  },
  columns: {
    createdAt: faker.date.past(),
    updatedAt: faker.date.past(),
    following: faker.random.boolean(),
    isBestie: faker.random.boolean(),
    autoForward: faker.random.boolean()
  }
})

export default table
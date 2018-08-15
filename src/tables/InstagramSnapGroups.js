// @flow

import faker from 'faker'

const table = () => ({
  key: 'instagramSnapGroup',
  tableName: 'InstagramSnapGroups',
  foreignKeys: {
    instagramAccountId: ['InstagramAccounts', 'id']
  },
  columns: {
    createdAt: faker.date.past(),
    updatedAt: faker.date.past(),
    name: `${faker.name.findName()}'s snap group`,
    scheduledDate: faker.date.past(),
    archived: faker.random.boolean()
  }
})

export default table


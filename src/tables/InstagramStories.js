// @flow

import faker from 'faker'

const table = () => ({
  key: 'instagramStory',
  tableName: 'InstagramStories',
  foreignKeys: {
    instagramAccountId: ['InstagramAccounts', 'id'],
    contentId: ['Content', 'id']
  },
  columns: {
    createdAt: faker.date.past(),
    updatedAt: faker.date.past(),
    name: `${faker.name.findName()}'s snap story`,
    storyDate: faker.date.past(),
    archived: faker.random.boolean(),
    uniqueKey: faker.random.uuid()
  }
})

export default table

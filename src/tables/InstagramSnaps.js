// @flow

import faker from 'faker'

const table = () => ({
  key: 'instagramSnap',
  tableName: 'InstagramSnaps',
  foreignKeys: {
    instagramStoryPostId: ['InstagramStories', 'id'],
    instagramAccountId: ['InstagramAccounts', 'id'],
    contentId: ['Content', 'id'],
    instagramSnapGroupId: ['InstagramSnapGroups', 'id']
    // previousInstagramSnapId: ['InstagramSnaps', 'id']
  },
  columns: {
    createdAt: faker.date.past(),
    updatedAt: faker.date.past(),
    postedToStoryAt: faker.date.past(),
    duration: faker.random.number({ max: 10 }),
    viewerCountOnStory: faker.random.number({ max: 1000 }),
    instagramSnapGroupOrder: faker.random.number({ max: 1000 }),
    attemptedToPostCount: faker.random.number({ max: 3 }),
    lastPostAttempt: faker.date.past(),
    isLive: faker.random.boolean(),
    isScheduled: faker.random.boolean(),
    archived: faker.random.boolean(),
    expiringOnStoryAt: faker.date.future()
  }
})

export default table

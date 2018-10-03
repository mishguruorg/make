// @flow

import faker from 'faker'

const table = () => ({
  key: 'snap',
  tableName: 'Snaps',
  foreignKeys: {
    scAccountId: ['SC_Account', 'id'],
    contentId: ['Content', 'id'],
    blobId: ['BlobInfo', 'id'],
    snapGroupId: ['SnapGroups', 'id']
  },
  columns: {
    createdAt: faker.date.past(),
    updatedAt: faker.date.past(),

    storyPostId: faker.random.alphaNumeric(59),
    media_key: faker.random.alphaNumeric(44),
    media_iv: faker.random.alphaNumeric(24),
    media_id: faker.random.alphaNumeric(23),

    time: faker.random.number({ max: 15 }),
    postedToStoryAt: faker.date.past(),
    sentDirectlyAt: faker.date.past(),
    finishedSendAt: faker.date.past(),

    storyViewCount: faker.random.number(),
    storyScreenshotCount: faker.random.number(),

    directViewCount: faker.random.number(),
    directScreenshotCount: faker.random.number(),

    isStoryPost: faker.random.boolean(),
    isDirectSend: faker.random.boolean(),
    isScheduled: faker.random.boolean(),
    isInfiniteDuration: faker.random.boolean(),

    snapGroupOrder: faker.random.number(),

    storyAttemptCount: faker.random.number({ max: 3 }),

    storyEngagementRate: faker.finance.amount(0, 2, 5),

    lastStoryAttempt: faker.date.past(),
    dataLastUpdatedAt: faker.date.past(),

    isLive: faker.random.boolean(),
    removeFromStory: faker.random.boolean(),
    removedFromStoryAt: faker.helpers.randomize([null, faker.date.past()]),
    excludeFromStory: faker.random.boolean(),

    archived: false
  }
})

export default table

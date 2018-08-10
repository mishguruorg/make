// @flow

import faker from 'faker'

const table = () => ({
  key: 'InstagramReceivedSnap',
  tableName: 'IG_ReceivedSnaps',
  foreignKeys: {
    instagramAccountId: ['InstagramAccounts', 'id'],
    instagramAccountFollowerId: ['IG_AccountFollower', 'id'],
    contentId: ['Content', 'id'],
    itemId: ['IG_ThreadItems', 'itemId']
  },
  columns: {
    createdAt: faker.date.past(),
    updatedAt: faker.date.past(),
    isReelShare: faker.random.boolean(),
    mediaId: faker.random.alphaNumeric(12),
    viewMode: Math.random() > 0.5 ? 'visual_media' : 'view_mode',
    sentAt: faker.date.past(),
    archived: false
  },
  
})

export default table

// @flow

import faker from 'faker'

const table = () => ({
  key: 'receivedSnap',
  tableName: 'ReceivedSnaps',
  foreignKeys: {
    scAccountId: ['SC_Account', 'id'],
    userFollowerId: ['UserFollowers', 'id'],
    contentId: ['Content', 'id'],
    blobId: ['BlobInfo', 'id']
    // encryptedBlobId: ['BlobInfo', 'id']
    // forwardedSnapId: ['Snaps', 'id']
  },
  columns: {
    createdAt: faker.date.past(),
    updatedAt: faker.date.past(),

    snapchatId: faker.random.alphaNumeric(12),

    sentAt: faker.date.past(),
    seen: faker.random.boolean(),
    state: faker.helpers.randomize([null, 1]),
    autoForward: faker.random.boolean(),
    time: faker.random.number({ max: 15 }),

    screenshottedAt: faker.date.past(),

    lastSaveAttempt: faker.date.past(),
    snapIV: faker.random.uuid(),
    senderPublicKey: faker.random.uuid(),

    archived: false
  }
})

export default table

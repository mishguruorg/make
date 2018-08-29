// @flow

import faker from 'faker'
import db from '@mishguru/data'

const table = () => ({
  key: 'scAccount',
  tableName: 'SC_Account',
  foreignKeys: {
    userId: ['Users', 'id']
    // proxyid: 'Proxy'
  },
  columns: {
    // timestamps
    createdAt: faker.date.past(),
    updatedAt: faker.date.past(),

    // addFriends
    addFriends: faker.date.past(),
    addFriendsFromSnapcode: faker.date.past(),
    addFriendsFromUnknown: faker.date.past(),
    addFriendsFromUrl: faker.date.past(),
    addFriendsFromUsername: faker.date.past(),

    // allUpdates
    addedFriendsTimestamp: null,
    allUpdatesTriedAt: faker.date.past(),
    captureSnaps: faker.date.past(),
    checksumsDict: null,
    friendsSyncToken: null,

    // ReceiveSnap
    autoForward: faker.random.boolean(),

    // Snapchat - account
    snapName: faker.internet.userName(),
    backgroundInterval: faker.random.number({ max: 100 }),
    score: faker.random.number(),
    received: faker.random.number(),
    sent: faker.random.number(),

    // Snapchat - Privacy settings
    viewMyStorySettingDashboard: faker.helpers.randomize([
      'EVERYONE',
      'MY_FRIENDS'
    ]),
    sendMeSnapsSettingDashboard: faker.helpers.randomize([
      'EVERYONE',
      'MY_FRIENDS'
    ]),
    viewMyStorySettingSnapchat: faker.helpers.randomize([
      'EVERYONE',
      'MY_FRIENDS'
    ]),
    sendMeSnapsSettingSnapchat: faker.helpers.randomize([
      'EVERYONE',
      'MY_FRIENDS'
    ]),

    // Snapchat - Connection
    authToken: faker.random.alphaNumeric(32),
    invalidAuthToken: faker.random.alphaNumeric(32),
    invalidSnapPassword: false,
    loginTriedAt: faker.date.past(),
    loggedOutAt: faker.date.past(),
    snapPassword: db.encryptLegacyPassword(faker.internet.password()),

    // Snapchat - Autologin
    deviceHexCode: faker.random.alphaNumeric(15),
    liveAt: faker.date.past(),
    userIsBeingLoggedIn: faker.helpers.randomize([null, faker.date.past()]),
    userWantsToBeLoggedInAt: faker.helpers.randomize([null, faker.date.past()]),
    loginAttemptCount: faker.random.number({ max: 2 }),
    failedSnapPassword: db.encryptLegacyPassword(faker.internet.password())
  }
})

export default table

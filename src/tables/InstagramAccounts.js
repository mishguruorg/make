// @flow

import faker from 'faker'

const table = () => ({
  key: 'instagramAccount',
  tableName: 'InstagramAccounts',
  foreignKeys: {
    userId: ['Users', 'id'],
  },
  columns: {
    username: faker.internet.userName(),
    password: faker.random.alphaNumeric(10),
    authCookie: faker.random.alphaNumeric(20),
    deviceHexCode: faker.random.alphaNumeric(20),
    loggedInAt: faker.helpers.randomize([null, faker.date.past()]),
    guid: faker.random.uuid,
    csrfToken: faker.random.alphaNumeric(20),
    captureSnaps: faker.date.past(),
    liveAt: faker.date.past()
  }
})

export default table

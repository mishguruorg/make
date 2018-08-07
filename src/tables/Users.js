// @flow

import faker from 'faker'

const table = () => ({
  key: 'user',
  tableName: 'Users',
  foreignKeys: {},
  columns: {
    createdAt: faker.date.past(),
    updatedAt: faker.date.past(),

    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    timezone: 'Pacific/Auckland',
    resetToken: null,

    googleEmail: null,
    googlePassword: null,
    dtoken1i: null,
    dtoken1v: null,
    googleOAuthToken: null,
    bearer: null,
    bearerTriedAt: null,
    disableStart: null,
    disableEnd: null,
    sequence: 0,
    sequenceCount: 0
  }
})

export default table

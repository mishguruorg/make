// @flow

import faker from 'faker'

const table = () => ({
  key: 'snapGroup',
  tableName: 'SnapGroups',
  foreignKeys: {
    scAccountId: ['SC_Account', 'id']
  },
  columns: {
    createdAt: faker.date.past(),
    updatedAt: faker.date.past(),
    name: `${faker.name.findName()}'s snap group`,
    scheduledDate: faker.date.past(),
    archived: false
  }
})

export default table

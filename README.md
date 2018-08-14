# Make

> Create test data for any table with ease

## Goals

1. Let's open source it!
2. Don't hard code it to our database. Sequelize should be the minimum
   requirement.

## Testing Philosophy

### Mock Data

When creating a row with `make`, it will fill it with appropriate fake data.

If your test requires a specific value to be a in a column, for example, that
`url = 'https://mish.guru'`, then you can pass custom fields you want to use as second argument.

```javascript
const content = await make(db.Content, { url: 'https://mish.guru' })
```

### Relations

`make` will handle foreign keys for you. If you want to create a
`ReceivedSnap`, then a `User`, `SnapchatAccount`, `Content`, `BlobInfo`,
`Follower`, and `UserFollower` will all be created for you as well.

```
const receivedSnap = await make(db.ReceivedSnap)
```

## Installation

```shell
npm install --save-dev @mishguru/make
```

## Usage

*Long form:*

```javascript
const test = require('ava')
const db = require('@mishguru/data')
const { make } = require('@mishguru/make')

test('my test', (t) => {
  const receivedSnap = await make({
    db,
    context: t.context,
    table: db.ReceivedSnap
  })

  // t.context also has the following properties added:
  // - blobInfo
  // - content
  // - follower
  // - receivedSnap
  // - userFollower
  // - user
})
```

*Short form with AVA helper (recommended):*

```javascript
const test = require('ava')
const { db } = require('@mishguru/make')
const { withMake } = require('@mishguru/make')

withMake({ test, db })

test('my test', (t) => {
  const { make } = t.context
  const receivedSnap = await make(db.ReceivedSnap)
  // fields also available through t.context
})
```

## Real Life Examples

_Note: this example is not accurate yet_

``` javascript
import db from '@mishguru/data'
import test from 'ava'
import moment from 'moment'

import { bindLifecycle } from '@mishguru/test-helpers'
import { withMake } from '@mishguru/make'

import { toGlobalId } from '../../../relay'
import * as graphql from '../../../testHelpers/graphql'

import { createTestContent } from '../../../testHelpers/integrationTestHelpers/createTestContent'

import { createTestReceivedSnap } from '../../../testHelpers/integrationTestHelpers/createTestReceivedSnap'

bindLifecycle(test, db)
withMake({ test, db })


test('Query receivedSnaps for a Snapchat Account', async (t) => {
  const { scAccount } = t.context

  await make(db.BlobInfo)
  const firstContent = await make(db.Content)
  await firstContent.update({ path: 'http://test.com' })

  const firstSnap = await make(db.ReceivedSnap)
  await secondSnap.update({ sentAt: moment() })

  await make(db.BlobInfo)
  const secondContent = await make(db.Content)
  await secondContent.update({ path: 'http://test2.com'} )

  const secondSnap = await make(db.ReceivedSnap)
  await secondSnap.update({ sentAt: moment().subtract(10, 'day') })

  const query = `
    query ReceivedSnaps {
      viewer {
        receivedSnaps (first: 2, accountIds: ["SnapchatAccount:${scAccount.id}"]) {
          totalCount
          nodes {
            id
            content {
              url
            }
          }
        }
      }
    }`

  const expectedResult = {
    data: {
      viewer: {
        receivedSnaps: {
          nodes: [
            {
              content: {
                url: 'http://test.com'
              },
              id: toGlobalId('SnapchatReceivedSnap', firstSnap.id)
            },
            {
              content: {
                url: 'http://test2.com'
              },
              id: toGlobalId('SnapchatReceivedSnap', secondSnap.id)
            }
          ],
          totalCount: 2
        }
      }
    }
  }

  await graphql.execAndCompare({ t, query, expectedResult })
})
```

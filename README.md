# Make

> Create test data for any table with ease

## Goals

1. Let's open source it!
2. Don't hard code it to our database. Sequelize should be the minimum
   requirement.

## Testing Philosophy

### Mock Data

When creating a row with `make`, it will fill it with appropriate fake data.
You do not have a choice which values it will set, and you should not care
about that. 

If your test requires a specific value to be a in a column, for example, that
`archived = true`, then you should explicity set that in your test.

```javascript
const content = await make(db.Content)
await content.update({ archived: true })
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

import { bindLifecycle } from '@mishguru/test-helpers'
import { withMake } from '@mishguru/make'

import * as graphql from '../../../testHelpers/graphql'

bindLifecycle(test, db)
withMake({ test, db })

test('Query basic user stories from both Instagram and Snapchat', async (t) => {
  const { make, instagramAccount } = t.context
  const firstSnap = await make(db.InstagramReceivedSnaps)
  const secondSnap = await make(db.InstagramReceivedSnaps)
  const query = `
    query ReceivedSnaps {
      viewer {
        receivedSnaps (first: 1, accountIds: ["InstagramAccount:${instagramAccount.id}"]) {
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
              id: 'InstagramReceivedSnap:1'
            },
            {
              content: {
                url: 'http://test2.com'
              },
              id: 'InstagramReceivedSnap:2'
            }
          ],
          totalCount: 2
        }
      }
    }
  }

  const fullResult = await graphql.execAndCompare({ t, query, expectedResult })
```

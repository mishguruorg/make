# Make

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

```
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

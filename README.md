# Make

> Easily create rows for any table

Built for Sequelize v3 and AVA.

## Install

```shell
npm install --save-dev @mishguru/make
```

## Usage

### Manual

```typescript
import { make } from '@mishguru/make'

import db from './db'

const context = {}

const task = await make({
  context,
  table: db.Task,
  attributes: {
    // optionally set custom attributes
    name: 'task with this specific name'
  }
})
```

### Transaction support
If the test context has a `Sequalize` transaction object under the `transaction` key, `make` will automatically use it when creating entities in the database.
While inside an active transaction, created entities will only be accessible under that transaction as well.

### With AVA Context

If you are using AVA, then you can use `withMake` -- which automatically
injects itself into the test context.

```typescript
import anyTest, { TestInterface } from 'ava'
import { withMake, WithMakeFn } from '@mishguru/make'

const test = anyTest as TestInterface<{ make: WithMakeFn }>

withMake({ test })

test('my test', async (t) => {
  const { make } = t.context

  const task = make(db.Task)

  // create multiple tasks
  const tasks = [
    await make(db.Task),
    await make(db.Task),
    await make(db.Task),
  ])

  // custom attributes
  const specialTask = make(db.Task, { name: 'special' })
})
```

### Mock Data

When creating a row with `make`, it will fill it with appropriate fake data.

If your test requires a specific value to be a in a column, for example, that
`url = 'https://mish.guru'`, then you can pass custom fields you want to use as
second argument.

```javascript
// make
const content = await make({
  context: {},
  table: db.Content,
  attributes: { url: 'https://mish.guru' }
})

// withMake
const content = await t.context.make(db.Content, { url: 'https://mish.guru' })
```

### Relations

This is where `make` shines. It automatically detects foreign keys and will
recursively create related tables for you.

For example, imagine you had a database with the following entities:

```
[Task] >---| [Project] >---| [User]

Task.belongsTo(Project)
Project.belongsTo(User)
```

With make, you can create a `Task` in one line, and don't need to worry about
setting up a `User` and a `Project`.

```typescript
const context = {}
const task = await make({ context, table: db.Task })

console.log(context)
// { task: {...}, project: {...}, user: {...} }
```

## Full Example

```typescript
import Sequelize from 'sequelize'
import { make } from '@mishguru/make'

const sequelize = new Sequelize(...)

const Project = sequelize.define('project', {
  title: Sequelize.STRING,
  description: Sequelize.TEXT
})

const Task = sequelize.define('task', {
  title: Sequelize.STRING,
  description: Sequelize.TEXT,
  deadline: Sequelize.DATE,
})

Task.belongsTo(Project)

const start = async () => {
  const context = {}

  const task = await make({
    context,
    table: Task,
    attributes: {
      title: 'a custom title'
    }
  })

  console.log(context)
  /*
  {
    project: {
      id: 1,
      title: 'District Granite Wooden',
      description: 'e-markets Bedfordshire'
    },
    task: {
      id: 1,
      title: 'a custom title',
      description: 'Massachusetts',
      deadline: 2019-05-05T17:08:06.435Z,
      projectId: 1
    }
  }*/

  console.log(task === context.task)
  // true
}

start().catch(console.error)
```

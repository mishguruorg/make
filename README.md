# Make

> Easily create rows for any table

Built for Sequelize v3 and AVA.

## Install

```shell
npm install --save-dev @mishguru/make
```

## Usage

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

## Testing Philosophy

### Mock Data

When creating a row with `make`, it will fill it with appropriate fake data.

If your test requires a specific value to be a in a column, for example, that
`url = 'https://mish.guru'`, then you can pass custom fields you want to use as
second argument.

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

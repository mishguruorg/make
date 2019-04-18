# Make

> Easily create rows for any table

Built for Sequelize v3 and AVA.

## Install

```shell
npm install --save-dev @mishguru/make
```

## Usage

```typescript
```

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

import test from 'ava'
import db from '@mishguru/data'
import { bindLifecycle } from '@mishguru/test-helpers'

import { withMake } from './index'

bindLifecycle(test, db)
withMake({ test, db })

test('make a user', async (t) => {
  const { make } = t.context
  const user = await make(db.User)
  t.truthy(user)

  t.truthy(t.context.user)
})

test('make a snapchat account', async (t) => {
  const { make } = t.context
  const scAccount = await make(db.SnapchatAccount)
  t.truthy(scAccount)

  t.truthy(t.context.user)
  t.truthy(t.context.snapchatAccount)
})

test('make a follower', async (t) => {
  const { make } = t.context
  const follower = await make(db.Follower)
  t.truthy(follower)

  t.truthy(t.context.follower)
})

test('make a user follower', async (t) => {
  const { make } = t.context
  const userFollower = await make(db.UserFollower)
  t.truthy(userFollower)

  t.truthy(t.context.user)
  t.truthy(t.context.follower)
  t.truthy(t.context.userFollower)
})

test('make a content', async (t) => {
  const { make } = t.context
  const content = await make(db.Content)
  t.truthy(content)

  t.truthy(t.context.user)
  t.truthy(t.context.content)
})

test('make a receivedSnap', async (t) => {
  const { make } = t.context
  const receivedSnap = await make(db.ReceivedSnap)
  t.truthy(receivedSnap)

  t.truthy(t.context.blobInfo)
  t.truthy(t.context.content)
  t.truthy(t.context.follower)
  t.truthy(t.context.receivedSnap)
  t.truthy(t.context.user)
  t.truthy(t.context.userFollower)
})

test('make an instagramReceivedSnap', async (t) => {
  const { make } = t.context
  const instagramReceivedSnap = await make(db.InstagramReceivedSnaps)
  t.truthy(instagramReceivedSnap)
  
  t.truthy(t.context.content)
  t.truthy(t.context.instagramAccountFollower)
  t.truthy(t.context.instagramAccount)
})

test('make an Instagram account', async (t) => {
  const { make } = t.context
  const instagramAccount = await make(db.InstagramAccount)
  t.truthy(instagramAccount)

  t.truthy(t.context.user)
})

test('make an Instagram account follower', async (t) => {
  const { make } = t.context
  const instagramAccountFollower = await make(db.InstagramAccountFollower)
  t.truthy(instagramAccountFollower)

  t.truthy(t.context.instagramAccount)
  t.truthy(t.context.instagramFollower)
})

test('make an Instagram follower', async (t) => {
  const { make } = t.context
  const instagramFollower = await make(db.InstagramFollower)
  t.truthy(instagramFollower)

  t.truthy(t.context.instagramAccount)
})

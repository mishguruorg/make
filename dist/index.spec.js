"use strict";

var _ava = _interopRequireDefault(require("ava"));

var _data = _interopRequireDefault(require("@mishguru/data"));

var _testHelpers = require("@mishguru/test-helpers");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _testHelpers.bindLifecycle)(_ava.default, _data.default);
(0, _ava.default)('make a user', async t => {
  const user = await (0, _index.default)({
    db: _data.default,
    context: t.context,
    table: _data.default.User
  });
  t.truthy(user);
  t.truthy(t.context.user);
});
(0, _ava.default)('make a snapchat account', async t => {
  const scAccount = await (0, _index.default)({
    db: _data.default,
    context: t.context,
    table: _data.default.SnapchatAccount
  });
  t.truthy(scAccount);
  t.truthy(t.context.user);
  t.truthy(t.context.snapchatAccount);
});
(0, _ava.default)('make a follower', async t => {
  const follower = await (0, _index.default)({
    db: _data.default,
    context: t.context,
    table: _data.default.Follower
  });
  t.truthy(follower);
  t.truthy(t.context.follower);
});
(0, _ava.default)('make a user follower', async t => {
  const userFollower = await (0, _index.default)({
    db: _data.default,
    context: t.context,
    table: _data.default.UserFollower
  });
  t.truthy(userFollower);
  t.truthy(t.context.user);
  t.truthy(t.context.follower);
  t.truthy(t.context.userFollower);
});
(0, _ava.default)('make a content', async t => {
  const content = await (0, _index.default)({
    db: _data.default,
    context: t.context,
    table: _data.default.Content
  });
  t.truthy(content);
  t.truthy(t.context.user);
  t.truthy(t.context.content);
});
(0, _ava.default)('make a receivedSnap', async t => {
  const receivedSnap = await (0, _index.default)({
    db: _data.default,
    context: t.context,
    table: _data.default.ReceivedSnap
  });
  t.truthy(receivedSnap);
  t.truthy(t.context.blobInfo);
  t.truthy(t.context.content);
  t.truthy(t.context.follower);
  t.truthy(t.context.receivedSnap);
  t.truthy(t.context.user);
  t.truthy(t.context.userFollower);
});
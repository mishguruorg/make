"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _faker = _interopRequireDefault(require("faker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const table = () => ({
  key: 'userFollower',
  tableName: 'UserFollowers',
  foreignKeys: {
    scAccountId: ['SC_Account', 'id'],
    followerId: ['Followers', 'id']
  },
  columns: {
    createdAt: _faker.default.date.past(),
    updatedAt: _faker.default.date.past(),
    addAttempts: _faker.default.random.number({
      max: 5
    }),
    addedAt: _faker.default.helpers.randomize([null, _faker.default.date.past()]),
    removedAt: _faker.default.helpers.randomize([null, _faker.default.date.past()]),
    snapchatId: _faker.default.internet.userName(),
    snapchatFriendId: _faker.default.random.uuid(),
    added: _faker.default.random.boolean(),
    welcomed: _faker.default.random.boolean(),
    addedSource: _faker.default.helpers.randomize(['ADDED_BY_USERNAME', 'ADDED_BY_ADDED_BACK', 'ADDED_BY_QR_CODE', 'ADDED_BY_DEEP_LINK']),
    autoForward: _faker.default.random.boolean()
  }
});

var _default = table;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _faker = _interopRequireDefault(require("faker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const table = () => ({
  key: 'receivedSnap',
  tableName: 'ReceivedSnaps',
  foreignKeys: {
    scAccountId: ['SC_Account', 'id'],
    userFollowerId: ['UserFollowers', 'id'],
    contentId: ['Content', 'id'],
    blobId: ['BlobInfo', 'id'] // encryptedBlobId: ['BlobInfo', 'id']
    // forwardedSnapId: ['Snaps', 'id']

  },
  columns: {
    createdAt: _faker.default.date.past(),
    updatedAt: _faker.default.date.past(),
    snapchatId: _faker.default.random.alphaNumeric(12),
    sentAt: _faker.default.date.past(),
    seen: _faker.default.random.boolean(),
    state: _faker.default.helpers.randomize([null, 1]),
    autoForward: _faker.default.random.boolean(),
    time: _faker.default.random.number({
      max: 15
    }),
    screenshottedAt: _faker.default.date.past(),
    lastSaveAttempt: _faker.default.date.past(),
    snapIV: _faker.default.random.uuid(),
    senderPublicKey: _faker.default.random.uuid(),
    archived: false
  }
});

var _default = table;
exports.default = _default;
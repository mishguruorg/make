"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _faker = _interopRequireDefault(require("faker"));

var _data = _interopRequireDefault(require("@mishguru/data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const table = () => ({
  key: 'snapchatAccount',
  tableName: 'SC_Account',
  foreignKeys: {
    userId: ['Users', 'id'] // proxyid: 'Proxy'

  },
  columns: {
    // timestamps
    createdAt: _faker.default.date.past(),
    updatedAt: _faker.default.date.past(),
    // addFriends
    addFriends: _faker.default.date.past(),
    addFriendsFromSnapcode: _faker.default.date.past(),
    addFriendsFromUnknown: _faker.default.date.past(),
    addFriendsFromUrl: _faker.default.date.past(),
    addFriendsFromUsername: _faker.default.date.past(),
    // allUpdates
    addedFriendsTimestamp: null,
    allUpdatesTriedAt: _faker.default.date.past(),
    captureSnaps: _faker.default.date.past(),
    checksumsDict: null,
    friendsSyncToken: null,
    // ReceiveSnap
    autoForward: _faker.default.random.boolean(),
    // Snapchat - account
    snapName: _faker.default.internet.userName(),
    backgroundInterval: _faker.default.random.number({
      max: 100
    }),
    score: _faker.default.random.number(),
    received: _faker.default.random.number(),
    sent: _faker.default.random.number(),
    // Snapchat - Privacy settings
    viewMyStorySettingDashboard: _faker.default.helpers.randomize(['EVERYONE', 'MY_FRIENDS']),
    sendMeSnapsSettingDashboard: _faker.default.helpers.randomize(['EVERYONE', 'MY_FRIENDS']),
    viewMyStorySettingSnapchat: _faker.default.helpers.randomize(['EVERYONE', 'MY_FRIENDS']),
    sendMeSnapsSettingSnapchat: _faker.default.helpers.randomize(['EVERYONE', 'MY_FRIENDS']),
    // Snapchat - Connection
    authToken: _faker.default.random.alphaNumeric(32),
    invalidAuthToken: _faker.default.random.alphaNumeric(32),
    invalidSnapPassword: false,
    loginTriedAt: _faker.default.date.past(),
    loggedOutAt: _faker.default.date.past(),
    snapPassword: _data.default.encryptLegacyPassword(_faker.default.internet.password()),
    // Snapchat - Autologin
    deviceHexCode: _faker.default.random.alphaNumeric(15),
    liveAt: _faker.default.date.past(),
    userIsBeingLoggedIn: _faker.default.helpers.randomize([null, _faker.default.date.past()]),
    userWantsToBeLoggedInAt: _faker.default.helpers.randomize([null, _faker.default.date.past()]),
    loginAttemptCount: _faker.default.random.number({
      max: 2
    }),
    failedSnapPassword: _data.default.encryptLegacyPassword(_faker.default.internet.password())
  }
});

var _default = table;
exports.default = _default;
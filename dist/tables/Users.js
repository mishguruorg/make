"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _faker = _interopRequireDefault(require("faker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const table = () => ({
  key: 'user',
  tableName: 'Users',
  foreignKeys: {},
  columns: {
    createdAt: _faker.default.date.past(),
    updatedAt: _faker.default.date.past(),
    firstName: _faker.default.name.firstName(),
    lastName: _faker.default.name.lastName(),
    email: _faker.default.internet.email(),
    password: _faker.default.internet.password(),
    timezone: 'Pacific/Auckland',
    resetToken: null,
    googleEmail: null,
    googlePassword: null,
    dtoken1i: null,
    dtoken1v: null,
    googleOAuthToken: null,
    bearer: null,
    bearerTriedAt: null,
    disableStart: null,
    disableEnd: null,
    sequence: 0,
    sequenceCount: 0
  }
});

var _default = table;
exports.default = _default;
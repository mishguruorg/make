"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _faker = _interopRequireDefault(require("faker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const table = () => ({
  key: 'follower',
  tableName: 'Followers',
  foreignKeys: {},
  columns: {
    createdAt: _faker.default.date.past(),
    updatedAt: _faker.default.date.past(),
    snapName: _faker.default.internet.userName()
  }
});

var _default = table;
exports.default = _default;
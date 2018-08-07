"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _faker = _interopRequireDefault(require("faker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const table = () => ({
  key: 'blobInfo',
  tableName: 'BlobInfo',
  foreignKeys: {
    userId: ['Users', 'id']
  },
  columns: {
    createdAt: _faker.default.date.past(),
    updatedAt: _faker.default.date.past(),
    path: _faker.default.internet.url(),
    s3Key: _faker.default.random.uuid(),
    mimeType: _faker.default.system.mimeType()
  }
});

var _default = table;
exports.default = _default;
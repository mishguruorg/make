"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _faker = _interopRequireDefault(require("faker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const table = () => ({
  key: 'content',
  tableName: 'Content',
  foreignKeys: {
    userId: ['Users', 'id']
  },
  columns: {
    createdAt: _faker.default.date.past(),
    updatedAt: _faker.default.date.past(),
    path: _faker.default.image.imageUrl(),
    posterImagePath: _faker.default.image.imageUrl(),
    s3Key: _faker.default.system.fileName(),
    isVideo: _faker.default.random.boolean(),
    height: _faker.default.random.number({
      min: 100,
      max: 1000
    }),
    width: _faker.default.random.number({
      min: 100,
      max: 1000
    }),
    videoLength: _faker.default.random.number({
      min: 1,
      max: 15
    }),
    archived: false
  }
});

var _default = table;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var allTables = _interopRequireWildcard(require("./tables"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const findTableByName = ({
  db: db,
  tableName: tableName
}) => {
  const table = db.sequelize.models[tableName];

  if (table == null) {
    throw new Error(`Could not find table "${tableName}"`);
  }

  return table;
};

const resolveRequiredForeignKeys = async ({
  db: db,
  context: context,
  template: template
}) => {
  if (template.foreignKeys == null) {
    throw new Error(`Template ${template.name} does not define "foreignKeys".`);
  }

  const foreignKeys = {};

  for (const key in template.foreignKeys) {
    const [tableName, column] = template.foreignKeys[key];
    const table = findTableByName({
      db: db,
      tableName: tableName
    });
    const row = await make({
      db: db,
      context: context,
      table: table
    });
    foreignKeys[key] = row[column];
  }

  return foreignKeys;
};

const make = async options => {
  const {
    db: db,
    context: context,
    table: table
  } = options;
  const {
    name: name
  } = table;

  if (allTables.hasOwnProperty(name) === false) {
    throw new Error(`No table definition exists for "${name}"`);
  }

  const template = allTables[name]();

  if (context.hasOwnProperty(template.key)) {
    return context[template.key];
  }

  const foreignKeys = await resolveRequiredForeignKeys({
    db: db,
    context: context,
    template: template
  });
  const row = await table.create(_objectSpread({}, template.columns, foreignKeys));
  context[template.key] = row;
  return row;
};

var _default = make;
exports.default = _default;
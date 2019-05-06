import Sequelize from 'sequelize'

const sequelize = new Sequelize('mysql://root@localhost:3306/make')

const Account = sequelize.import('Account', (sequelize, DataTypes) => {
  return sequelize.define(
    'Account',
    {
      email: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      timezone: DataTypes.STRING,

      archived: DataTypes.BOOLEAN,

      integer: DataTypes.INTEGER,
      float: DataTypes.FLOAT,
      text: DataTypes.TEXT,
      bool: DataTypes.BOOLEAN,
      bigInt: DataTypes.BIGINT,

      type: DataTypes.ENUM('A', 'B', 'C'),
    },
    {
      tableName: 'Table_Account',
    },
  )
})

const Item = sequelize.import('Item', (sequelize, DataTypes) => {
  return sequelize.define(
    'Item',
    {
      accountId: DataTypes.INTEGER,
    },
    {
      tableName: 'Table_Snapchat_Item',
    },
  )
})

Item.belongsTo(Account, { foreignKey: 'accountId' })
Account.hasMany(Item, { foreignKey: 'accountId' })

export { Item, Account }

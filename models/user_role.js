const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "role_id",
      autoIncrement: true
    },
    role_name: {
      type: DataTypes.CHAR(64),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "role_name",
      autoIncrement: false
    },
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "parent_id",
      autoIncrement: false
    },
    role_desc: {
      type: DataTypes.CHAR(2000),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "role_desc",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "user_role",
    comment: "",
    indexes: []
  };
  const UserRoleModel = sequelize.define("user_role_model", attributes, options);
  return UserRoleModel;
};
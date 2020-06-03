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
      primaryKey: false,
      field: "role_id",
      autoIncrement: false,
      references: {
        key: "role_id",
        model: "user_role_model"
      }
    },
    priv_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "priv_id",
      autoIncrement: false,
      references: {
        key: "priv_id",
        model: "privilege_model"
      }
    },
    priv_value: {
      type: DataTypes.CHAR(50),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "priv_value",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "role_privilege_map",
    comment: "",
    indexes: []
  };
  const RolePrivilegeMapModel = sequelize.define("role_privilege_map_model", attributes, options);
  return RolePrivilegeMapModel;
};
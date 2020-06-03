const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    priv_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "priv_id",
      autoIncrement: true
    },
    priv_name: {
      type: DataTypes.CHAR(50),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "priv_name",
      autoIncrement: false
    },
    priv_desc: {
      type: DataTypes.CHAR(2000),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "priv_desc",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "privilege",
    comment: "",
    indexes: []
  };
  const PrivilegeModel = sequelize.define("privilege_model", attributes, options);
  return PrivilegeModel;
};
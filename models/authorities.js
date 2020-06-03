const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "id",
      autoIncrement: true
    },
    username: {
      type: DataTypes.CHAR(64),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "username",
      autoIncrement: false
    },
    authority: {
      type: DataTypes.CHAR(50),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "authority",
      autoIncrement: false
    },
    version: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "version",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "authorities",
    comment: "",
    indexes: []
  };
  const AuthoritiesModel = sequelize.define("authorities_model", attributes, options);
  return AuthoritiesModel;
};
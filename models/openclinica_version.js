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
      primaryKey: true,
      field: "id",
      autoIncrement: true
    },
    name: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "name",
      autoIncrement: false
    },
    build_number: {
      type: DataTypes.CHAR(1000),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "build_number",
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
    },
    update_timestamp: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "update_timestamp",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "openclinica_version",
    comment: "",
    indexes: []
  };
  const OpenclinicaVersionModel = sequelize.define("openclinica_version_model", attributes, options);
  return OpenclinicaVersionModel;
};